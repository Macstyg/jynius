import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
export const fluidImage = graphql`
  fragment fluideImage on File {
    childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
  }
`

const Image: React.FC<{}> = () => {
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
    <>
      {Object.keys(data).map(key =>
        <Img fluid={data[key].childImageSharp.fluid} />
      )}
    </>
  )
}

export default Image
