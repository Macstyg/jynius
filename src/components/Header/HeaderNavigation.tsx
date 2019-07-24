import React from 'react'
import { List, ListItem, ListItemText, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
})
)


const HeaderNavigation = () => {
  const { root } = useStyles()
  return (
    <List component="nav" aria-label="navigation" className={root}>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Portfolio" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contacts" />
      </ListItem>
    </List>
  )
}

export default HeaderNavigation