import React, { FC } from "react";
import { IconArrowRight } from "@tabler/icons";
import { Section, SectionTitle } from "components";
import { Col, Container, Row } from "react-grid-system";
import Link from "next/link";

export const ServicesSection: FC = (): JSX.Element => {
  return (
    <Section>
      <Container lg className="padding-container">
        <SectionTitle>
          Oferim o gamă largă de servicii complete și profesionale
        </SectionTitle>

        <Row className="gap-y-5">
          {[...Array(7)].map((_, index) => (
            <Col key={index} lg={6} xl={4}>
              <Link href={{ pathname: "services" }}>
                <span
                  className="
                      flex gap-4 items-center pr-4 group cursor-pointer rounded-xl overflow-hidden transition
                      bg-white/50 hover:bg-white
                      dark:bg-black/20 hover:dark:bg-black/40
                      font-medium
                      text-downriver hover:text-cardinal
                    "
                >
                  <img
                    src="https://www.wetranslate.ro/wp-content/uploads/2020/11/traduceri-autorizate-wetranslate.jpg"
                    alt=""
                    className="w-36 h-26 object-cover shadow-2xl flex-none"
                  />
                  <span>Traduceri Autorizate</span>
                  <IconArrowRight className="flex-none ml-auto text-gray-200 group-hover:text-cardinal transition" />
                </span>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};
