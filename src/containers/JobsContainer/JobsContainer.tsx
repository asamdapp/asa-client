import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import useSWR from 'swr';
import { PREFIX_TITLE } from 'utils';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export const JobsContainer: FC = (): JSX.Element => {
  const { data } = useSWR('jobs');
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{PREFIX_TITLE + t('common:company_jobs')}</title>
      </Head>

      <MainLayout>
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
                  <PortableText value={data?.jobs} />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
