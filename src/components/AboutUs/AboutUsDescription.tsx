import React, { memo } from 'react'
import { Typography, List, ListItemIcon, ListItemText, ListItem, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check'
import styled from 'styled-components';
import { makeStyles, createStyles } from '@material-ui/styles';
import SectionHeading from '../Common/SectionHeading';
import SectionSubHeading from '../Common/SectionSubHeading';
import PlayIcon from '@material-ui/icons/PlayCircleOutline'

const StyledCheckIcon = styled(CheckIcon)`
  color: #28a745;
`
const StyledPlayIcon = styled(PlayIcon)`
  margin-right: 0.5rem;
`

const listItems = [
  'Design',
  'Development',
  'eCommerce',
  'Mobile Apps',
  'SEO',
]

const useStyles = makeStyles(createStyles({
  root: {
    minWidth: '35px'
  }
}))

const AboutUsDescription = () => {
  const { root } = useStyles()
  return (
    <>
      <SectionHeading>About Us</SectionHeading>
      <SectionSubHeading>We Are Expert In Web</SectionSubHeading>
      <Typography>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </Typography>
      <List>
        {listItems.map((item) => (
          <ListItem key={item}>
            <ListItemIcon classes={{ root }}><StyledCheckIcon /></ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Button href="#" color="primary">
        <StyledPlayIcon />
        Watch the video
        </Button>
    </>
  )
}

export default memo(AboutUsDescription)
