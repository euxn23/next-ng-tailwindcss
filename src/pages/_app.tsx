import { default as NextApp } from 'next/app';
import React from 'react';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
