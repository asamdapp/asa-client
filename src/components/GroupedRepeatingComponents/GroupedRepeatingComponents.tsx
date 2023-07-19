import React, { FC } from 'react';
import {
  CustomContainer,
  HowToGetOnlineTranslation,
  OfferButton,
  Section,
} from 'components';
import { Col, Row } from 'react-grid-system';
import Trans from 'next-translate/Trans';

interface IProps {}

export const GroupedRepeatingComponents: FC<IProps> = (): JSX.Element => {
  return (
    <>
      <Section withGradient isGradientReverse withSmallPadding>
        <CustomContainer>
          <Row>
            <Col>
              <div className="flex items-center flex-col sm:flex-row gap-8">
                <div className="p-5 bg-white/5 rounded-xl h-[80px] w-[80px] flex-none sm:w-[120px] sm:h-[120px]">
                  <svg viewBox="0 0 512 512" className="opacity-80 fill-white">
                    <path d="M512 34.88c.04-9.35-3.57-18.13-10.16-24.72S486.46-.03 477.13.01c-9.33.04-18.1 3.7-24.72 10.31-2.8 2.8-7.89 8.85-10.67 12.2a8.3 8.3 0 1 0 12.76 10.6c4.36-5.25 7.97-9.4 9.65-11.07 3.5-3.5 8.13-5.43 13.05-5.45h.07c4.87 0 9.42 1.88 12.84 5.3a18.02 18.02 0 0 1 5.3 12.91 18.47 18.47 0 0 1-5.46 13.05c-3.13 3.13-13.89 11.67-29.3 22.44a52.55 52.55 0 0 0-45.38-26.1H293.81a60.99 60.99 0 0 0-43.4 17.98L7.6 304.98A25.82 25.82 0 0 0 0 323.34c0 6.94 2.7 13.47 7.61 18.38l162.67 162.66a25.91 25.91 0 0 0 18.38 7.6c6.65 0 13.31-2.53 18.38-7.6L449.83 261.6a60.98 60.98 0 0 0 17.98-43.4V96.74c0-3.59-.37-7.09-1.06-10.47 17.56-12.08 30.44-22.18 34.93-26.68A34.94 34.94 0 0 0 512 34.88zM451.22 218.2a44.5 44.5 0 0 1-13.12 31.67l-242.8 242.8a9.41 9.41 0 0 1-13.29 0L19.34 330c-1.77-1.78-2.75-4.14-2.75-6.65s.98-4.87 2.75-6.65l242.8-242.79A44.5 44.5 0 0 1 293.8 60.8h121.46a35.98 35.98 0 0 1 31.62 18.86 672.56 672.56 0 0 1-32.4 20.17 34.88 34.88 0 0 0-50.39-1.18 34.88 34.88 0 0 0 0 49.27 34.73 34.73 0 0 0 24.63 10.2c8.92 0 17.84-3.4 24.63-10.2a34.85 34.85 0 0 0 9.04-33.51 696.52 696.52 0 0 0 28.81-17.75V218.2zm-69.9-91.2a8.3 8.3 0 0 0 11.14 3.69c4.86-2.45 9.7-5 14.5-7.6a18.19 18.19 0 0 1-5.33 13.1 18.27 18.27 0 0 1-25.8 0 18.27 18.27 0 0 1 0-25.81 18.2 18.2 0 0 1 23.44-1.98c-4.7 2.56-9.46 5.05-14.27 7.47a8.29 8.29 0 0 0-3.68 11.14z" />
                    <path d="M247.16 168.96a8.3 8.3 0 0 0-8.3 8.3v175.18a8.3 8.3 0 0 0 16.6 0V177.26a8.3 8.3 0 0 0-8.3-8.3zM209.23 240.21a34.87 34.87 0 0 0-49.27 0 34.88 34.88 0 0 0 0 49.27 34.72 34.72 0 0 0 24.64 10.19c8.92 0 17.84-3.4 24.63-10.19 6.58-6.58 10.2-15.33 10.2-24.63s-3.62-18.06-10.2-24.64zm-11.73 37.54a18.27 18.27 0 0 1-25.8 0 18.27 18.27 0 0 1 0-25.8c3.55-3.57 8.23-5.34 12.9-5.34a18.2 18.2 0 0 1 18.25 18.24c0 4.87-1.9 9.45-5.35 12.9zM334.36 240.21a34.87 34.87 0 0 0-49.27 0 34.88 34.88 0 0 0 0 49.27 34.73 34.73 0 0 0 24.64 10.19c8.92 0 17.84-3.4 24.63-10.19a34.88 34.88 0 0 0 0-49.27zm-11.73 37.54a18.27 18.27 0 0 1-25.8 0 18.27 18.27 0 0 1 0-25.8c3.55-3.57 8.22-5.34 12.9-5.34s9.34 1.77 12.9 5.33a18.27 18.27 0 0 1 0 25.81z" />
                  </svg>
                </div>

                <div>
                  <Trans
                    i18nKey={'common:discount_info'}
                    components={{
                      h2: (
                        <h2 className="font-noto-serif md:text-4xl text-3xl leading-tight mb-2  text-center sm:text-left" />
                      ),
                      p: (
                        <p className="relative text-white/60 text-xl font-light  text-center sm:text-left" />
                      ),
                    }}
                  />
                </div>
              </div>
            </Col>

            <Col lg="content" className="flex lg:justify-end justify-center">
              <OfferButton className="self-center mt-8 lg:mt-0" />
            </Col>
          </Row>
        </CustomContainer>
      </Section>
      <HowToGetOnlineTranslation />
    </>
  );
};