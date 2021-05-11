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

      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: 81,
        }}
      >

        <div style={{
          background: "url('/images/complement-layer1.png')",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '130px',
        }}
        />

      </div>
    </InsideVideo>

  </>
);

export default Layer1;
