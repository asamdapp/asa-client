import React, { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next-translate-routes';
import { Carousel } from 'react-responsive-carousel';
import Trans from 'next-translate/Trans';
import { Col, Row } from 'react-grid-system';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

import {
  CustomContainer,
  Section,
  SectionTitle,
  StarsRating,
} from 'components';

import image from 'assets/images/woman/2.png';
import quoteIcon from 'assets/images/icons/quote.svg';

import { urlFor } from 'utils';

interface IProps {}

export const FeedbackSection: FC<IProps> = (): JSX.Element => {
  const { data: feedbacks } = useSWR('feedbacks');

  const { locale } = useRouter();
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const feedbacksRO = feedbacks.filter((item: any) => item?.language === 'ro');
  const feedbacksRU = feedbacks.filter((item: any) => item?.language === 'ru');

  const filteredFeedbacks = useMemo(() => {
    return locale === 'ru'
      ? [...feedbacksRU, ...feedbacksRO]
      : [...feedbacksRO, ...feedbacksRU];
  }, [locale]);

  return (
    <>
      <Section withGradient className="!pb-0">
        <CustomContainer>
          <SectionTitle withGradient>
            <Trans i18nKey={'common:section_title.feedback'} />
          </SectionTitle>

          <Row>
            <Col md={6}>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedItem((prevState) =>
                        prevState === 0 ? feedbacks.length - 1 : prevState - 1
                      )
                    }
                    className="opacity-50 h-8 w-8 flex-none bg-black/10 flex items-center justify-center rounded-full transition hover:opacity-100 hover:bg-black/20"
                  >
                    <IconArrowLeft />
                  </button>

                  <Image
                    src={quoteIcon.src}
                    width={quoteIcon.width}
                    height={quoteIcon.height}
                    alt="Quote Icon"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedItem((prevState) =>
                        prevState === feedbacks?.length - 1 ? 0 : prevState + 1
                      )
                    }
                    className="opacity-50 h-8 w-8 flex-none bg-black/10 flex items-center justify-center rounded-full transition hover:opacity-100 hover:bg-black/20"
                  >
                    <IconArrowRight />
                  </button>
                </div>

                <Carousel
                  swipeable
                  dynamicHeight
                  autoPlay={false}
                  infiniteLoop
                  stopOnHover
                  showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  selectedItem={selectedItem}
                  className="mb-10"
                >
                  {filteredFeedbacks?.map((item: any) => (
                    <div key={item?._id} className="!min-h-[100px] px-2">
                      <div className="text-white/70 text-left">
                        {item?.review}
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-white/10 mt-3 pt-3 ">
                        <div className="flex items-center gap-4">
                          <div
                            className="h-12 w-12 flex-none bg-cover bg-no-repeat bg-center border border-white/10 rounded-full"
                            style={{
                              backgroundImage: `url(${
                                item?.photo ? urlFor(item?.photo).url() : ''
                              })`,
                            }}
                          />
                          <div className="flex flex-col items-start gap-1">
                            <div className="text-sm">{item?.name}</div>
                            <StarsRating rating={item?.stars} />
                          </div>
                        </div>

                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/Agen%C8%9Bia+Servicii+Autorizate/@47.1399248,28.4782568,11z/data=!4m8!3m7!1s0x40c97d115e2a6899:0x2416f44a61581f7!8m2!3d47.0254233!4d28.8404693!9m1!1b1!16s%2Fg%2F11nrt3j2q4?entry=ttu"
                          className="flex items-center gap-2 text-sm text-white/70 bg-black/10 py-2 px-4 rounded-full transition hover:text-white hover:bg-black/20"
                        >
                          <span>Google</span>
                          <IconArrowRight size={22} />
                        </a>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>

            <Col>
              <div className="relative h-full min-h-[35vh] sm:min-h-[500px]">
                <Image
                  src={image.src}
                  alt="hero image"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  className="bg-no-repeat"
                />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </>
  );
};
