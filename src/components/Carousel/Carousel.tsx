import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Img from "gatsby-image"

import { useStaticQuery, graphql } from 'gatsby';
import imagesQuery from './images.query';
import { Wrapper, AbsoluteBlock, Paragraph, CarouselButton, HEADER_HEIGHT } from './Carousel.styles';
import { Typography } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  const data = useStaticQuery(graphql`
    query {
      photo1: file(relativePath: { eq: "photo-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo2: file(relativePath: { eq: "photo-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo3: file(relativePath: { eq: "photo-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo4: file(relativePath: { eq: "photo-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photo5: file(relativePath: { eq: "photo-5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <AbsoluteBlock>
        <Typography variant="h1">JYN web studio</Typography>
        <Paragraph variant="h3" component="p">
          We are web studio in Kyiv.
        </Paragraph>
        <CarouselButton color="primary" variant="outlined">
          Get in touch
        </CarouselButton>
      </AbsoluteBlock>
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Object.keys(data).map(key =>
          <Img key={key} fluid={data[key].childImageSharp.fluid} style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }} />
        )}
      </AutoPlaySwipeableViews>
    </Wrapper>
  )
}

export default Carousel