import React, { FC } from 'react';
import { IconArrowDown } from '@tabler/icons';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

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
import useSWR from 'swr';

interface IProps {}

export const FaqContainer: FC<IProps> = (): JSX.Element => {
  const { data: faq } = useSWR('faq');
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
            <div className="row">
              <div className="col">
                <MainTitle>{t('common:faq')}</MainTitle>
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section className="!pb-0">
          <CustomContainer>
            <div className="row">
              <div className="col">
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  {faq?.map((item: any) => (
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
              </div>
            </div>
          </CustomContainer>
        </Section>

        <Section>
          <CustomContainer>
            <div className="row">
              <div className="col">
                <div className="w-full flex">
                  <OfferButton className="mx-auto" />
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
