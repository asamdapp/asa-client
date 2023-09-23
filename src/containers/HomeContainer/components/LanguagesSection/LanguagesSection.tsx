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
import Trans from 'next-translate/Trans';

interface IProps {
  props: any;
}

export const LanguagesSection: FC<IProps> = ({ props }): JSX.Element => {
  const { locale } = useRouter();
  const { languages } = props;

  return (
    <Section withGradient>
      <CustomContainer>
        <SectionTitle withGradient>
          <Trans i18nKey={'common:section_title.languages'} />
        </SectionTitle>
        <Row>
          {languages?.slice(0, 6).map((item: any) => (
            <Col xs={4} sm={3} md={12 / 5} lg={12 / 7} key={item._id}>
              <LanguageItem item={item} />
            </Col>
          ))}

          <Col xs={12} sm={5} md={4} lg={12 / 7}>
            <Link href={{ pathname: '/languages' }} passHref locale={locale}>
              <a
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
            </Link>
          </Col>
        </Row>
      </CustomContainer>
    </Section>
  );
};
