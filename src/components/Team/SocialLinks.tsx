import React, { memo } from 'react'
import Facebook from '../../images/icons/facebook.svg'
import Linkedin from '../../images/icons/linkedin.svg'
import Github from '../../images/icons/github.svg'
import { Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { GridJustification } from '@material-ui/core/Grid';

const useStyles = makeStyles(createStyles({
  root: {
    minWidth: 'auto'
  }
}))

interface Props {
  justify?: GridJustification
}

const SocialLinks: React.FC<Props> = ({ justify = "flex-start" }) => {
  const { root } = useStyles()
  return (
    <Grid container justify={justify}>
      <Button classes={{ root }} color="primary" href="#"><Facebook /></Button>
      <Button classes={{ root }} color="primary" href="#"><Linkedin /></Button>
      <Button classes={{ root }} color="primary" href="#"><Github /></Button>
    </Grid>
  )
}

export default memo(SocialLinks)
