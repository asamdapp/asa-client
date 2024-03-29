import React, { FC } from 'react';
import { CustomContainer, Section, SectionTitle } from 'components';
import Trans from 'next-translate/Trans';
import Image from 'next/image';
import image from 'assets/images/woman/3.png';
import check from 'assets/images/icons/check.svg';
import clsx from 'clsx';
import useSWR from 'swr';

interface IProps {}

export const GuaranteesSection: FC<IProps> = (): JSX.Element => {
  const { data: guarantees } = useSWR('guarantees');

  return (
    <>
      <Section withGradient className="!pb-0">
        <CustomContainer>
          <SectionTitle withGradient>
            <Trans i18nKey={'common:section_title.guarantees'} />
          </SectionTitle>

          <div className="row">
            <div className="col">
              <div className="grid sm:grid-cols-2 pb-16 xl:pt-8">
                {guarantees?.map((item: any, index: number) => (
                  <div
                    key={item?.title}
                    className={clsx(
                      'flex flex-col gap-3 py-3 sm:pr-5 border-t border-white/10',
                      {
                        'sm:border-l sm:pl-5 pr-0': (index + 1) % 2 === 0,
                        'sm:border-t-0': index === 1,
                        'border-t-0': index === 0,
                      }
                    )}
                  >
                    <div className="inline gap-2 justify-center font-semibold text-center">
                      <div className="inline mr-2 top-1 relative">
                        <Image
                          src={check.src}
                          width={check.width}
                          height={check.height}
                          alt="item?.name"
                        />
                      </div>
                      <span>{item?.title}</span>
                    </div>
                    <div className="inline text-sm font-light text-center">
                      {item?.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5 col-xl-4">
              <div className="relative h-full min-h-[400px] 1hidden 1lg:block">
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
            </div>
          </div>
        </CustomContainer>
      </Section>
    </>
  );
};
