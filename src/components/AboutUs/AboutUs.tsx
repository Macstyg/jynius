import React, { memo } from 'react'
import { Grid } from '@material-ui/core';
import AboutUsDescription from './AboutUsDescription';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import imagesQuery from '../Carousel/images.query';
import { Container, Wrapper } from '../Common/Common.styles';
import { MainPageSectionIds } from '../../types'

const ImgWrapper = styled.div`
  height: 70%;
  width: 100%;
`

const AboutUs = () => {
  const data = useStaticQuery(graphql`
  query {
    aboutUs: file(relativePath: { eq: "photo-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <Wrapper id={`${MainPageSectionIds.about}`}>
      <Container container justify="space-between" spacing={4}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <ImgWrapper>
            <Img fluid={data.aboutUs.childImageSharp.fluid} style={{ height: '100%' }} />
          </ImgWrapper>
        </Grid>
        <Grid item xs={12} md={5}>
          <AboutUsDescription />
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default memo(AboutUs)
