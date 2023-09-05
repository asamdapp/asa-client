import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import dynamic from 'next/dynamic';
import 'react-modern-drawer/dist/index.css';

import { LanguageSwitcher, Logo, OfferButton } from 'components';
import { Menu } from './components';

import whatsappIcon from 'assets/images/icons/whatsapp.svg';
import viberIcon from 'assets/images/icons/viber.svg';
import telegramIcon from 'assets/images/icons/telegram.svg';
import phoneIcon from 'assets/images/icons/phone.svg';
import burgerMenuIcon from 'assets/images/icons/burger-menu.svg';
import Trans from 'next-translate/Trans';
import { Link, useRouter } from 'next-translate-routes';
import useSWR from 'swr';
import { CONTACTS } from 'utils';
import useTranslation from 'next-translate/useTranslation';

const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });

export const Navigation: FC = (): JSX.Element => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const { data: services } = useSWR('services');

  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative h-14 left-0 right-0 gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver">
        <div className="fixed z-50 h-14 left-0 right-0 border-b border-white/5 gradient-downriver-to-jelly-bean-with-opacity dark:gradient-firefly-to-downriver-with-opacity backdrop-blur-md">
          <Container fluid className="padding-container xl:!px-5">
            <Row>
              <Col xxl={12}>
                <div className="flex items-center justify-between h-14 gap-5">
                  <button
                    type="button"
                    className="w-[44px] h-[44px] group xxl:hidden flex bg-black/10 flex-none p-2 rounded-md hover:bg-black/20 transition"
                    onClick={toggleDrawer}
                  >
                    <div className="flex items-center justify-center group-hover:scale-110 transition">
                      <Image
                        src={burgerMenuIcon.src}
                        width={28}
                        height={28}
                        alt="Burger menu"
                      />
                    </div>
                  </button>

                  <Logo />

                  <div className="hidden xxl:flex h-full">
                    <Menu />
                  </div>

                  <div className="hidden sm:flex gap-8">
                    <a
                      href={`tel:${CONTACTS.chisinau.phone.value}`}
                      className="flex gap-2 items-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
                    >
                      <Image
                        src={phoneIcon.src}
                        width={20}
                        height={20}
                        alt="Phone icon"
                        className="rounded-md"
                      />
                      <span className="flex-none">
                        {CONTACTS.chisinau.phone.toShow}
                      </span>
                    </a>

                    <button
                      type="button"
                      className="flex gap-2 items-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
                      onClick={onOpenModal}
                    >
                      <div className="w-[20px] h-[20px] overflow-hidden relative rounded-md flex-none">
                        <div className="slide1">
                          <Image
                            src={whatsappIcon.src}
                            width={40}
                            height={40}
                            alt="Whatsapp logo"
                          />
                        </div>
                        <div className="slide2">
                          <Image
                            src={viberIcon.src}
                            width={40}
                            height={40}
                            alt="Viber logo"
                          />
                        </div>
                        <div className="slide3">
                          <Image
                            src={telegramIcon.src}
                            width={40}
                            height={40}
                            alt="Telegram logo"
                          />
                        </div>
                      </div>
                      <span className="flex-none">
                        {CONTACTS.chisinau.additionalPhone.toShow}
                      </span>
                    </button>
                  </div>

                  <LanguageSwitcher />

                  <div className="hidden md:flex items-center">
                    <OfferButton size="small" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="relative h-10 left-0 right-0 gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver block sm:hidden">
        <div className="fixed z-50 h-10 left-0 right-0 border-b border-white/5 gradient-downriver-to-jelly-bean-with-opacity dark:gradient-firefly-to-downriver-with-opacity backdrop-blur-md">
          <div className="flex justify-between items-center h-10">
            <div className="flex justify-center items-center w-full h-full border-r border-white/5">
              <a
                href={`tel:${CONTACTS.chisinau.phone.value}`}
                className="flex w-full h-full gap-2 items-center justify-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
              >
                <Image
                  src={phoneIcon.src}
                  width={20}
                  height={20}
                  alt="Phone icon"
                  className="rounded-md"
                />
                <span className="flex-none">
                  {CONTACTS.chisinau.phone.toShow}
                </span>
              </a>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <button
                type="button"
                className="flex w-full h-full gap-2 items-center justify-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
                onClick={onOpenModal}
              >
                <div className="w-[20px] h-[20px] overflow-hidden relative rounded-md flex-none">
                  <div className="slide1">
                    <Image
                      src={whatsappIcon.src}
                      width={40}
                      height={40}
                      alt="Whatsapp logo"
                    />
                  </div>
                  <div className="slide2">
                    <Image
                      src={viberIcon.src}
                      width={40}
                      height={40}
                      alt="Viber logo"
                    />
                  </div>
                  <div className="slide3">
                    <Image
                      src={telegramIcon.src}
                      width={40}
                      height={40}
                      alt="Telegram logo"
                    />
                  </div>
                </div>
                <span className="flex-none">
                  {CONTACTS.chisinau.additionalPhone.toShow}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: 'rounded-xl' }}
      >
        <h2 className="text-downriver font-noto-serif md:text-2xl text-xl mb-5 leading-tight max-w-sm pr-10">
          {t('common:contact_us')}
        </h2>

        <div className="flex flex-col gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            href={CONTACTS.chisinau.additionalPhone.messengers.whatsapp}
            className="flex items-center gap-3 text-downriver bg-gray-100 transition p-2 rounded-xl hover:bg-gray-200 text-sm"
          >
            <Image
              src={whatsappIcon.src}
              width={40}
              height={40}
              alt="Whatsapp logo"
              className="rounded-md"
            />

            <span>WhatsApp</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={CONTACTS.chisinau.additionalPhone.messengers.viber}
            className="flex items-center gap-3 text-downriver bg-gray-100 transition p-2 rounded-xl hover:bg-gray-200 text-sm"
          >
            <Image
              src={viberIcon.src}
              width={40}
              height={40}
              alt="Viber logo"
              className="rounded-md"
            />

            <span>Viber</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={CONTACTS.chisinau.additionalPhone.messengers.telegram}
            className="flex items-center gap-3 text-downriver bg-gray-100 transition p-2 rounded-xl hover:bg-gray-200 text-sm"
          >
            <Image
              src={telegramIcon.src}
              width={40}
              height={40}
              alt="Viber logo"
              className="rounded-md"
            />

            <span>Telegram</span>
          </a>
        </div>
      </Modal>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="!w-full max-w-[320px] overflow-y-auto"
        lockBackgroundScroll
      >
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-4 border-gray-100 border-b">
            <Logo color="dark" />
            <button type="button" onClick={toggleDrawer}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                className="fill-gray-400"
              >
                <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center w-full border-b border-gray-100 pb-4 divide-gray-100 divide-x">
            <a
              href={`tel:${CONTACTS.chisinau.phone.value}`}
              className="flex gap-2 w-1/2 items-center justify-center text-downriver text-base flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
            >
              <Image
                src={phoneIcon.src}
                width={20}
                height={20}
                alt="Phone icon"
                className="rounded-md"
              />
              <span className="flex-none">
                {CONTACTS.chisinau.phone.toShow}
              </span>
            </a>

            <a
              href={`tel:${CONTACTS.chisinau.additionalPhone.value}`}
              className="flex gap-2 w-1/2 items-center justify-center text-downriver text-base flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
            >
              <Image
                src={phoneIcon.src}
                width={20}
                height={20}
                alt="Phone icon"
                className="rounded-md"
              />
              <span className="flex-none">
                {CONTACTS.chisinau.additionalPhone.toShow}
              </span>
            </a>
          </div>

          <OfferButton className="!max-w-full block" />

          <div className="flex flex-col gap-2">
            <Accordion allowMultipleExpanded allowZeroExpanded>
              <AccordionItem className="my-2">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between text-downriver font-semibold bg-gray-50 px-3 py-2 rounded-xl hover:bg-gray-100">
                    <Trans i18nKey="common:about" />
                    <svg viewBox="0 0 20 12" className="w-3 fill-downriver">
                      <path d="M.94.94a1.5 1.5 0 0 1 2.12 0L10 7.878l6.94-6.94a1.5 1.5 0 0 1 2.12 2.122l-8 8a1.5 1.5 0 0 1-2.12 0l-8-8a1.5 1.5 0 0 1 0-2.122Z" />
                    </svg>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col text-gray-500 p-2">
                    <Link
                      href={{
                        pathname: '/mission',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="px-3 py-1">
                        &#45; <Trans i18nKey={'common:company_mission'} />
                      </a>
                    </Link>

                    <Link
                      href={{
                        pathname: '/jobs',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="px-3 py-1">
                        &#45; <Trans i18nKey={'common:company_jobs'} />
                      </a>
                    </Link>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="mt-2">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex justify-between text-downriver font-semibold bg-gray-50 px-3 py-2 rounded-xl hover:bg-gray-100">
                    <Trans i18nKey={'common:services'} />
                    <svg viewBox="0 0 20 12" className="w-3 fill-downriver">
                      <path d="M.94.94a1.5 1.5 0 0 1 2.12 0L10 7.878l6.94-6.94a1.5 1.5 0 0 1 2.12 2.122l-8 8a1.5 1.5 0 0 1-2.12 0l-8-8a1.5 1.5 0 0 1 0-2.122Z" />
                    </svg>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col text-gray-500 p-2">
                    {services?.map((item: any) => (
                      <Link
                        key={item?._id}
                        href={{
                          pathname: '/services/[serviceSlug]',
                          query: { serviceSlug: item?.slug?.current },
                        }}
                        passHref
                        locale={locale}
                      >
                        <a className="px-3 py-1">&#45; {item?.name}</a>
                      </Link>
                    ))}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

            <Link href={{ pathname: '/languages' }} passHref locale={locale}>
              <a className="flex justify-between text-downriver font-semibold bg-gray-50 px-3 py-2 rounded-xl hover:bg-gray-100 px-3 py-1">
                <Trans i18nKey={'common:languages_of_translation'} />
              </a>
            </Link>

            <Link
              href={{
                pathname: '/faq',
              }}
              passHref
              locale={locale}
            >
              <a className="flex justify-between text-downriver font-semibold bg-gray-50 px-3 py-2 rounded-xl hover:bg-gray-100 px-3 py-1">
                <Trans i18nKey={'common:faq'} />
              </a>
            </Link>

            <Link
              href={{
                pathname: '/contact',
              }}
              passHref
              locale={locale}
            >
              <a className="flex justify-between text-downriver font-semibold bg-gray-50 px-3 py-2 rounded-xl hover:bg-gray-100 px-3 py-1">
                <Trans i18nKey={'common:contacts'} />
              </a>
            </Link>
          </div>

          <div className="flex gap-5 justify-center mt-5">
            <a
              href={CONTACTS.chisinau.additionalPhone.messengers.whatsapp}
              className="hover:scale-110 transition"
            >
              <Image
                className="rounded-lg"
                src={whatsappIcon.src}
                width={40}
                height={40}
                alt="Whatsapp logo"
              />
            </a>

            <a
              href={CONTACTS.chisinau.additionalPhone.messengers.viber}
              className="hover:scale-110 transition"
            >
              <Image
                className="rounded-lg"
                src={viberIcon.src}
                width={40}
                height={40}
                alt="Viber logo"
              />
            </a>

            <a
              href={CONTACTS.chisinau.additionalPhone.messengers.telegram}
              className="hover:scale-110 transition"
            >
              <Image
                className="rounded-lg"
                src={telegramIcon.src}
                width={40}
                height={40}
                alt="Telegram logo"
              />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};
