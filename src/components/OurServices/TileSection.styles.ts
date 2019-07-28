import styled from "styled-components";
import { Card } from "@material-ui/core";

const TileBody = styled(Card)`
  border: 1px solid #eee;
  border-top: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding: 30px;

  :hover {
    border: 1px solid transparent;
    border-top: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 10px 30px -10px rgba(0,0,0,.4);
  }
`

export {
  TileBody,
}