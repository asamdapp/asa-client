import React, { FC } from "react";
import { IconArrowRight } from "@tabler/icons";
import { Col, Row } from "react-grid-system";
import { Link, useRouter } from "next-translate-routes";

import { CustomContainer, Section, SectionTitle } from "components";

export const ServicesSection: FC = (): JSX.Element => {
  const { locale } = useRouter();

  return (
    <Section>
      <CustomContainer>
        <SectionTitle>
          Oferim o gamă largă de servicii complete și profesionale
        </SectionTitle>

        <Row className="gap-y-5">
          {[...Array(8)].map((_, index) => (
            <Col key={index} lg={6} xl={4}>
              <Link
                href={{
                  pathname: "/services/[serviceSlug]",
                  query: { serviceSlug: "123" },
                }}
                passHref
                locale={locale}
              >
                <a
                  className="
                      flex gap-4 items-center pr-4 group cursor-pointer rounded-xl overflow-hidden transition
                      bg-white hover:scale-[1.02]
                      dark:bg-black/20 dark:text-white/70 hover:dark:bg-black/40 hover:dark:text-cardinal
                      font-medium
                      text-downriver hover:text-cardinal
                    "
                >
                  <img
                    src="https://www.wetranslate.ro/wp-content/uploads/2020/11/traduceri-autorizate-wetranslate.jpg"
                    alt=""
                    className="w-36 h-26 object-cover flex-none"
                  />
                  <span>Traduceri Autorizate</span>
                  <IconArrowRight className="flex-none ml-auto text-gray-200 dark:text-white/70 group-hover:text-cardinal transition" />
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </Section>
  );
};
