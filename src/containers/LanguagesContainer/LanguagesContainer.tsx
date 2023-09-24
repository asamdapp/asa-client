import React, { FC } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  LanguageItem,
  MainTitle,
  OfferButton,
  Section,
} from 'components';
import { PREFIX_TITLE } from 'utils';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';

interface IProps {}

export const LanguagesContainer: FC<IProps> = (): JSX.Element => {
  const { data: languages } = useSWR('languages');
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:languages_of_translation')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:languages_of_translation')}</title>
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <div className="row">
              <div className="col">
                <MainTitle>{t('common:languages_of_translation')}</MainTitle>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <div className="row">
              {languages?.map((item: any) => (
                <div className="col-4 col-sm-3 col-md-2" key={item._id}>
                  <LanguageItem item={item} colorClassName="text-gray-600" />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col">
                <div className="flex justify-center mt-10">
                  <OfferButton />
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
