/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { PogText } from '@/components/index';

export const Root = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0 90px 0;
  text-align: center;

  @media(max-width: 480px) {
    padding: 90px 10px 90px 10px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  text-shadow: 0px 0px 8px rgb(255 0 0 / 75%);

  @media(max-width: 480px) {
    font-size: 40px;
  }
`;

export const Description = styled.div`
  padding: 30px 0 0 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media(max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;

    & > div:first-child {
      margin-bottom: 40px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  align-items: center;
  padding: 0 50px 0 50px;
`;

export const CardHeader = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 40px;
`;

export const CardValue = styled(PogText)`
  margin: -20px 0 -20px 0;

  @media(max-width: 480px) {
    font-size: 55px;
  }
`;

export const CardDescription = styled.div`
  font-weight: 300;
  text-transform: lowercase;
  font-size: 20px;
`;

export const SponsorsContainer = styled.div`
  margin-top: 100px;

  @media(max-width: 480px) {
    margin-top: 50px;
  }
`;

export const SponsorsTitle = styled.div`
  font-size: 30px;
  padding-bottom: 30px;
`;

export const SponsorsCard = styled.div`
  border-radius: 15px;
  background-color: #ffffff4D;
`;

export const Sponsors = styled.img`
  padding: 13px 40px 13px 40px;
  max-width: 100%;
  height: auto;

  @media(max-width: 480px) {
    padding: 13px 5px 13px 5px;
  }
`;

export const HR = styled.div`
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, rgba(250, 65, 213, 0), rgba(250, 65, 213, 0.75), rgba(250, 65, 213, 0));
`;
