import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-grid-system';

import { PortableText } from '@portabletext/react';
import Trans from 'next-translate/Trans';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  GroupedRepeatingComponents,
  MainTitle,
  OfferButton,
  Section,
  SectionTitle,
} from 'components';
import { LANGUAGES_COUNT, PREFIX_TITLE, urlFor } from 'utils';

interface IProps {
  props: any;
}

export const ServiceContainer: FC<IProps> = ({ props }): JSX.Element => {
  const { service } = props;

  return (
    <>
      <NextSeo title={PREFIX_TITLE + service?.name} />

      <Head>
        <title>{PREFIX_TITLE + service?.name}</title>
      </Head>

      <MainLayout props={props}>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col lg={12} xl={6}>
                <div className="flex flex-col justify-center h-full">
                  <MainTitle>{service?.name}</MainTitle>

                  {service?.isServiceForLanguage && (
                    <span className="text-white py-1 px-2 bg-jelly-bean max-w-max mt-5 rounded-md">
                      <Trans
                        i18nKey={'common:in_over_N_languages_of_the_world'}
                        values={{ n: LANGUAGES_COUNT }}
                      />
                    </span>
                  )}

                  <p className="relative text-white/60 md:text-xl text-base font-light mt-5 !leading-loose">
                    {service?.description}
                  </p>

                  <OfferButton className="mt-10 xl:block hidden" />
                </div>
              </Col>
              <Col lg={12} xl={6}>
                <div className="relative bg-red p-10 aspect-[16/9] mt-10 xl:mt-0">
                  <Image
                    src={urlFor(service?.image).url()}
                    alt={service?.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="rounded-xl"
                  />
                </div>
                <div className="w-full flex">
                  <OfferButton className="xl:hidden block mt-10 mx-auto" />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <SectionTitle>
              <Trans i18nKey={'common:section_title.description'} />
            </SectionTitle>

            <Row>
              <Col xxl={8}>
                <div className="rich-text">
                  <PortableText value={service?.body} />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <GroupedRepeatingComponents props={props} hidden={['services']} />
      </MainLayout>
    </>
  );
};
