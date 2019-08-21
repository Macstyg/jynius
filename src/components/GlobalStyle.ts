import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: grey !important;
  }
  p {
    font-size: 1rem;
  }
  a {
    color: '#007bff'
  }
  a:visited {
    color: '#007bff'
  }
`

export default GlobalStyle