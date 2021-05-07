import { Title } from '@/components/index';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Root = styled.div`
  background-color: purple;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const QualifiersContainer = styled.div`

`;

export const RewardsContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;

  @media(max-width: 480px) {
    justify-content: space-around;
  }

  @media(max-width: 768px) {
    justify-content: space-between;
  }

  & > div:first-child {
    margin-right: 120px;

    @media(max-width: 480px) {
      margin-right: 0;
    }
  }

`;

export const RewardsColumn = styled.div`
`;

export const RewardsItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media(max-width: 480px) {
    flex-direction: column;
  }
`;

export const RewardsItemImg = styled.img`
  padding-right: 30px;
  height: 110px;

  @media(max-width: 480px) {
    padding-right: 0;
  }
`;

export const RewardsItemTitle = styled.div`
  @media(max-width: 480px) {
    text-align: center;
  }
`;

export const RewardsItemValue = styled.div`
  font-size: 25px;
  font-weight: bold;
  @media(max-width: 480px) {
    text-align: center;
  }
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
  height: 110px;
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
`;

export const GivewayImg = styled.img`
  height: auto;
  max-width: 100%;
  margin: 50px 0 50px 0;
`;
