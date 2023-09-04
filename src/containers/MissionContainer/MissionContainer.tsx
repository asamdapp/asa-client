import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  GroupedRepeatingComponents,
  MainTitle,
  OfferButton,
  Section,
} from 'components';
import useSWR from 'swr';
import { PREFIX_TITLE } from 'utils';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export const MissionContainer: FC = (): JSX.Element => {
  const { data } = useSWR('mission');
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{PREFIX_TITLE + t('common:company_mission')}</title>
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col>
                <MainTitle>{t('common:company_mission')}</MainTitle>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <Row>
              <Col lg={7}>
                <div className="rich-text">
                  <PortableText value={data?.mission} />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section withGradient className="!py-5">
          <CustomContainer>
            <Row>
              <Col>
                <div className="w-full flex">
                  <OfferButton className="mx-auto" />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <GroupedRepeatingComponents />
      </MainLayout>
    </>
  );
};
