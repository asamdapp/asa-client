import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { OfferProvider } from 'context';

import { FormStepper } from './components';

export const OfferContainer: FC = (): JSX.Element => {
  return (
    <OfferProvider>
      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col xl={8}>
                <MainTitle>Formular comandă</MainTitle>
                <p className="relative text-white/60 md:text-xl text-base font-light mt-5 !leading-loose">
                  Oferim 10% REDUCERE pentru comenzile online, indiferent de
                  suma tranzacției.
                </p>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section withSmallPadding>
          <CustomContainer>
            <Row justify="center">
              <Col xl={9} xxl={8}>
                <FormStepper />
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </OfferProvider>
  );
};
