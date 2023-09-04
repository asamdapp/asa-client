import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-grid-system';
import Trans from 'next-translate/Trans';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  GroupedRepeatingComponents,
  MainTitle,
  OfferButton,
  Section,
  VideoPresentation,
} from 'components';

import heroImage from 'assets/images/woman/hero.png';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

export const HomeContainer: FC = (): JSX.Element => {
  const { lang } = useTranslation();

  return (
    <>
      <Head>
        <title>
          ASA -{' '}
          {lang === 'ru'
            ? 'Агентство Авторизированных Услуг'
            : 'Agenția Servicii Autorizate'}
        </title>
      </Head>

      <MainLayout>
        <Section withGradient className="!p-0">
          <CustomContainer>
            <Row>
              <Col lg={7} xl={6}>
                <div className="flex items-center h-full">
                  <div className="py-5 sm:py-12 md:py-20">
                    <MainTitle className="flex flex-col gap-2">
                      <span>
                        <Trans i18nKey={'common:agency'} />
                      </span>
                      <span className="word-break">
                        <Trans i18nKey={'common:authorized_services'} />
                      </span>
                    </MainTitle>

                    <p className="relative text-white/60 text-xl font-light mt-5 leading-loose">
                      <Trans
                        i18nKey="common:main_subtitle"
                        components={{
                          discount_first: (
                            <span className="relative inline-block" />
                          ),
                          discount_second: (
                            <span className="mx-2.5 before:block before:absolute before:-inset-1.5 before:-skew-y-2 before:bg-jelly-bean relative" />
                          ),
                          discount_third: (
                            <span className="relative text-white font-normal" />
                          ),
                        }}
                      />
                    </p>

                    <div className="flex items-center gap-6 mt-10 flex-col sm:flex-row sm:gap-12">
                      {/*<OfferButton className="!max-w-full w-full sm:!max-w-max sm:!w-auto" />*/}
                      <OfferButton />
                      <VideoPresentation />
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={5} xl={6}>
                <div className="relative w-full h-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]">
                  <Image
                    src={heroImage.src}
                    alt="hero image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                    placeholder="blur"
                    blurDataURL={heroImage.blurDataURL}
                    className="bg-no-repeat"
                  />
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
