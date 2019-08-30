import { Link } from "gatsby"
import React, { useState, useCallback, useLayoutEffect } from "react"
import { Grid } from '@material-ui/core'
import get from 'lodash/fp/get'
import throttle from 'lodash/throttle'

import { AppHeader } from "./Header.styles";
import Logo from '../../images/icons/jyn-logo.svg'
import HeaderNavigation from "./HeaderNavigation";

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = () => {
  const [height, setHeight] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])
  const listener = (event) => {
    const { pageYOffset } = window
    if (pageYOffset > height / 2) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  useLayoutEffect(() => {
    window.addEventListener('scroll', throttle(listener, 400, { leading: true }))
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
  return (
    <AppHeader ref={headerRef} className={isSticky ? 'isSticky' : ''}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Link to="/" >
            <Logo />
          </Link>
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <HeaderNavigation />
        </Grid>
      </Grid>
    </AppHeader>
  )
}

export default Header
