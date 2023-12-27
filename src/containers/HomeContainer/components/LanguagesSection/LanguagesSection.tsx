import React, { FC } from 'react';
import { IconSquareArrowRight } from '@tabler/icons';

import {
  CustomContainer,
  LanguageItem,
  Section,
  SectionTitle,
} from 'components';

import Trans from 'next-translate/Trans';
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface IProps {}

export const LanguagesSection: FC<IProps> = (): JSX.Element => {
  const { locale } = useRouter();
  const { data: languages } = useSWR('languages');

  return (
    <Section withGradient>
      <CustomContainer>
        <SectionTitle withGradient>
          <Trans i18nKey={'common:section_title.languages'} />
        </SectionTitle>
        <div className="row">
          {languages?.slice(0, 5).map((item: any) => (
            <div className="col-4 col-sm-3 col-md-2" key={item._id}>
              <LanguageItem item={item} />
            </div>
          ))}

          <div className="col-12 col-sm-5 col-md-2">
            <a
              href={`${locale === 'ru' ? '/' + locale + '/' : '/'}languages`}
              className="
                flex w-full flex-col items-center justify-center font-medium text-sm
                text-white/70 gap-1 rounded-lg bg-white/5
                dark:bg-black/20
                p-2 text-center
                hover:text-cardinal hover:bg-white
                transition
                min-h-full
              "
            >
              <span className="flex items-end justify-center">
                <IconSquareArrowRight size={32} />
              </span>
              <span>
                <Trans i18nKey={'common:buttons.show_all_languages'} />
              </span>
            </a>
          </div>
        </div>
      </CustomContainer>
    </Section>
  );
};
