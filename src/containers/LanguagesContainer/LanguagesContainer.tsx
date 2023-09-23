import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
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

interface IProps {
  props: any;
}

export const LanguagesContainer: FC<IProps> = ({ props }): JSX.Element => {
  const { languages } = props;
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:languages_of_translation')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:languages_of_translation')}</title>
      </Head>

      <MainLayout props={props}>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col>
                <MainTitle>{t('common:languages_of_translation')}</MainTitle>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <Row>
              {languages?.map((item: any) => (
                <Col
                  xs={4}
                  sm={3}
                  md={12 / 5}
                  lg={2}
                  xl={2}
                  xxl={12 / 8}
                  key={item._id}
                >
                  <LanguageItem item={item} colorClassName="text-gray-600" />
                </Col>
              ))}
            </Row>
            <Row>
              <Col>
                <div className="flex justify-center mt-10">
                  <OfferButton />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
