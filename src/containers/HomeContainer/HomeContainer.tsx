import React, { FC } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-grid-system";

import { Button } from "components/UI";
import { MainLayout } from "layouts";
import { Section, VideoPresentation } from "components";

import { LanguagesSection, ServicesSection } from "./components";
import heroImage from "assets/images/woman/hero.png";

export const HomeContainer: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Section withGradient className="!p-0">
        <Container>
          <Row>
            <Col>
              <div className="flex items-center min-h-[80vh]">
                <div className="py-20">
                  <h1 className="font-noto-serif text-6xl leading-tight">
                    Agenția <br />
                    Servicii Autorizate
                  </h1>

                  <p className="relative text-white/60 text-xl font-light mt-5 leading-loose">
                    Servicii profesionale de traducere în peste 28 limbi ale
                    lumii cu consultații absolut gratuite. Comanda acum si
                    obtine
                    <span className="relative inline-block">
                      <span className="mx-2.5 before:block before:absolute before:-inset-1.5 before:-skew-y-2 before:bg-jelly-bean relative">
                        <span className="relative text-white font-normal">
                          10% REDUCERE
                        </span>
                      </span>
                    </span>
                    pentru comenzile online, indiferent de suma tranzacției.
                  </p>

                  <div className="flex items-center gap-12 mt-10">
                    <Button>Solicita oferta</Button>
                    <VideoPresentation />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="relative h-full w-full">
                <Image
                  src={heroImage.src}
                  alt="hero image"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                  placeholder="blur"
                  blurDataURL={heroImage.blurDataURL}
                  className="drop-shadow-2xl bg-no-repeat"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <ServicesSection />

      <LanguagesSection />

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
