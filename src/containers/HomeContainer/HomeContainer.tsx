import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Button } from "components/UI";
import { MainLayout } from "layouts";

export const HomeContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <div className="">
              <Button>button</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
