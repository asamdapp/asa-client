import React, { FC } from "react";
import { Col, Row } from "react-grid-system";
import { IconSquareArrowRight } from "@tabler/icons";

import {
  CustomContainer,
  LanguageItem,
  Section,
  SectionTitle,
} from "components";
import { Link, useRouter } from "next-translate-routes";

export const LanguagesSection: FC = (): JSX.Element => {
  const { locale } = useRouter();

  return (
    <Section withGradient isGradientReverse>
      <CustomContainer>
        <SectionTitle withGradient>Limbi de traducere</SectionTitle>
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
            // "https://flagicons.lipis.dev/flags/4x3/ck.svg",
            // "https://flagicons.lipis.dev/flags/4x3/km.svg",
            // "https://flagicons.lipis.dev/flags/4x3/ci.svg",
            // "https://flagicons.lipis.dev/flags/4x3/be.svg",
            // "https://flagicons.lipis.dev/flags/4x3/dm.svg",
            // "https://flagicons.lipis.dev/flags/4x3/do.svg",
            // "https://flagicons.lipis.dev/flags/4x3/ec.svg",
          ].map((item, index) => (
            <Col
              xs={4}
              sm={3}
              md={12 / 5}
              lg={2}
              xl={2}
              xxl={12 / 8}
              key={index}
            >
              <LanguageItem flag={item} />
            </Col>
          ))}

          <Col xs={12} lg={4} xl={2} xxl={12 / 8}>
            <Link href={{ pathname: "/languages" }} passHref locale={locale}>
              <a
                className="
                flex w-full flex-col items-center font-medium text-sm
                text-white/70 gap-2 rounded-lg my-3 bg-white/5
                pb-2
                hover:text-cardinal hover:bg-white
                transition
              "
              >
                <span className="flex items-end justify-center h-12 w-12">
                  <IconSquareArrowRight size={32} />
                </span>
                <span>Vezi toate limbile</span>
              </a>
            </Link>
          </Col>
        </Row>
      </CustomContainer>
    </Section>
  );
};
