import React from 'react';

import {
  Root, InsideVideo, FortniteLogo, TournamentLogo, ContainerVideo,
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
      <ContainerVideo>
        <TournamentLogo
          src="/images/tournament-logo.png"
        />
        <FortniteLogo src="/images/fortnite.png" />
      </ContainerVideo>

      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      >
        <div style={{
          background: "url('/images/complement-layer1.png')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '130px',
          maxWidth: '1920px;',
        }}
        />
      </div>
    </InsideVideo>

  </>
);

export default Layer1;
