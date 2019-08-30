import React from 'react'
import { List, ListItemText } from '@material-ui/core';
import { MainPageSectionIds } from '../../types';
import ListItemLink from './ListItemLink';

interface Props {
  classNames?: string
}

const Navigation: React.FC<Props> = ({ classNames = '' }) => {
  return (
    <List component="nav" aria-label="navigation" className={classNames}>
      <ListItemLink href={`#${MainPageSectionIds.home}`}>
        <ListItemText primary="Home" />
      </ListItemLink>
      <ListItemLink href={`#${MainPageSectionIds.about}`}>
        <ListItemText primary="About" />
      </ListItemLink>
      <ListItemLink href={`#${MainPageSectionIds.whatWeDo}`}>
        <ListItemText primary="Services" />
      </ListItemLink>
      <ListItemLink href={`#${MainPageSectionIds.portfolio}`}>
        <ListItemText primary="Portfolio" />
      </ListItemLink>
      <ListItemLink href={`#${MainPageSectionIds.contactUs}`}>
        <ListItemText primary="Contacts" />
      </ListItemLink>
    </List>
  )
}

export default Navigation
