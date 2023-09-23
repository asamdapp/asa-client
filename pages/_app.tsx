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
import { LANGUAGES_COUNT } from '../src/utils';
import { SWRConfig } from 'swr';

setConfiguration({
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
  gutterWidth: 20,
  breakpoints: [576, 768, 992, 1200, 1400],
  containerWidths: [540, 720, 960, 1140, 1320],
});

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  console.log(pageProps.fallback);
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale,
          url: `https://www.asa.md/${locale}`,
          siteName: 'ASA.md',
          description:
            locale === 'ru'
              ? `Услуги профессионального перевода более чем на ${LANGUAGES_COUNT} языков мира с абсолютно бесплатными консультациями. Закажите сейчас и получите СКИДКУ 10% на онлайн-заказы, независимо от суммы транзакции.`
              : `Servicii profesionale de traducere în peste ${LANGUAGES_COUNT} limbi ale lumii cu consultații absolut gratuite. Comanda acum si obtine 10% REDUCERE pentru comenzile online, indiferent de suma tranzacției.`,
          images: [
            {
              url: `https://www.asa.md/open-graph-${locale}.jpg`,
              width: 1200,
              height: 630,
              type: 'image/jpg',
            },
            {
              url: `https://www.asa.md/open-graph-${locale}-square.jpg`,
              width: 1200,
              height: 1200,
              type: 'image/jpg',
            },
          ],
        }}
      />

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta
          name="keywords"
          content={
            locale === 'ru'
              ? 'ASA, Агенство Авторизированных услуг, Бюро авторизированных переводов, Легализированные Переводы, Апостиль, Устный перевод, Онлайн переводы, Доставка, Переводы тестов Covid 19, ASA.md'
              : 'ASA, Agenția Servicii Autorizate, Birou Traduceri Autorizate, Traduceri Legalizate, Apostila, Interpretariat, Traduceri online, Livrare, Traduceri Test COVID-19, ASA.md'
          }
        />
      </Head>

      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <NextProgress color="#B91F2E" />
        <AppProvider>
          <SWRConfig value={{ fallback: pageProps.fallback }}>
            <Component {...pageProps} />
          </SWRConfig>
        </AppProvider>
      </ThemeProvider>

      <Analytics />
    </>
  );
};

export default withTranslateRoutes(App);
