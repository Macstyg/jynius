import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
`

const Layout: React.FC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>{children}</Wrapper>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
