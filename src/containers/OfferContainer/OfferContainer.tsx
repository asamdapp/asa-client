import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { Col, Row } from 'react-grid-system';
import useTranslation from 'next-translate/useTranslation';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { OfferProvider } from 'context';
import { PREFIX_TITLE } from 'utils';
import { NextSeo } from 'next-seo';

const FormStepper = dynamic(
  () => import('./components/FormStepper/FormStepper'),
  { ssr: false }
);

export const OfferContainer: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:form_page_title')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:form_page_title')}</title>
      </Head>

      <OfferProvider>
        <MainLayout>
          <Section withGradient withSmallPadding>
            <CustomContainer>
              <Row>
                <Col xl={8}>
                  <MainTitle>{t('common:form_page_title')}</MainTitle>
                  <p className="relative text-white/60 md:text-xl text-base font-light mt-5 !leading-loose">
                    {t('common:discount_info_text')}
                  </p>
                </Col>
              </Row>
            </CustomContainer>
          </Section>

          <Section withSmallPadding>
            <CustomContainer>
              <Row justify="center">
                <Col xl={9} xxl={8}>
                  <FormStepper />
                </Col>
              </Row>
            </CustomContainer>
          </Section>
        </MainLayout>
      </OfferProvider>
    </>
  );
};
