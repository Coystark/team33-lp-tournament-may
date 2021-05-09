import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord, faFacebookF, faInstagram, faYoutube, faTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
          <SocialMediasIcon href="/#">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialMediasIcon>
          <SocialMediasIcon href="/#">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMediasIcon>
          <SocialMediasIcon href="/#">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediasIcon>
          <SocialMediasIcon href="/#">
            <FontAwesomeIcon icon={faDiscord} />
          </SocialMediasIcon>
          <SocialMediasIcon href="/#">
            <FontAwesomeIcon icon={faYoutube} />
          </SocialMediasIcon>
        </SocialMediasIconsContainer>
      </SocialMediasContainer>
      <SponsorsContainer>
        <SponsorsTitle>Powered By</SponsorsTitle>
        <Sponsors src="/images/sponsors.png" />
      </SponsorsContainer>
      <LogoContainer>
        <Logo src="/images/team33-negative.png" />
      </LogoContainer>
    </Container>
  </Root>
);

export default Layer6;
