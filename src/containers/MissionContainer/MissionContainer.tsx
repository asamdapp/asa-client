import React, { FC } from 'react';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  GroupedRepeatingComponents,
  MainTitle,
  OfferButton,
  Section,
} from 'components';
import { PREFIX_TITLE } from 'utils';
import useSWR from 'swr';

interface IProps {}

export const MissionContainer: FC<IProps> = (): JSX.Element => {
  const { data: mission } = useSWR('mission');
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:company_mission')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:company_mission')}</title>
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <div className="row">
              <div className="col">
                <MainTitle>{t('common:company_mission')}</MainTitle>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <div className="row">
              <div className="col-lg-7">
                <div className="rich-text">
                  <PortableText value={mission?.mission} />
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section withGradient className="!py-5">
          <CustomContainer>
            <div className="row">
              <div className="col">
                <div className="w-full flex">
                  <OfferButton className="mx-auto" />
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <GroupedRepeatingComponents />
      </MainLayout>
    </>
  );
};
