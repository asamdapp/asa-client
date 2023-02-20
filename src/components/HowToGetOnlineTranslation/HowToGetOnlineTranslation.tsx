import React, { FC } from "react";
import { Col, Row } from "react-grid-system";
import { IconInfoCircle } from "@tabler/icons";

import {
  CustomContainer,
  OfferButton,
  Section,
  SectionTitle,
} from "components";
import Image from "next/image";

import image from "assets/images/sync_files.svg";

export const HowToGetOnlineTranslation: FC = (): JSX.Element => {
  return (
    <Section>
      <CustomContainer>
        <SectionTitle>Cum Obții Traducerea Online? Simplu!</SectionTitle>

        <Row className="gap-y-3 sm:gap-y-5">
          {[...Array(6)].map((_, index) => (
            <Col key={index} xl={2} sm={4}>
              <div
                className="
                  flex flex-row sm:flex-col items-center
                  bg-white p-2 sm:p-4 rounded-xl
                  dark:bg-black/20
                  relative
                "
              >
                <div className="relative w-16 h-16 sm:w-36 sm:h-36 flex-none">
                  <Image
                    src={image.src}
                    alt="hero image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="bg-no-repeat"
                  />
                </div>
                <strong className="text-base sm:text-sm text-downriver dark:text-white/70 text-left sm:text-center font-semibold">
                  Transmiteți documentele
                </strong>

                <div
                  className="
                    ml-auto text-downriver/10 text-4xl sm:text-2xl mr-2 font-noto-serif
                    dark:text-white/5
                    static sm:absolute sm:top-2 sm:right-2
                  "
                >
                  {++index}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          <Col xxl={12}>
            <div className="flex text-sm text-gray-600 mt-5">
              <IconInfoCircle className="flex-none mt-1 mr-2" size={24} />
              <p>
                Dumneavoastră transmiteți documentele, noi analizăm textul, vă
                contactăm și confirmăm comanda! După confirmarea comenzii
                achitați suma stabilită. Apoi traducem documentele solicitate și
                vă transmitem traducerea solicitată.
              </p>
            </div>
          </Col>
          <Col xxl={12}>
            <OfferButton className="flex mx-auto mt-8" />
          </Col>
        </Row>
      </CustomContainer>
    </Section>
  );
};
