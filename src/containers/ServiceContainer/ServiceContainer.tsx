import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import {
  CustomContainer,
  GroupedRepeatingComponents,
  MainTitle,
  OfferButton,
  Section,
  SectionTitle,
} from 'components';
import useSWR from 'swr';
import { urlFor } from 'utils';
import { PortableText } from '@portabletext/react';

export const ServiceContainer: FC = (): JSX.Element => {
  const { data } = useSWR('service');

  console.log('data service => ', data);

  return (
    <MainLayout>
      <Section withGradient withSmallPadding>
        <CustomContainer>
          <Row>
            <Col lg={12} xl={6}>
              <div className="flex flex-col justify-center h-full">
                <MainTitle>{data?.name}</MainTitle>
                <span className="text-white py-1 px-2 bg-jelly-bean max-w-max mt-5 rounded-md">
                  în peste 28 limbi ale lumii
                </span>

                <p className="relative text-white/60 text-xl font-light mt-5 leading-loose">
                  {data?.description}
                </p>

                <OfferButton className="mt-10" />
              </div>
            </Col>
            <Col lg={12} xl={6}>
              <div className="relative bg-red p-10 aspect-[16/9]">
                <Image
                  src={urlFor(data?.image).url()}
                  alt={data?.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-xl"
                />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>

      <Section>
        <CustomContainer>
          <SectionTitle>Descriere</SectionTitle>

          <Row>
            <Col xxl={8}>
              <div className="rich-text">
                <PortableText value={data?.body} />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>

      <GroupedRepeatingComponents />
    </MainLayout>
  );
};
