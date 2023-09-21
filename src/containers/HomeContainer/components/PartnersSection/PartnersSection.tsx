import React, { FC } from 'react';
import useSWR from 'swr';

import Trans from 'next-translate/Trans';
import { Col, Row } from 'react-grid-system';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';
import Image from 'next/image';

interface IProps {}

export const PartnersSection: FC<IProps> = (): JSX.Element => {
  const { data: partners } = useSWR('partners');

  return (
    <>
      <Section>
        <CustomContainer>
          <SectionTitle>
            <Trans i18nKey={'common:section_title.partners'} />
          </SectionTitle>

          <Row className="!justify-center gap-y-5">
            <Col>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {partners?.map((item: any) => (
                  <div
                    key={item?._id}
                    className="relative h-[50px] w-[120px] flex-none"
                  >
                    <Image
                      src={urlFor(item?.logo).url()}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      className="bg-no-repeat"
                      alt={item?.name}
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </>
  );
};
