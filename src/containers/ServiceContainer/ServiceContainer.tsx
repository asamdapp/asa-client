import React, { FC } from "react";
import Image from "next/image";
import { Col, Row } from "react-grid-system";

import { MainLayout } from "layouts";
import { CustomContainer, MainTitle, OfferButton, Section } from "components";

export const ServiceContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient withSmallPadding>
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

      <Section>
        <CustomContainer>
          <Row>
            <Col xxl={8}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                deleniti eum impedit incidunt ipsa itaque molestiae molestias
                natus placeat, quas quos repellendus sint tenetur unde ut veniam
                voluptates. In, quidem.
              </p>

              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                <li>Doloremque esse molestias nam non unde voluptatem!</li>
                <li>
                  Cupiditate earum possimus quo reprehenderit repudiandae sed.
                </li>
                <li>Accusantium deserunt est nostrum odit, pariatur rerum.</li>
                <li>
                  Adipisci aliquid aperiam maiores tenetur veritatis
                  voluptatibus!
                </li>
                <li>Aperiam consequuntur iste neque? Deserunt, minus modi.</li>
                <li>Aliquam eligendi ex illum maiores recusandae saepe.</li>
                <li>Animi ipsam, iste nam odio totam voluptas.</li>
                <li>
                  Aliquid architecto autem distinctio ducimus inventore iusto?
                </li>
                <li>Commodi earum hic minus odio? Consectetur, porro.</li>
              </ul>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </MainLayout>
  );
};
