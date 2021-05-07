/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
