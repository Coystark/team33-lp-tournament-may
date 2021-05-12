import { Title as _Title } from '@/components/index';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media(max-width:  1445px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media(max-width:  1445px) {
    flex-direction: column;
  }
`;

export const Root = styled.div`
  //background-color: #3f0d62;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1080px;
  max-width: 1920px;

  background: url("images/layer3bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media(max-width: 768px) {
    background: #4d0c66;
  }

  @media(max-width: 768px) {
    #stagesArrow {
      display: none;
    }
  }
`;

export const HeaderTitle = styled(_Title)`
  @media(max-width:  1445px) {
    text-align: center;
  }
`;

export const Title = styled(_Title)`
  padding-bottom: 30px;
  @media(max-width:  1445px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 10px;
  margin-bottom: 30px;

  @media(max-width:  1445px) {
    text-align: center;
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

    #stage3 {
      order: -1;
    }
  }
`;

export const StageGridImg = styled.img`
  max-width: 100%;
  height: auto;
`;

/**
 * Grid placement
 */

export const PlacementRoot = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const PlacementTitle = styled(_Title)`

`;

export const PlacementContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const PlacementAllItems = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-around;
  width: 100%;
`;

export const PlacementItem = styled.div`
  display: flex;
  flex-direction: column;

`;

export const PlacementBadge = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;

  @media(max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PlacementBadgeIcon = styled.img`
  align-self: center;
  padding-right: 30px;

  @media(max-width: 480px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

export const PlacementBadgeDescription = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;

export const PlacementBadgePoints = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const PlacementBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
