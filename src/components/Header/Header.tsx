import { Link } from "gatsby"
import React from "react"
import { Grid } from '@material-ui/core'

import { AppHeader } from "./Header.styles";
import Logo from '../../images/icons/jyn-logo.svg'
import HeaderNavigation from "./HeaderNavigation";

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = () => (
  <AppHeader>
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Link to="/" >
          <Logo />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <HeaderNavigation />
      </Grid>
    </Grid>
  </AppHeader>
)

export default Header
