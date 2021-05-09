import { Title } from '@/components/index';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Root = styled.div`
  background-color: #3f0d62;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const QualifiersContainer = styled.div`
  width: 100%;
`;

export const QualifiersDescription = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
`;

export const RewardsGridContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  
  @media(max-width: 480px) {
    justify-content: space-between;

  }


  & > div:first-child {
    margin-right: 120px;

    @media(max-width: 480px) {
      margin-right: 0;
    }
  }

`;

export const RewardsGridItem = styled.div`
`;

export const Reward = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media(max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const RewardBadge = styled.img`
  padding-right: 30px;
  align-self: start;

  @media(max-width: 480px) {
    padding-right: 0;
    align-self: center;
    margin-bottom: 10px;
  }
`;

export const RewardTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;

export const RewardCash = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const GrandFinaleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  @media(max-width: 480px) {
    justify-content: space-around;
  }
`;

export const GrandFinaleImg = styled.img`
  align-self: center;
`;

export const GrandFinaleTitle = styled(Title)`
  margin-left: 40px;
`;

export const GivewayContainer = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 768px) {
    margin-left: 0;
    margin-top: 60px;
    align-items: flex-start;
  }
`;

export const GivewayDescription = styled.p`
  font-size: 17px;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const GivewayImg = styled.img`
  height: auto;
  max-width: 100%;
`;

export const GivewayBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 480px) {
    flex-direction: column;
  }
`;

export const GivewayButton = styled.a`
`;

export const GivewayCorsairLogo = styled.img`
  height: auto;
  max-width: 100%;

  @media(max-width: 480px) {
    margin-bottom: 30px;
    order: -1;
  }
`;
