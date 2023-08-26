import React, { FC, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer, MainTitle, Section } from 'components';
import { CONTACTS, PREFIX_TITLE } from 'utils';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import { Button } from 'UI';
import { IconCheck } from '@tabler/icons';
import Image from 'next/image';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import viberIcon from '../../assets/images/icons/viber.svg';
import telegramIcon from '../../assets/images/icons/telegram.svg';

const Map = dynamic(() => import('./Map'), { ssr: false });

export const ContactContainer: FC = (): JSX.Element => {
  const { t, lang } = useTranslation();

  const [activeCity, setActiveCity] = useState<'chisinau' | 'ialoveni'>(
    'chisinau'
  );

  console.log(
    'CONTACTS[activeCity]?.additionalPhone',
    CONTACTS[activeCity]?.additionalPhone
  );

  return (
    <>
      <Head>
        <title>{PREFIX_TITLE + t('common:contacts')}</title>
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
                  <div className="flex items-center justify-center gap-10 z-10 relative p-5">
                    <Button
                      variant={activeCity === 'chisinau' ? 'red' : 'white'}
                      onClick={() => setActiveCity('chisinau')}
                      className={
                        'flex gap-4 items-center !h-12 !p-4' +
                        (activeCity === 'chisinau' && '!p-4 !pl-5 !pr-8 !pointer-events-none')
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
                      variant={activeCity === 'ialoveni' ? 'red' : 'white'}
                      onClick={() => setActiveCity('ialoveni')}
                      className={
                        'flex gap-4 items-center !h-12 !p-4' +
                        (activeCity === 'ialoveni' && '!p-4 !pl-5 !pr-8 !pointer-events-none')
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
                        Adresa:
                      </div>
                      <div className="text-gray-500">
                        {CONTACTS[activeCity]?.map['address_' + lang]}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        Program de lucru:
                      </div>

                      {CONTACTS[activeCity]?.map['timetable_' + lang]?.map(
                        (item: string, index: number) => (
                          <div className="text-gray-500" key={index}>
                            {item}
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="font-semibold text-downriver mb-1">
                        Telefon:
                      </div>

                      <a
                        href={CONTACTS[activeCity]?.phone?.value}
                        className="text-gray-500 transition hover:text-cardinal"
                      >
                        {CONTACTS[activeCity]?.phone?.toShow}
                      </a>

                      {CONTACTS[activeCity]?.additionalPhone && (
                        <div className="flex gap-5">
                          <a
                            href={CONTACTS[activeCity]?.additionalPhone?.value}
                            className="text-gray-500 transition hover:text-cardinal"
                          >
                            {CONTACTS[activeCity]?.additionalPhone?.toShow}
                          </a>

                          {CONTACTS[activeCity]?.additionalPhone
                            ?.messengers && (
                            <div className="flex gap-5 justify-center">
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
                      <div className="text-gray-500">
                        {CONTACTS[activeCity]?.map?.email}
                      </div>
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
