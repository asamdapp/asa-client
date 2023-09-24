import React, { FC } from 'react';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { PREFIX_TITLE } from 'utils';
import useSWR from 'swr';

interface IProps {}

export const JobsContainer: FC<IProps> = (): JSX.Element => {
  const { data: jobs } = useSWR('jobs');
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:company_jobs')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:company_jobs')}</title>
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <div className="row">
              <div className="col">
                <MainTitle>{t('common:company_jobs')}</MainTitle>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <div className="row">
              <div className="col-lg-7">
                <div className="rich-text">
                  <PortableText value={jobs?.jobs} />
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
