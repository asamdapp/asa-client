import React, { FC } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-grid-system';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { LanguageSwitcher, Logo, OfferButton } from 'components';
import { Menu } from './components';

import whatsappIcon from 'assets/images/icons/whatsapp.svg';
import viberIcon from 'assets/images/icons/viber.svg';
import telegramIcon from 'assets/images/icons/telegram.svg';
import phoneIcon from 'assets/images/icons/phone.svg';
import burgerMenuIcon from 'assets/images/icons/burger-menu.svg';

export const Navigation: FC = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative h-14 w-screen gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver">
        <div className="fixed z-50 h-14 w-screen border-b border-white/5 gradient-downriver-to-jelly-bean-with-opacity dark:gradient-firefly-to-downriver-with-opacity backdrop-blur-md">
          <Container fluid className="padding-container xl:!px-5">
            <Row>
              <Col xxl={12}>
                <div className="flex items-center justify-between h-14 gap-5">
                  <button
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

                  <div className="hidden xxl:flex">
                    <Menu />
                  </div>

                  <div className="hidden sm:flex gap-8">
                    <a
                      href="tel:078 150 555"
                      className="flex gap-2 items-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
                    >
                      <Image
                        src={phoneIcon.src}
                        width={20}
                        height={20}
                        alt="Phone icon"
                        className="rounded-md"
                      />
                      <span className="flex-none">078 150 555</span>
                    </a>

                    <button
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
                        <div className="slide4">
                          <Image
                            src={phoneIcon.src}
                            width={40}
                            height={40}
                            alt="Telegram logo"
                          />
                        </div>
                      </div>
                      <span className="flex-none">068 853 504</span>
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

      <div className="relative h-10 w-screen gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver block sm:hidden">
        <div className="fixed z-50 h-10 w-screen border-b border-white/5 gradient-downriver-to-jelly-bean-with-opacity dark:gradient-firefly-to-downriver-with-opacity backdrop-blur-md">
          <div className="flex justify-between items-center h-10">
            <div className="px-5 flex justify-center items-center w-full border-r border-white/5">
              <a
                href="tel:078 150 555"
                className="flex gap-2 items-center text-white text-sm flex-none no-underline hover:underline underline-offset-4 decoration-cardinal decoration-2"
              >
                <Image
                  src={phoneIcon.src}
                  width={20}
                  height={20}
                  alt="Phone icon"
                  className="rounded-md"
                />
                <span className="flex-none">078 150 555</span>
              </a>
            </div>
            <div className="px-5 flex justify-center items-center w-full">
              <button
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
                  <div className="slide4">
                    <Image
                      src={phoneIcon.src}
                      width={40}
                      height={40}
                      alt="Telegram logo"
                    />
                  </div>
                </div>
                <span className="flex-none">068 853 504</span>
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
        <h2 className="text-downriver font-noto-serif md:text-2xl text-xl mb-10  leading-tight max-w-sm pr-10">
          Contacteaza-ne:
        </h2>
        <div>
          <a
            href=""
            className="flex items-center gap-5 bg-gray-100 p-2 rounded-xl"
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
        </div>
      </Modal>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div>
          <button onClick={toggleDrawer}>close</button>
          <hr />

          <div className="bg-cardinal">
            <Menu />
          </div>
        </div>
      </Drawer>
    </>
  );
};
