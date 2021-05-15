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
  <Root id="discord">
    <Container>
      <SocialMediasContainer>
        <SocialMediasTitle>Connect with Team33</SocialMediasTitle>
        <SocialMediasIconsContainer>
          <SocialMediasIcon href="https://facebook.com/team33gaming" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialMediasIcon>
          <SocialMediasIcon href="https://twitter.com/OfficialTeam33" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMediasIcon>
          <SocialMediasIcon href="https://instagram.com/OfficialTeam33" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediasIcon>
          <SocialMediasIcon href="https://discord.gg/nFQZZXR6BC" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </SocialMediasIcon>
          <SocialMediasIcon href="https://www.youtube.com/channel/UCNGE38pgiQy6Gigd1vYBjVg" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </SocialMediasIcon>
        </SocialMediasIconsContainer>
      </SocialMediasContainer>
      <SponsorsContainer>
        <SponsorsTitle>Powered By</SponsorsTitle>
        <Sponsors src="/images/sponsors.png" alt="Sponsors" />
      </SponsorsContainer>
      <LogoContainer>
        <Logo src="/images/team33-negative.png" alt="Team 33 negative logo" />
      </LogoContainer>
    </Container>
  </Root>
);

export default Layer6;
