import React, { FC } from "react";
import { Button } from "UI";
import { Col, Container, Row } from "react-grid-system";

export const Navigation: FC = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="">
            <Button>button</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
