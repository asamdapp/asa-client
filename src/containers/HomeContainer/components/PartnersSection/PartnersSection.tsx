import React, { FC } from 'react';

import Trans from 'next-translate/Trans';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';
import Image from 'next/image';
import useSWR from 'swr';

interface IProps {}

export const PartnersSection: FC<IProps> = (): JSX.Element => {
  const { data: partners } = useSWR('partners');

  return (
    <>
      <Section>
        <CustomContainer>
          <SectionTitle>
            <Trans i18nKey={'common:section_title.partners'} />
          </SectionTitle>

          <div className="row !justify-center gap-y-5">
            <div className="col">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {partners?.map((item: any) => (
                  <div
                    key={item?._id}
                    className="relative h-[50px] w-[120px] flex-none"
                  >
                    <Image
                      src={urlFor(item?.logo).url()}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                      className="bg-no-repeat"
                      alt={item?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CustomContainer>
      </Section>
    </>
  );
};
