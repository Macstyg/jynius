import React from "react"
import { ThemeProvider } from 'styled-components'
import { Link } from "gatsby-theme-material-ui";

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Carousel from "../components/Carousel/Carousel";
import theme from "../gatsby-theme-material-ui/theme";
import AboutUs from "../components/AboutUs/AboutUs";
import GlobalStyle from "../components/GlobalStyle";
import Team from "../components/Team/Team";
import Services from "../components/OurServices/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactUs from "../components/ContactUs/ContactUs";

const IndexPage: React.FC<{}> = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <Carousel />
        <AboutUs />
        <Team />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <SEO title="Home" />
        <Link to="/">Go to page 2</Link>
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
