import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 90px 20px 90px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Root = styled.div`
  max-width: 1920px;
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

/**
 * Social Media
 */
export const SocialMediasContainer = styled.div`
  @media(max-width: 768px) {
    margin: 40px 0 40px 0;
    text-align: center;
  }
`;

export const SocialMediasTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;

`;

export const SocialMediasIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SocialMediasIcon = styled.a`
  display: flex;
  height: 30px;
  width: 30px;
`;

/**
 * Sponsors
 */
export const SponsorsContainer = styled.div`
`;

export const SponsorsTitle = styled.div`
  font-size: 25px;
  padding-bottom: 20px;
  color: grey;
  text-align: center;
`;

export const Sponsors = styled.img`
  max-width: 100%;
  width: 500px;
  height: auto;
`;

/**
 * Logo
 */

export const LogoContainer = styled.div`
  @media(max-width: 768px) {
    order: -1;
  }
`;

export const Logo = styled.img`
`;
