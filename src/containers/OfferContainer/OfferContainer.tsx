import Head from 'next/head';
import { NextSeo } from 'next-seo';
import React, { FC } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { OfferProvider } from 'context';
import { PREFIX_TITLE } from 'utils';
import { FormStepper } from './components';

interface IProps {}
export const OfferContainer: FC<IProps> = (): JSX.Element => {
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
              <div className="row">
                <div className="col-xl-8">
                  <MainTitle>{t('common:form_page_title')}</MainTitle>
                  <p className="relative text-white/60 md:text-xl text-base font-light mt-5 !leading-loose">
                    {t('common:discount_info_text')}
                  </p>
                </div>
              </div>
            </CustomContainer>
          </Section>

          <Section withSmallPadding>
            <CustomContainer>
              <div className="row justify-center">
                <div className="col-xl-9 col-xxl-8">
                  <FormStepper />
                </div>
              </div>
            </CustomContainer>
          </Section>
        </MainLayout>
      </OfferProvider>
    </>
  );
};
