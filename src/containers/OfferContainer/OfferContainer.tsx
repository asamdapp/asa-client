import React, { FC } from "react";
import { Col, Row } from "react-grid-system";

import { MainLayout } from "layouts";
import { CustomContainer, Section } from "components";

export const OfferContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient>
        <CustomContainer>
          <Row>
            <Col>Offer</Col>
          </Row>
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
