import React from "react"
import { Link } from "gatsby-theme-material-ui";
import { Typography } from "@material-ui/core";

import Layout from "../components/Layout"
import Image from "../components/CarouselImage"
import SEO from "../components/Seo"
import Carousel from "../components/Carousel";

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="h1">JYN Hi there</Typography>
    <p>Welcome to your new Gatsby site>>>>>>.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
