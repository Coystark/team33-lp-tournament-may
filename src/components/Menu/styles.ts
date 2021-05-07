import styled from 'styled-components';
import { ILogo } from './types';

export const Root = styled.div<ILogo>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  padding: ${(props) => (props.scrolled ? '10px 120px 10px 120px' : '40px 90px 40px 90px')};
  width: 100%;
  background-color: ${(props) => (props.scrolled ? '#00000066' : 'none')};
  align-items: center;
  transition: 0.5s;

  @media(max-width: 480px) {
   justify-content: center;
   padding: 40px 0 40px 0;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;

  @media(max-width: 480px) {
    display: none;
  }
`;
