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
import { ThemeProvider } from 'styled-components';

const theme = {
  maxWidth: '500px',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Team33</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Menu />
      <ThemeProvider theme={theme}>
        <Layer1 />
        <Layer2 />
        <Layer3 />
        <Layer4 />
        <Layer5 />
        <Layer6 />
      </ThemeProvider>
    </>
  );
}

/*
        <Layer1 />
      <Layer2 />
*/
