import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StickyDescription = styled(Grid)`
  position: sticky;
  top: 7em;
  height: 100%;
`

const VisitWebsiteLink = styled.a`
  text-decoration: none;
  position: relative;
  padding-right: 20px;
  text-transform: uppercase;
  font-size: .75rem;
  letter-spacing: .1rem;
  font-weight: 900;
  transition: .3s all ease;

  &::after {
    transition: .3s all ease;
    position: absolute;
    content: "->";
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    opacity: 0;
    visibility: hidden;
  }
  :hover {
    background-color: #fff;
    box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.1);
  }
  :hover&::after {
    display: inline-block;
    padding: 10px 5px;
  }
`

export {
  StickyDescription,
  VisitWebsiteLink,
}