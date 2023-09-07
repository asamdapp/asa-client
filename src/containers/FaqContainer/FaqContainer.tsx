import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { IconArrowDown } from '@tabler/icons';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import useSWR from 'swr';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, OfferButton, Section } from 'components';
import { PREFIX_TITLE } from 'utils';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { NextSeo } from 'next-seo';

export const FaqContainer: FC = (): JSX.Element => {
  const { data } = useSWR('faq');
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={PREFIX_TITLE + t('common:faq')} />

      <Head>
        <title>{PREFIX_TITLE + t('common:faq')}</title>
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col>
                <MainTitle>{t('common:faq')}</MainTitle>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section className="!pb-0">
          <CustomContainer>
            <Row>
              <Col>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  {data?.map((item: any) => (
                    <AccordionItem
                      key={item?._id}
                      className="mt-5 bg-white rounded-xl"
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="flex p-4 gap-5 justify-between items-center font-medium text-downriver transition hover:text-cardinal">
                          <div>{item?.title}</div>
                          <IconArrowDown className="flex-none" />
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel className="p-4 border-t border-gray-100">
                        <div className="rich-text">
                          <PortableText value={item?.description} />
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <Row>
              <Col>
                <div className="w-full flex">
                  <OfferButton className="mx-auto" />
                </div>
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
