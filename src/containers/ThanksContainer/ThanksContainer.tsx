import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer, Section } from 'components';
import { PREFIX_TITLE } from 'utils';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import callImage from '../../assets/images/woman/4.png';
import { Button } from 'UI';

export const ThanksContainer: FC = (): JSX.Element => {
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{PREFIX_TITLE + t('common:languages_of_translation')}</title>
      </Head>

      <MainLayout>
        <Section withSmallPadding>
          <CustomContainer>
            <Row>
              <Col md={6}>
                <div className="relative w-full h-full min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh]">
                  <Image
                    src={callImage.src}
                    alt="call image"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                    placeholder="blur"
                    blurDataURL={callImage.blurDataURL}
                    className="bg-no-repeat"
                  />
                </div>
              </Col>

              <Col>
                <div className="h-full flex flex-col justify-center md:items-start items-center md:mt-0 mt-5 md:text-left text-center md:px-0 sm:px-10">
                  <h1 className="font-noto-serif lg:text-4xl md:text-3xl text-2xl mb-10 leading-tight text-downriver dark:text-white">
                    Felicitări! Comanda ta a fost plasată cu succes!
                  </h1>

                  <p className="text-lg text-gray-500 mb-10">
                    În cel mai scurt timp vei fi contactat de unul din managerii
                    noștri pentru a confirma comanda.
                  </p>

                  <Button>Pagina principala</Button>
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
