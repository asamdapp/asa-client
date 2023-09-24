import React, { FC } from 'react';

import {
  CustomContainer,
  OfferButton,
  Section,
  SectionTitle,
} from 'components';
import Image from 'next/image';
import { urlFor } from 'utils';
import Trans from 'next-translate/Trans';
import useSWR from 'swr';

interface IProps {}

export const HowToGetOnlineTranslation: FC<IProps> = (): JSX.Element => {
  const { data: howGetTranslation } = useSWR('howGetTranslation');

  return (
    <Section>
      <CustomContainer>
        <SectionTitle>
          <Trans i18nKey={'common:section_title.how_to_get_translation'} />
        </SectionTitle>

        <div className="row gap-y-3 sm:gap-y-5">
          {howGetTranslation.map((item: any, index: number) => (
            <div className="col-xl-2 col-sm-4" key={index}>
              <div
                className="
                  flex flex-row sm:flex-col items-center gap-2
                  bg-white p-2 sm:p-4 rounded-xl
                  dark:bg-black/20
                  relative
                  h-full
                "
              >
                <div className="relative w-16 h-16 sm:w-36 sm:h-36 flex-none">
                  <Image
                    src={urlFor(item?.image).url()}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="bg-no-repeat"
                    alt={item?.name}
                  />
                </div>
                <strong className="word-break text-base sm:text-sm text-downriver dark:text-white/70 text-left sm:text-center font-semibold">
                  {item?.name}
                </strong>

                <div
                  className="
                    ml-auto text-downriver/10 text-4xl sm:text-2xl mr-2 font-noto-serif
                    dark:text-white/5
                    static sm:absolute sm:top-2 sm:right-2
                  "
                >
                  {item?.step}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <OfferButton className="flex mx-auto mt-8" />
          </div>
        </div>
      </CustomContainer>
    </Section>
  );
};
