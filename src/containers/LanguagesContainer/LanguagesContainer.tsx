import React, { FC } from "react";
import { Col, Row } from "react-grid-system";

import { MainLayout } from "layouts";
import { CustomContainer, Section } from "components";

export const LanguagesContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient withSmallPadding>
        <CustomContainer>
          <Row>
            <Col>LanguagesContainer</Col>
          </Row>
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
