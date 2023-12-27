import React from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import NextProgress from 'next-progress';
import { ThemeProvider } from 'next-themes';
import TagManager from 'react-gtm-module';

// Local imports
import { AppProvider } from 'context';

// Styles
import 'styles/bootstrap-grid.min.css';
import 'styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { LANGUAGES_COUNT } from '../src/utils';
import { useRouter } from 'next/router';

const gtmId = 'GTM-WWGJ4X6';

const App = ({ Component, pageProps }: AppProps) => {
  const { locale, asPath } = useRouter();

  React.useEffect(() => {
    TagManager.initialize({
      gtmId,
    });
  }, []);

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
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>

      <Analytics />
    </>
  );
};

export default App;
