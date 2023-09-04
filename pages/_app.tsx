import React from 'react';
import Head from 'next/head';
import { withTranslateRoutes } from 'next-translate-routes';
import type { AppProps } from 'next/app';

import NextProgress from 'next-progress';
import { setConfiguration } from 'react-grid-system';
import { ThemeProvider } from 'next-themes';

// Local imports
import { AppProvider } from 'context';

// Fonts
// import "assets/fonts/OpenSans/stylesheet.css";
// import "assets/fonts/NotoSerif/stylesheet.css";
// Styles
import 'styles/globals.scss';

setConfiguration({
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
  gutterWidth: 20,
  breakpoints: [576, 768, 992, 1200, 1400],
  containerWidths: [540, 720, 960, 1140, 1320],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <NextProgress color="#B91F2E" />
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  );
};

export default withTranslateRoutes(App);
