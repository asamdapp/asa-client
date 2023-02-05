import React, { FC } from "react";
import { Col, Row } from "react-grid-system";
import {
  CustomContainer,
  LanguageItem,
  Section,
  SectionTitle,
} from "components";

export const LanguagesSection: FC = (): JSX.Element => {
  return (
    <Section>
      <CustomContainer>
        <SectionTitle>Limbi de traducere</SectionTitle>
        <Row>
          {[
            "https://flagicons.lipis.dev/flags/4x3/af.svg",
            "https://flagicons.lipis.dev/flags/4x3/ax.svg",
            "https://flagicons.lipis.dev/flags/4x3/al.svg",
            "https://flagicons.lipis.dev/flags/4x3/dz.svg",
            "https://flagicons.lipis.dev/flags/4x3/as.svg",
            "https://flagicons.lipis.dev/flags/4x3/ad.svg",
            "https://flagicons.lipis.dev/flags/4x3/am.svg",
            "https://flagicons.lipis.dev/flags/4x3/ar.svg",
            "https://flagicons.lipis.dev/flags/4x3/ag.svg",
            "https://flagicons.lipis.dev/flags/4x3/bb.svg",
            "https://flagicons.lipis.dev/flags/4x3/bo.svg",
            "https://flagicons.lipis.dev/flags/4x3/ba.svg",
            "https://flagicons.lipis.dev/flags/4x3/bw.svg",
            "https://flagicons.lipis.dev/flags/4x3/bg.svg",
            "https://flagicons.lipis.dev/flags/4x3/bn.svg",
            "https://flagicons.lipis.dev/flags/4x3/ck.svg",
            "https://flagicons.lipis.dev/flags/4x3/km.svg",
            "https://flagicons.lipis.dev/flags/4x3/ci.svg",
            "https://flagicons.lipis.dev/flags/4x3/be.svg",
            "https://flagicons.lipis.dev/flags/4x3/dm.svg",
            "https://flagicons.lipis.dev/flags/4x3/do.svg",
            "https://flagicons.lipis.dev/flags/4x3/ec.svg",
          ].map((item, index) => (
            <Col xs={6} sm={3} md={2} lg={2} xl={2} key={index}>
              <LanguageItem flag={item} />
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </Section>
  );
};
