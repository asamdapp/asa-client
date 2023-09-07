import React, { FC, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { Col, Row } from 'react-grid-system';
import { NextSeo } from 'next-seo';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { CONTACTS, PREFIX_TITLE } from 'utils';
import { Button } from 'UI';
import { IconCheck } from '@tabler/icons';

import whatsappIcon from 'assets/images/icons/whatsapp.svg';
import viberIcon from 'assets/images/icons/viber.svg';
import telegramIcon from 'assets/images/icons/telegram.svg';
import mapMarkerImage from 'assets/images/icons/map-marker.svg';
import timeImage from 'assets/images/icons/time.svg';
import phoneImage from 'assets/images/icons/phone.svg';
import emailImage from 'assets/images/icons/email.svg';

const Map = dynamic(() => import('./Map'), { ssr: false });

export const ContactContainer: FC = (): JSX.Element => {
  const { t, lang } = useTranslation();

  const [activeCity, setActiveCity] = useState<'chisinau' | 'ialoveni'>(
    'chisinau'
  );

  return (
    <>
      <NextSeo
        title={PREFIX_TITLE + t('common:contacts')}
        description={
          t('common:contacts_subtitle1') + ' ' + t('common:contacts_subtitle2')
        }
      />

      <Head>
        <title>{PREFIX_TITLE + t('common:contacts')}</title>

        <link
          rel="stylesheet"
          href={'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'}
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Head>

      <MainLayout>
        <Section withGradient withSmallPadding>
          <CustomContainer>
            <Row>
              <Col>
                <MainTitle>{t('common:contacts')}</MainTitle>
                <p className="relative text-white/60 md:text-xl text-base font-light mt-5 !leading-loose">
                  {t('common:contacts_subtitle1')}
                  <br />
                  {t('common:contacts_subtitle2')}
                </p>
              </Col>
            </Row>
          </CustomContainer>
        </Section>

        <Section withSmallPadding className="!pt-0">
          <CustomContainer>
            <Row>
              <Col>
                <div>
                  <div className="flex flex-wrap items-center justify-center gap-5 z-10 relative p-5">
                    <Button
                      type="button"
                      variant={activeCity === 'chisinau' ? 'red' : 'white'}
                      onClick={() => setActiveCity('chisinau')}
                      className={
                        'flex gap-4 items-center !h-12 !p-4' +
                        (activeCity === 'chisinau' &&
                          '!p-4 !pl-5 !pr-8 !pointer-events-none')
                      }
                    >
                      {activeCity === 'chisinau' && (
                        <div className="h-8 w-8 flex-none bg-black/20 rounded-full flex items-center justify-center">
                          <IconCheck size={24} />
                        </div>
                      )}
                      <span>{CONTACTS.chisinau.map['city_' + lang]}</span>
                    </Button>

                    <Button
                      type="button"
                      variant={activeCity === 'ialoveni' ? 'red' : 'white'}
                      onClick={() => setActiveCity('ialoveni')}
                      className={
                        'flex gap-4 items-center !h-12 !p-4' +
                        (activeCity === 'ialoveni' &&
                          '!p-4 !pl-5 !pr-8 !pointer-events-none')
                      }
                    >
                      {activeCity === 'ialoveni' && (
                        <div className="h-8 w-8 flex-none bg-black/20 rounded-full flex items-center justify-center">
                          <IconCheck size={24} />
                        </div>
                      )}
                      <span>{CONTACTS.ialoveni.map['city_' + lang]}</span>
                    </Button>
                  </div>

                  <div className="flex sm:gap-x-20 gap-5 flex-wrap mb-5 pt-5 -top-0.5 border-t-2 relative">
                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        {t('common:address')}:
                      </div>

                      <div className="flex gap-2 text-gray-500">
                        <img
                          src={mapMarkerImage.src}
                          alt=""
                          className="h-5 flex-none relative top-[3px]"
                        />
                        <span>
                          {CONTACTS[activeCity]?.map['address_' + lang]}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        {t('common:working_hours')}:
                      </div>

                      {CONTACTS[activeCity]?.map['timetable_' + lang]?.map(
                        (item: string, index: number) => (
                          <div className="flex gap-2 text-gray-500" key={index}>
                            <img
                              src={timeImage.src}
                              alt=""
                              className="h-5 flex-none relative top-[3px]"
                            />
                            <span>{item}</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        {t('common:phone')}:
                      </div>

                      <a
                        href={`tel:${CONTACTS[activeCity]?.phone?.value}`}
                        className="flex gap-2 text-gray-500 transition hover:text-cardinal"
                      >
                        <img
                          src={phoneImage.src}
                          alt=""
                          className="h-5 flex-none relative top-[3px]"
                        />
                        <span>{CONTACTS[activeCity]?.phone?.toShow}</span>
                      </a>

                      {CONTACTS[activeCity]?.additionalPhone && (
                        <div className="flex gap-5">
                          <a
                            href={`tel:${CONTACTS[activeCity]?.additionalPhone?.value}`}
                            className="flex gap-2 text-gray-500 transition hover:text-cardinal"
                          >
                            <img
                              src={phoneImage.src}
                              alt=""
                              className="h-5 flex-none relative top-[3px]"
                            />
                            <span>
                              {CONTACTS[activeCity]?.additionalPhone?.toShow}
                            </span>
                          </a>

                          {CONTACTS[activeCity]?.additionalPhone
                            ?.messengers && (
                            <div className="flex gap-2 justify-center">
                              <a
                                href={
                                  CONTACTS[activeCity]?.additionalPhone
                                    .messengers?.whatsapp
                                }
                                className="hover:scale-110 transition"
                              >
                                <Image
                                  className="rounded-lg"
                                  src={whatsappIcon.src}
                                  width={24}
                                  height={24}
                                  alt="Whatsapp logo"
                                />
                              </a>

                              <a
                                href={
                                  CONTACTS[activeCity]?.additionalPhone
                                    ?.messengers?.viber
                                }
                                className="hover:scale-110 transition"
                              >
                                <Image
                                  className="rounded-lg"
                                  src={viberIcon.src}
                                  width={24}
                                  height={24}
                                  alt="Viber logo"
                                />
                              </a>

                              <a
                                href={
                                  CONTACTS[activeCity]?.additionalPhone
                                    ?.messengers?.telegram
                                }
                                className="hover:scale-110 transition"
                              >
                                <Image
                                  className="rounded-lg"
                                  src={telegramIcon.src}
                                  width={24}
                                  height={24}
                                  alt="Telegram logo"
                                />
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        E-mail:
                      </div>

                      <a
                        href={`mailto:${CONTACTS[activeCity]?.map?.email}`}
                        className="flex gap-2 text-gray-500 transition hover:text-cardinal"
                      >
                        <img
                          src={emailImage.src}
                          alt=""
                          className="h-5 flex-none relative top-[3px]"
                        />
                        <span>{CONTACTS[activeCity]?.map?.email}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <Map
                  //@ts-ignore
                  position={CONTACTS[activeCity]?.map?.position}
                  //@ts-ignore
                  routes={CONTACTS[activeCity]?.map?.routes}
                />
              </Col>
            </Row>
          </CustomContainer>
        </Section>
      </MainLayout>
    </>
  );
};
