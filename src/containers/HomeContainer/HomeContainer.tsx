import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Button } from "components/UI";
import { MainLayout } from "layouts";
import { Section } from "components";

export const HomeContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient>
        <Container>
          <Row>
            <Col>
              <h1>Agenția Servicii Autorizate</h1>
              <p>
                Oferim servicii profesionale de traducere în peste 22 limbi ale
                lumii cu consultații absolut gratuite. Oferim 10% REDUCERE
                pentru comenzile online, indiferent de suma tranzacției.
              </p>
              <Button>button</Button>
              <button>Video prezentare</button>
            </Col>
            <Col>
              <Button>button</Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col>
              <Button>button</Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section withGradient isGradientReverse={true}>
        <Container>
          <Row>
            <Col>
              <Button>button</Button>
            </Col>
          </Row>
        </Container>
      </Section>
    </MainLayout>
  );
};
