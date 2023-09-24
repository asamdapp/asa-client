import React, { FC } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import { CustomContainer, Section } from 'components';
import { PREFIX_TITLE } from 'utils';

import callImage from 'assets/images/woman/4.png';

interface IProps {}

export const ThanksContainer: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo nofollow noindex />

      <Head>
        <title>{PREFIX_TITLE + t('common:thanks_title')}</title>
      </Head>

      <MainLayout>
        <Section withSmallPadding>
          <CustomContainer>
            <div className="row">
              <div className="col-md-6">
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
              </div>

              <div className="col">
                <div className="h-full flex flex-col justify-center md:items-start items-center md:mt-0 mt-5 md:text-left text-center md:px-0 sm:px-10">
                  <h1 className="font-noto-serif lg:text-4xl md:text-3xl text-2xl mb-10 leading-tight text-downriver dark:text-white">
                    {t('common:thanks_title')}
                  </h1>

                  <p className="text-lg text-gray-500 mb-10">
                    {t('common:thanks_subtitle')}
                  </p>

                  <Link href={{ pathname: '/' }}>
                    <a
                      className="
                        bg-cardinal
                        text-white
                        font-semibold
                        text-center
                        max-w-max
                        uppercase
                        rounded-full transition-all
                        py-4 px-8
                        shadow-2xl hover:bg-jelly-bean
                      "
                    >
                      {t('common:home_page')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
