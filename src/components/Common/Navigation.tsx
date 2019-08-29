import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';

interface Props {
  classNames?: string
}

const Navigation: React.FC<Props> = ({ classNames = '' }) => {
  return (
    <List component="nav" aria-label="navigation" className={classNames}>
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

export default Navigation
