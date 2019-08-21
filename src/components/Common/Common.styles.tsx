import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Container = styled(Grid)`
  width: 80vw;
  max-width: 1140px;
  margin-left: 50%;
  transform: translateX(-50%);
`

const Wrapper = styled.div<{ isDark?: boolean }>`
  padding: 7em 0;
  background-color: ${({ theme, isDark }) => isDark ? theme.palette.custom.grey1 : '#FFF'};
`

const Section = styled(Grid)`
  margin-bottom: 3rem;
`


const BlockQuote = styled.blockquote`
  margin: 0 0 1rem;
  &>p {
    padding-left: 20px;
    font-style: italic;
    font-size: 1.15rem;
    color: #000;
  }
  &>p:first-child {
    border-left: 10px #eee solid;
    margin-bottom: 20px;
  }
  & img {
    border-radius: 50%;
    width: 48px;
  }
`

export {
  Container,
  Wrapper,
  Section,
  BlockQuote,
}