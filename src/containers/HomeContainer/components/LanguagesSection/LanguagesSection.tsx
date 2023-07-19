import React, { FC } from 'react';
import { Col, Row } from 'react-grid-system';
import { IconSquareArrowRight } from '@tabler/icons';

import {
  CustomContainer,
  LanguageItem,
  Section,
  SectionTitle,
} from 'components';
import { Link, useRouter } from 'next-translate-routes';
import useSWR from 'swr';
import Trans from 'next-translate/Trans';

export const LanguagesSection: FC = (): JSX.Element => {
  const { locale } = useRouter();
  const { data: languages } = useSWR('languages');

  return (
    <Section withGradient isGradientReverse>
      <CustomContainer>
        <SectionTitle withGradient>
          <Trans i18nKey={'common:section_title.languages'} />
        </SectionTitle>
        <Row>
          {languages?.map((item: any) => (
            <Col
              xs={4}
              sm={3}
              md={12 / 5}
              lg={2}
              xl={2}
              xxl={12 / 8}
              key={item._id}
            >
              <LanguageItem item={item} />
            </Col>
          ))}

          <Col xs={12} lg={4} xl={2} xxl={12 / 8}>
            <Link href={{ pathname: '/languages' }} passHref locale={locale}>
              <a
                className="
                flex w-full flex-col items-center font-medium text-sm
                text-white/70 gap-2 rounded-lg my-3 bg-white/5
                dark:bg-black/20
                pb-2 text-center
                hover:text-cardinal hover:bg-white
                transition
              "
              >
                <span className="flex items-end justify-center h-12 w-12">
                  <IconSquareArrowRight size={32} />
                </span>
                <span>
                  <Trans i18nKey={'common:buttons.show_all_languages'} />
                </span>
              </a>
            </Link>
          </Col>
        </Row>
      </CustomContainer>
    </Section>
  );
};
