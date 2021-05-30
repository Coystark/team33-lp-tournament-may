import React from 'react';
import Head from 'next/head';

import { Menu } from '@/components/index';

import {
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Layer5,
  Layer6,
} from '@/layers/index';

export default function Home() {
  // return <Teste />;

  return (
    <>
      <Head>
        <title>Team 33 Fortnite Tournament</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />

        {/* Essential META Tags */ }
        <meta property="og:title" content="Team 33 Fortnite Tournament" />
        <meta property="og:description" content="Drop into Fortnite and join this year's free-to-enter Team 33 Championship Series. Signup and compete for your chance to win." />
        <meta property="og:image" content="/images/tournament-logo.png" />
        <meta property="og:url" content="https://team33gaming.com/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Non-Essential, But Recommended */ }
        <meta property="og:site_name" content="Team 33 Fortnite Tournament" />
        <meta name="twitter:image:alt" content="Team 33 Fortnite Tournament" />

      </Head>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        background: 'rgb(55, 14, 80)',
      }}
      >
        <Menu />
        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
        <Layer5 />
        <Layer6 />
      </div>
    </>
  );
}
