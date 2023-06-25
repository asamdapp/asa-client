import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-grid-system';

import { Button } from 'components/UI';
import { MainLayout } from 'layouts';
import {
  CustomContainer,
  HowToGetOnlineTranslation,
  MainTitle,
  OfferButton,
  Section,
  VideoPresentation,
} from 'components';

import { LanguagesSection, ServicesSection } from './components';
import heroImage from 'assets/images/woman/hero.png';
import Trans from 'next-translate/Trans';

export const HomeContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient className="!p-0">
        <CustomContainer>
          <Row>
            <Col lg={7} xl={6}>
              <div className="flex items-center">
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
                    Servicii profesionale de traducere în peste 28 limbi ale
                    lumii cu consultații absolut gratuite. Comanda acum si
                    obtine
                    <span className="relative inline-block">
                      <span className="mx-2.5 before:block before:absolute before:-inset-1.5 before:-skew-y-2 before:bg-jelly-bean relative">
                        <span className="relative text-white font-normal">
                          10% REDUCERE
                        </span>
                      </span>
                    </span>
                    pentru comenzile online, indiferent de suma tranzacției.
                  </p>

                  <div className="flex items-center gap-6 mt-10 flex-col sm:flex-row sm:gap-12">
                    <OfferButton className="!max-w-full w-full sm:!max-w-max sm:!w-auto" />
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
                  className="drop-shadow-2xl bg-no-repeat"
                />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>

      <ServicesSection />

      <LanguagesSection />

      <HowToGetOnlineTranslation />

      <Section withGradient isGradientReverse={true}>
        <CustomContainer>
          <Row>
            <Col>
              <Button>button</Button>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
