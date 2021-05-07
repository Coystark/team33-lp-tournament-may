import React from 'react';
import {
  Container,
  Root,
  SocialMediasContainer,
  Sponsors,
  Logo,
  SocialMediasTitle,
  SocialMediasIconsContainer,
  SocialMediasIcon,
  SponsorsContainer,
  LogoContainer,
  SponsorsTitle,
} from './styles';

const Layer6: React.FC = () => (
  <Root>
    <Container>
      <SocialMediasContainer>
        <SocialMediasTitle>Connect with Team33</SocialMediasTitle>
        <SocialMediasIconsContainer>
          <SocialMediasIcon>face</SocialMediasIcon>
          <SocialMediasIcon>twitter</SocialMediasIcon>
          <SocialMediasIcon>discord</SocialMediasIcon>
        </SocialMediasIconsContainer>
      </SocialMediasContainer>
      <SponsorsContainer>
        <SponsorsTitle>Powered by</SponsorsTitle>
        <Sponsors src="/images/sponsors.png" />
      </SponsorsContainer>
      <LogoContainer>
        <Logo src="/images/team33-negative.png" />
      </LogoContainer>
    </Container>
  </Root>
);

export default Layer6;
