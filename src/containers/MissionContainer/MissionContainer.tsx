import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
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

interface IProps {
  props: any;
}

export const MissionContainer: FC<IProps> = ({ props }): JSX.Element => {
  const { mission } = props;
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:company_mission')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:company_mission')}</title>
      </Head>

      <MainLayout props={props}>
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
                  <PortableText value={mission?.mission} />
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

        <GroupedRepeatingComponents props={props} />
      </MainLayout>
    </>
  );
};
