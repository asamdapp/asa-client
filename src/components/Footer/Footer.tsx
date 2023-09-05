import React, { FC } from 'react';

import { Col, Row } from 'react-grid-system';
import Trans from 'next-translate/Trans';
import { Link, useRouter } from 'next-translate-routes';
import useSWR from 'swr';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { IconMinus } from '@tabler/icons';

import { CustomContainer, LanguageSwitcher, Logo, Section } from 'components';
import { CONTACTS, SOCIAL_MEDIA } from 'utils';

import whatsappIcon from 'assets/images/icons/whatsapp.svg';
import viberIcon from 'assets/images/icons/viber.svg';
import telegramIcon from 'assets/images/icons/telegram.svg';

import mapMarkerImage from 'assets/images/icons/map-marker.svg';
import phoneImage from 'assets/images/icons/phone.svg';
import emailImage from 'assets/images/icons/email-only-gray.svg';

export const Footer: FC = (): JSX.Element => {
  const { locale } = useRouter();
  const { lang } = useTranslation();

  const { data: services } = useSWR('services');

  return (
    <div>
      <Section withGradient className="!py-5">
        <CustomContainer>
          <Row className="gap-y-10" gutterWidth={40}>
            <Col lg={7.5}>
              <div>
                <div className="font-semibold text-base mb-2">
                  <Trans i18nKey={'common:contacts'} />
                </div>

                <div className="flex gap-5 flex-col sm:flex-row">
                  <div className="sm:w-1/2 w-full pb-3 border rounded-xl border-white/10">
                    <div className="bg-white/10 rounded-t-xl p-1 text-center mb-4">
                      {CONTACTS?.chisinau?.map['city_' + lang]}
                    </div>
                    <div className="flex flex-col gap-5 px-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          Adresa:
                        </div>

                        <a
                          href={CONTACTS?.chisinau?.map?.routes?.googleMaps}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={mapMarkerImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>
                            {CONTACTS?.chisinau?.map['address_' + lang]}
                          </span>
                        </a>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          Telefon:
                        </div>

                        <a
                          href={`tel:${CONTACTS?.chisinau?.phone?.value}`}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={phoneImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>{CONTACTS?.chisinau?.phone?.toShow}</span>
                        </a>

                        {CONTACTS?.chisinau?.additionalPhone && (
                          <div className="flex items-center gap-5">
                            <a
                              href={`tel:${CONTACTS?.chisinau?.additionalPhone?.value}`}
                              className="flex gap-2 text-white/50 text-sm transition hover:text-cardinal"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={phoneImage.src}
                                alt=""
                                className="h-4 flex-none relative top-[3px]"
                              />
                              <span>
                                {CONTACTS?.chisinau?.additionalPhone?.toShow}
                              </span>
                            </a>

                            {CONTACTS?.chisinau?.additionalPhone
                              ?.messengers && (
                              <div className="flex gap-2">
                                <a
                                  href={
                                    CONTACTS?.chisinau?.additionalPhone
                                      .messengers?.whatsapp
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                                    CONTACTS?.chisinau?.additionalPhone
                                      ?.messengers?.viber
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                                    CONTACTS?.chisinau?.additionalPhone
                                      ?.messengers?.telegram
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          E-mail:
                        </div>
                        <a
                          href={`mailto:${CONTACTS?.chisinau?.map?.email}`}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={emailImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>{CONTACTS?.chisinau?.map?.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="sm:w-[32px] flex-none flex sm:flex-col items-center sm:justify-start justify-center gap-4">
                    <div className="sm:h-full sm:w-px w-full h-px bg-white/10" />

                    {SOCIAL_MEDIA?.map((item: any) => (
                      <a
                        key={item.name}
                        target="_blank"
                        rel="noreferrer"
                        href={item.link}
                        className="flex-none transition hover:scale-110"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.logo.src}
                          alt={item.name}
                          className="max-h-[28px] w-[32px]"
                        />
                      </a>
                    ))}

                    <div className="sm:h-full sm:w-px w-full h-px bg-white/10" />
                  </div>

                  <div className="sm:w-1/2 w-full pb-3 border rounded-xl border-white/10">
                    <div className="bg-white/10 rounded-t-xl p-1 text-center mb-4">
                      {CONTACTS?.ialoveni?.map['city_' + lang]}
                    </div>
                    <div className="flex flex-col gap-5 px-3">
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          Adresa:
                        </div>

                        <a
                          href={CONTACTS?.ialoveni?.map?.routes?.googleMaps}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={mapMarkerImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>
                            {CONTACTS?.ialoveni?.map['address_' + lang]}
                          </span>
                        </a>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          Telefon:
                        </div>

                        <a
                          href={`tel:${CONTACTS?.ialoveni?.phone?.value}`}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={phoneImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>{CONTACTS?.ialoveni?.phone?.toShow}</span>
                        </a>

                        {CONTACTS?.ialoveni?.additionalPhone && (
                          <div className="flex gap-5">
                            <a
                              href={`tel:${CONTACTS?.ialoveni?.additionalPhone?.value}`}
                              className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={phoneImage.src}
                                alt=""
                                className="h-4 flex-none relative top-[3px]"
                              />
                              <span>
                                {CONTACTS?.ialoveni?.additionalPhone?.toShow}
                              </span>
                            </a>

                            {CONTACTS?.ialoveni?.additionalPhone
                              ?.messengers && (
                              <div className="flex gap-2 justify-center">
                                <a
                                  href={
                                    CONTACTS?.ialoveni?.additionalPhone
                                      .messengers?.whatsapp
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                                    CONTACTS?.ialoveni?.additionalPhone
                                      ?.messengers?.viber
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                                    CONTACTS?.ialoveni?.additionalPhone
                                      ?.messengers?.telegram
                                  }
                                  className="hover:scale-110 transition flex items-center"
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
                        <div className="text-sm font-semibold text-white/80 mb-1">
                          E-mail:
                        </div>
                        <a
                          href={`mailto:${CONTACTS?.ialoveni?.map?.email}`}
                          className="flex gap-2 text-white/50  text-sm transition hover:text-cardinal"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={emailImage.src}
                            alt=""
                            className="h-4 flex-none relative top-[3px]"
                          />
                          <span>{CONTACTS?.ialoveni?.map?.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col width={'auto'} lg={2.25}>
              <div>
                <div className="font-semibold text-base mb-2">
                  <Trans i18nKey={'common:services'} />
                </div>

                <ul>
                  {services?.map((item: any) => (
                    <li key={item?._id} className="py-1 last:pb-0">
                      <Link
                        href={{
                          pathname: '/services/[serviceSlug]',
                          query: { serviceSlug: item?.slug?.current },
                        }}
                        passHref
                        locale={locale}
                      >
                        <a className="flex gap-1 transition text-sm text-white/50  text-sm hover:text-white">
                          <IconMinus
                            size={12}
                            className="flex-none relative top-1"
                          />
                          <span>{item?.name}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col width={'auto'} lg={2.25}>
              <div>
                <div className="font-semibold text-base mb-2">
                  <Trans i18nKey="common:more_info" />
                </div>

                <ul>
                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/mission',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex gap-1 transition text-sm text-white/50  text-sm hover:text-white">
                        <IconMinus
                          size={12}
                          className="flex-none relative top-1"
                        />
                        <span>
                          <Trans i18nKey={'common:company_mission'} />
                        </span>
                      </a>
                    </Link>
                  </li>

                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/jobs',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex gap-1 transition text-sm text-white/50  text-sm hover:text-white">
                        <IconMinus
                          size={12}
                          className="flex-none relative top-1"
                        />
                        <span>
                          <Trans i18nKey={'common:company_jobs'} />
                        </span>
                      </a>
                    </Link>
                  </li>

                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/languages',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex gap-1 transition text-sm text-white/50  text-sm hover:text-white">
                        <IconMinus
                          size={12}
                          className="flex-none relative top-1"
                        />
                        <span>
                          <Trans i18nKey={'common:languages_of_translation'} />
                        </span>
                      </a>
                    </Link>
                  </li>

                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/faq',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex gap-1 transition text-sm text-white/50  text-sm hover:text-white">
                        <IconMinus
                          size={12}
                          className="flex-none relative top-1"
                        />
                        <span>
                          <Trans i18nKey={'common:faq'} />
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>

      <Section withGradient className="!py-2 border-t border-white/5">
        <CustomContainer>
          <Row>
            <Col>
              <div className="flex items-center justify-between py-2">
                <div className="md:block hidden">
                  <Logo />
                </div>

                <div className="text-sm text-center">
                  Copyright © Agenția Servicii Autorizate. Toate drepturile
                  rezervate.
                </div>

                <div className="md:block hidden">
                  <LanguageSwitcher />
                </div>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </div>
  );
};
