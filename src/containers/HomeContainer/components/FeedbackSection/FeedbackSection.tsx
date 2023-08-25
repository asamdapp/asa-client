import React, { FC, useState } from 'react';
import { CustomContainer, Section, SectionTitle } from 'components';
import Trans from 'next-translate/Trans';
import { Col, Row } from 'react-grid-system';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

import image from '../../../../assets/images/woman/2.png';
import quoteIcon from '../../../../assets/images/icons/quote.svg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import useSWR from 'swr';

interface IProps {}

const StarRating = ({ rating }: any) => {
  const totalStars = 5;
  const yellowStars = Math.min(Math.max(rating, 0), totalStars);
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const starColor = i <= yellowStars ? 'fill-amber-300' : 'fill-white/20'; // Primele "rating" stele sunt galbene, restul sunt gri

    stars.push(
      <svg key={i} viewBox="0 0 800 800" className={'h-3 ' + starColor}>
        <path d="M438.6 41.5 529 224.3a43 43 0 0 0 32.4 23.6l201.8 29.3a43 43 0 0 1 23.9 73.5L641 493a43 43 0 0 0-12.4 38.1l34.4 201a43 43 0 0 1-62.5 45.4l-180.4-94.9a43.1 43.1 0 0 0-40.1 0l-180.5 94.9A43 43 0 0 1 137 732l34.4-201a43 43 0 0 0-12.3-38.1L13 350.7a43 43 0 0 1 23.8-73.5l201.8-29.3a43 43 0 0 0 32.5-23.6l90.2-182.8a43 43 0 0 1 77.2 0Z" />
      </svg>
    );
  }

  return <div className="relative flex gap-1">{stars}</div>;
};

export const FeedbackSection: FC<IProps> = (): JSX.Element => {
  const { data: feedbacks } = useSWR('feedbacks');
  const [selectedItem, setSelectedItem] = useState<number>(0);

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
                  autoPlay
                  infiniteLoop
                  stopOnHover
                  showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  selectedItem={selectedItem}
                  className="mb-10"
                >
                  {feedbacks?.map((item: any, index: number) => (
                    <div key={item?._id} className="h-full min-h-[100px] px-2">
                      <div className="text-white/70 text-left">
                        {item?.review}
                      </div>

                      <div className="flex items-center justify-between gap-4 border-t border-white/10 mt-3 pt-3 ">
                        <div className="flex flex-col items-start gap-1">
                          <div className="text-sm">{item?.name}</div>
                          <StarRating rating={item?.stars} />
                        </div>

                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/Agen%C8%9Bia+Servicii+Autorizate/@47.1399248,28.4782568,11z/data=!4m8!3m7!1s0x40c97d115e2a6899:0x2416f44a61581f7!8m2!3d47.0254233!4d28.8404693!9m1!1b1!16s%2Fg%2F11nrt3j2q4?entry=ttu"
                          className="flex items-center gap-2 text-sm text-white/70 bg-black/10 py-2 px-4 rounded-full transition hover:text-white hover:bg-black/20"
                        >
                          <span>Google reviews</span>
                          <IconArrowRight size={22} />
                        </a>
                      </div>
                    </div>
                  ))}
                </Carousel>

                {/* <div className="mt-auto">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Agen%C8%9Bia+Servicii+Autorizate/@47.1399248,28.4782568,11z/data=!4m8!3m7!1s0x40c97d115e2a6899:0x2416f44a61581f7!8m2!3d47.0254233!4d28.8404693!9m1!1b1!16s%2Fg%2F11nrt3j2q4?entry=ttu"
                  >
                    Vezi totate recenziile
                  </a>
                </div>*/}
              </div>
            </Col>

            <Col>
              <div className="relative h-full min-h-[30vh] sm:min-h-[50vh]">
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
