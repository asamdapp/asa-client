import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { IconInfoCircle } from '@tabler/icons';

import {
  CustomContainer,
  OfferButton,
  Section,
  SectionTitle,
} from 'components';
import Image from 'next/image';

import useSWR from 'swr';
import { urlFor } from 'utils';
import Trans from 'next-translate/Trans';

export const HowToGetOnlineTranslation: FC = (): JSX.Element => {
  const { data: howGetTranslation } = useSWR('how-get-translation');

  return (
    <Section>
      <CustomContainer>
        <SectionTitle>
          <Trans i18nKey={'common:section_title.how_to_get_translation'} />
        </SectionTitle>

        <Row className="gap-y-3 sm:gap-y-5">
          {howGetTranslation.map((item: any, index: number) => (
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
                    src={urlFor(item?.image).url()}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="bg-no-repeat"
                    alt={item?.name}
                  />
                </div>
                <strong className="word-break text-base sm:text-sm text-downriver dark:text-white/70 text-left sm:text-center font-semibold">
                  {item?.name}
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
