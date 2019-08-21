import React from 'react'
import { Grid } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import PortfolioItem from './PortfolioItem';

const PortfolioItems = () => {
  const data = useStaticQuery(graphql`
  query {
    project1: file(relativePath: { eq: "photo-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "photo-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3: file(relativePath: { eq: "photo-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project4: file(relativePath: { eq: "photo-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar1: file(relativePath: { eq: "avatar-1.jpg" }) {
      childImageSharp {
        fixed(width: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  const images1 = [
    data.project1.childImageSharp.fluid,
    data.project2.childImageSharp.fluid,
  ]
  const images2 = [
    data.project3.childImageSharp.fluid,
    data.project4.childImageSharp.fluid,
  ]
  const avatar = data.avatar1.childImageSharp.fixed
  const items = [
    { images: images1, avatar, title: 'Project title 1' },
    { images: images2, avatar, title: 'Project title 2' },
    { images: images1, avatar, title: 'Project title 3' },
  ]
  return (
    <Grid item container justify="space-between" style={{ height: '100%' }}>
      {items.map(({ images, avatar, title }, idx) => (
        <PortfolioItem
          key={title}
          title={title}
          images={images}
          avatar={avatar}
          direction={idx % 2 === 0 ? 'row-reverse' : 'row'}
        />
      ))}
    </Grid>
  )
}

export default PortfolioItems
