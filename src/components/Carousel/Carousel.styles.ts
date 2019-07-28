import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";

const HEADER_HEIGHT = '101px'


const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT});
`
const AbsoluteBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  z-index: 1;
  color: #FFF;
`
const Paragraph = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
`
const CarouselButton = styled(Button)`
  color: #FFF;
  border-color: #FFF;

  :hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`

export {
  HEADER_HEIGHT,
  Wrapper,
  AbsoluteBlock,
  Paragraph,
  CarouselButton,
}