import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Section } from "../Common/Common.styles";

const AppFooter = styled.footer`
  padding-top: 17rem;
  padding-bottom: 4rem;
  background: #333;
`

const FooterHeader = styled(Typography)`
  color: #fff;
`
const FooterBottom = styled(Section)`
padding-top: 3rem;
margin-top: 3rem;
`

export {
  AppFooter,
  FooterHeader,
  FooterBottom,
}