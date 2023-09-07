import React from 'react';
import Head from 'next/head';
import { useRouter, withTranslateRoutes } from 'next-translate-routes';
import { Analytics } from '@vercel/analytics/react';
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
import { DefaultSeo } from 'next-seo';

setConfiguration({
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
  gutterWidth: 20,
  breakpoints: [576, 768, 992, 1200, 1400],
  containerWidths: [540, 720, 960, 1140, 1320],
});

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale,
          url: `https://www.asa.md/${locale}`,
          siteName: 'ASA.md',
          images: [
            {
              url: `https://www.asa.md/open-graph-${locale}.jpg`,
            },
          ],
        }}
      />

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

      <Analytics />
    </>
  );
};

export default withTranslateRoutes(App);
