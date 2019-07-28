import React, { memo } from 'react'
import styled from 'styled-components';
import Facebook from '../../images/icons/facebook.svg'
import Linkedin from '../../images/icons/linkedin.svg'
import Github from '../../images/icons/Github.svg'
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(createStyles({
  root: {
    minWidth: 'auto'
  }
}))

const SocialLinks: React.FC = () => {
  const { root } = useStyles()
  return (
    <div>
      <Button classes={{ root }} color="primary" href="#"><Facebook /></Button>
      <Button classes={{ root }} color="primary" href="#"><Linkedin /></Button>
      <Button classes={{ root }} color="primary" href="#"><Github /></Button>
    </div>
  )
}

export default memo(SocialLinks)
