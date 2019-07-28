import styled from "styled-components";
import { Typography, Grid } from "@material-ui/core";
import { TypographyProps } from '@material-ui/core/Typography'


const Container = styled(Grid)`
  width: 80vw;
  max-width: 1140px;
  margin-left: 50%;
  transform: translateX(-50%);
  /* padding: 7em 0; */
`

const Wrapper = styled.div<{ isDark?: boolean }>`
  padding: 7em 0;
  background-color: ${({ theme, isDark }) => isDark ? theme.palette.custom.grey1 : '#FFF'}
`

const Section = styled(Grid)`
  margin-bottom: 3rem;
`

export {
  Container,
  Wrapper,
  Section,
}