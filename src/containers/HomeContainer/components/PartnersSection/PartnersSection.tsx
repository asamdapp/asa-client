import React, { FC } from 'react';
import useSWR from 'swr';

import Trans from 'next-translate/Trans';
import { Col, Row } from 'react-grid-system';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';

interface IProps {}

const PartnersSection: FC<IProps> = (): JSX.Element => {
  const { data: partners } = useSWR('partners');

  return (
    <>
      <Section>
        <CustomContainer>
          <SectionTitle>
            <Trans i18nKey={'common:section_title.partners'} />
          </SectionTitle>

          <Row className="!justify-center gap-y-5">
            {partners?.map((item: any) => (
              <Col key={item?._id} width="auto">
                <div className="rounded-xl flex justify-center items-center h-full w-full px-2 py-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlFor(item?.logo).url()}
                    alt={item?.name}
                    title={item?.name}
                    className="md:max-h-[40px] lg:max-w-[180px] max-h-[24px] max-w-[120px] w-full"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </CustomContainer>
      </Section>
    </>
  );
};

export default PartnersSection;
