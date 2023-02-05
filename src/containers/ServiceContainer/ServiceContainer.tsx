import React, { FC } from "react";
import Image from "next/image";
import { Col, Row } from "react-grid-system";

import { MainLayout } from "layouts";
import { CustomContainer, MainTitle, OfferButton, Section } from "components";

export const ServiceContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient className="!py-20">
        <CustomContainer>
          <Row>
            <Col lg={12} xl={6}>
              <div className="flex flex-col justify-center h-full">
                <MainTitle>Traduceri Autorizate</MainTitle>
                <span className="text-white py-1 px-2 bg-jelly-bean max-w-max mt-5 rounded-md">
                  în peste 28 limbi ale lumii
                </span>

                <p className="relative text-white/60 text-xl font-light mt-5 leading-loose">
                  Traduceri autorizate - reprezintă traducerea efectuată de
                  către un traducător autorizat de Ministerul Justiției din
                  Republica Moldova cu experiență în traduceri de minim 3 ani.
                </p>

                <OfferButton className="mt-10" />
              </div>
            </Col>
            <Col lg={12} xl={6}>
              <div className="relative bg-red p-10 aspect-[16/9]">
                <Image
                  src={
                    "https://www.wetranslate.ro/wp-content/uploads/2020/11/traduceri-autorizate-wetranslate.jpg"
                  }
                  alt="hero image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="rounded-xl"
                />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
