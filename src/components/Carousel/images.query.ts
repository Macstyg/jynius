import { graphql } from "gatsby";

export default graphql`
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
  `