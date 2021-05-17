import styled from 'styled-components';
import { IRoot, ILinkContainer, IOverlay } from './types';

export const Root = styled.div<IRoot>`
  // Flex
  display: flex;
  justify-content: space-around; 
  align-items: center;

  // Position
  position: fixed;
  z-index: 3;

  // Sizes
  width: 100%;
  max-width: 1920px;
  padding: 20px;

  @media(max-width: 768px) {
    justify-content: space-between; 
  }


  // Others
  background-color: ${(props) => (props.scrolled ? '#00000066' : 'none')};
  transition: 0.5s;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  transition: 0.5s;
`;

export const LinkContainer = styled.div<ILinkContainer>`
  display: flex;
  transition: 0.5s;

  @media(max-width: 768px) {
    display: ${(props) => (props.show ? 'grid' : 'none')};
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    position: absolute;
    top: 90px;
    background-color: #4d0c66;
    width: 100%;
    right: 0;
    left: 0;
    padding: 10px;
  }
`;

export const LinkItem = styled.a`
  padding: 0 30px 0 30px;
  color: white;
  transition: 0.5s;

  &:hover {
    color: rgb(215 131 239);
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleMenu = styled.div`
  display: none;
  margin-left: 15px;
  height: 25px;
  width: 25px;

  @media(max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div<IOverlay>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  background-color: #4d0c6699;

  @media(min-width: 769px) {
    display: none;
  }
`;
