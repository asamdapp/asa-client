import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer, LanguageItem, Section } from 'components';
import useSWR from 'swr';

export const LanguagesContainer: FC = (): JSX.Element => {
  const { data: languages } = useSWR('languages');

  return (
    <MainLayout>
      <Section withGradient withSmallPadding>
        <CustomContainer>
          <Row>
            <Col>LanguagesContainer</Col>
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
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
