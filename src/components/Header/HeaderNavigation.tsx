import React, { useState } from 'react'
import { Grid, ListItem, ListItemText, Theme, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles, createStyles } from '@material-ui/styles';

import Navigation from '../Common/Navigation';
import { MobileNavButton, DesctopView, MobileNavigation } from './Header.styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
})
)


const HeaderNavigation = () => {
  const { root } = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuClick: React.MouseEventHandler = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  const handleCloseMenuClick: React.MouseEventHandler = () => {
    setIsOpen(false)
  }

  return (
    <>
      <DesctopView>
        <Navigation classNames={root} />
      </DesctopView>
      <MobileNavButton aria-label="menu" onClick={handleMenuClick}><MenuIcon /></MobileNavButton>
      <MobileNavigation open={isOpen}>
        <Grid container justify="flex-end">
          <IconButton aria-label="close" onClick={handleCloseMenuClick}><CloseIcon /></IconButton>
        </Grid>
        <Navigation />
      </MobileNavigation>
    </>
  )
}

export default HeaderNavigation