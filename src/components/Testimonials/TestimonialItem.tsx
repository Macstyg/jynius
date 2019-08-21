import React from 'react'
import { FixedObject } from 'gatsby-image';
import { Grid } from '@material-ui/core';
import Quote from '../Common/Quote';

interface Props {
  avatar: FixedObject
  feedback: string
}

const TestimonialItem: React.FC<Props> = ({ avatar, feedback }) => {
  return (
    <Grid item lg={6} md={4}>
      <Quote avatar={avatar} feedback={feedback} />
    </Grid>

  )
}

export default TestimonialItem