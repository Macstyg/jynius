import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const AppHeader = styled.header`
  padding: 1rem;
  transition: .3s all ease;
  z-index: 10;
  background: #fff;

  &.isSticky {
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    position: fixed;
    top: 0;
    background: #fff;
    box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
  }
`

const MobileNavButton = styled(IconButton)`
  @media (min-width: 992px) {
    display: none;
  }
`
const DesctopView = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`

const MobileNavigation = styled.div<{ open: boolean }>`
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background:
  #fff;
  height: calc(100vh);
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(110%)'};
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  transition: .3s all ease-in-out;
`

export {
  AppHeader,
  MobileNavButton,
  DesctopView,
  MobileNavigation,
}