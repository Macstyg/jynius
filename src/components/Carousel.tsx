import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Img from "gatsby-image"

import { useStaticQuery } from 'gatsby';
import carouselImagesQuery from './carouselImages.query';
import { Wrapper, AbsoluteBlock } from './Carousel.styles';
import { Typography } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  const data = useStaticQuery(carouselImagesQuery)
  return (
    <AutoPlaySwipeableViews
      axis="x"
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {Object.keys(data).map(key =>
        <Wrapper>
          <AbsoluteBlock>
            <Typography variant="h1" color="textSecondary">Hello</Typography>
            <Typography>Buy our devs or die</Typography>
          </AbsoluteBlock>
          <Img key={key} fluid={data[key].childImageSharp.fluid} />
        </Wrapper>
      )}
    </AutoPlaySwipeableViews>
  )
}

export default Carousel