import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { PREFIX_TITLE } from 'utils';

interface IProps {
  props: any;
}

export const JobsContainer: FC<IProps> = ({ props }): JSX.Element => {
  const { jobs } = props;
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:company_jobs')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:company_jobs')}</title>
      </Head>

      <MainLayout props={props}>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col>
                <MainTitle>{t('common:company_jobs')}</MainTitle>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <Row>
              <Col lg={7}>
                <div className="rich-text">
                  <PortableText value={jobs?.jobs} />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
