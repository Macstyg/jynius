import React from 'react'
import Img, { FluidObject, FixedObject } from "gatsby-image"
import { Grid, Typography } from '@material-ui/core';
import { StickyDescription, VisitWebsiteLink } from './Portfolio.style';
import { Section } from '../Common/Common.styles';
import Quote from '../Common/Quote';

interface Props {
  images: FluidObject[]
  avatar: FixedObject
  direction: 'row' | 'row-reverse'
  title: string
}

const PortfolioItem: React.FC<Props> = ({ images, avatar, direction, title }) => {
  return (
    <Section direction={direction} item container justify="space-between" style={{ height: '100%' }}>
      <Grid item lg={6}>
        {images.map(img => <Img key={img.src} fluid={img} style={{ heigth: '100%' }} />)}
      </Grid>
      <StickyDescription item lg={5}>
        <Typography variant="h3">{title}</Typography>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p><strong>Role: </strong>Design, Illustration, Web</p>
        <Quote
          avatar={avatar}
          feedback="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sequi corrupti omnis quas corporis explicabo reiciendis tempora quam libero, ullam quidem sapiente aut optio ducimus sint eius! Eos, odio ducimus?"
        />
        <p>
          <VisitWebsiteLink href="#">Visit website</VisitWebsiteLink>
        </p>
      </StickyDescription>
    </Section>
  )
}

export default PortfolioItem
