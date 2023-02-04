import React, { FC } from "react";
import { LanguageItem, Section, SectionTitle } from "components";
import { Col, Container, Row } from "react-grid-system";

export const LanguagesSection: FC = (): JSX.Element => {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <SectionTitle>Limbi de traducere</SectionTitle>

            <div className="grid grid-cols-8 gap-4">
              {[...Array(22)].map((_, index) => (
                <LanguageItem key={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
