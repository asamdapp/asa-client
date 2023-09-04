import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  LanguageItem,
  MainTitle,
  OfferButton,
  Section,
} from 'components';
import useSWR from 'swr';
import { PREFIX_TITLE } from 'utils';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export const LanguagesContainer: FC = (): JSX.Element => {
  const { data: languages } = useSWR('languages');
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{PREFIX_TITLE + t('common:languages_of_translation')}</title>
      </Head>

      <MainLayout>
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
