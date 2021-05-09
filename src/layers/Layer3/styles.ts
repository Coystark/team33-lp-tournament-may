import { Title as _Title } from '@/components/index';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width:  1445px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Root = styled.div`
  background-color: #3f0d62;
  display: flex;
  justify-content: center;
  width: 100%;

  @media(max-width: 768px) {
    #stagesArrow {
      display: none;
    }
  }
`;

export const StagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;

  @media(max-width: 768px) {
    width: auto;
  }
`;

export const StagesGridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StagesGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StageGridImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Rank = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const RankBadge = styled.div`
  width: 89px;
  margin-right: 30px;
  justify-content: center;
  display: flex;
`;

export const RankPlace = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;

export const RankPoints = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const PlacementContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width:  1445px) {
    text-align: center;
  }
`;

export const GridPlacementContainer = styled.div`
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: space-around;

  }
`;

export const GridPlacementItem = styled.div`
  @media(max-width: 768px) {
    margin: 0!important;
  }
`;

export const Title = styled(_Title)`
  padding-bottom: 30px;
  @media(max-width: 480px) {
    text-align: center;
  }
`;
