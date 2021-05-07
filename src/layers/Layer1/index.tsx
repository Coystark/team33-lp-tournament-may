import React from 'react';

import {
  Root, InsideVideo, FortniteLogo, TournamentLogo,
} from './styles';

const Layer1: React.FC = () => (
  <>
    <Root
      playsInline
      autoPlay
      muted
      loop
      src="images/animation.mp4"
    />

    <InsideVideo>
      <TournamentLogo
        src="/images/tournament-logo.png"
      />
      <FortniteLogo src="/images/fortnite.png" />
    </InsideVideo>
  </>
);

export default Layer1;
