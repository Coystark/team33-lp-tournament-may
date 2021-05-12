import styled from 'styled-components';

export const Root = styled.video`
  object-fit: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  max-width: 1920px;
`;

export const InsideVideo = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 80px;
`;

export const FortniteLogo = styled.img`
  margin-top: 40px;
  width: 184px;
  height: auto;

  @media(max-width: 480px) {
    width: 150px;
  }
`;

export const TournamentLogo = styled.img`
  max-width: 100%;
  height: auto;
  padding: 0 20px 0 20px;

  @media(max-width: 480px) {
    padding: 0 20px 0 20px;
  }
`;

export const ContainerVideo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
`;
