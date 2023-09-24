import Image from 'next/image';
import React, { FC } from 'react';

import Trans from 'next-translate/Trans';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';
import useSWR from 'swr';
import clsx from 'clsx';

interface IProps {}

export const AdvantagesSection: FC<IProps> = (): JSX.Element => {
  const { data: advantages } = useSWR('advantages');

  return (
    <>
      <Section>
        <CustomContainer>
          <SectionTitle>
            <Trans i18nKey={'common:section_title.advantages'} />
          </SectionTitle>

          <div className="row gap-y-5">
            {advantages?.map((item: any, index: number) => (
              <div
                className={clsx('col-sm-6', {
                  'col-lg-4': index < 3,
                  'col-lg-6': index > 3,
                })}
                key={index}
              >
                <div
                  className="
                  flex flex-col gap-1 items-center p-4 rounded-xl transition
                  bg-white
                  dark:bg-black/20 dark:text-white/70
                  text-center
                  h-full
                "
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:h-16 md:h-16 flex-none relative">
                    <Image
                      src={urlFor(item?.image).url()}
                      alt={'item?.name'}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>

                  <h3 className="font-semibold text-downriver uppercase">
                    {item?.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CustomContainer>
      </Section>
    </>
  );
};
