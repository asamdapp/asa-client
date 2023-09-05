import React, { FC, useState } from 'react';
import { IconArrowRight } from '@tabler/icons';
import { Col, Row } from 'react-grid-system';
import { Link, useRouter } from 'next-translate-routes';
import Image from 'next/image';
import useSWR from 'swr';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';
import Trans from 'next-translate/Trans';
import clsx from 'clsx';
import { Button } from 'UI';
import useTranslation from 'next-translate/useTranslation';

export const ServicesSection: FC = (): JSX.Element => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const { data } = useSWR('services');

  const [more, setMore] = useState(false);

  return (
    <Section>
      <CustomContainer>
        <SectionTitle>
          <Trans i18nKey={'common:section_title.services'} />
        </SectionTitle>

        <Row
          className={clsx('gap-y-5 relative', {
            'overflow-hidden max-h-[400px]': !more,
          })}
        >
          {data?.map((item: any) => (
            <Col key={item._id} lg={6} xl={4}>
              <Link
                href={{
                  pathname: '/services/[serviceSlug]',
                  query: { serviceSlug: item?.slug?.current },
                }}
                passHref
                locale={locale}
              >
                <a
                  className="
                      flex gap-4 items-center pr-4 group cursor-pointer rounded-xl overflow-hidden transition
                      bg-white hover:scale-[1.02]
                      dark:bg-black/20 dark:text-white/70 hover:dark:bg-black/40 hover:dark:text-cardinal
                      font-medium
                      text-downriver hover:text-cardinal h-full
                    "
                >
                  <div className="w-28 min-h-[theme(spacing.20)] h-full md:w-36 md:h-28 flex-none relative">
                    <Image
                      src={urlFor(item?.image).url()}
                      alt={item?.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </div>

                  <span className="word-break py-2">{item?.name}</span>

                  <IconArrowRight className="flex-none ml-auto text-gray-200 dark:text-white/70 group-hover:text-cardinal transition" />
                </a>
              </Link>
            </Col>
          ))}

          {!more && (
            <div className="absolute bottom-0 flex justify-center pt-20 text-sm text-cardinal font-semibold w-full bg-gradient-to-t from-gray-100 via-gray-100 to-gray-100/0">
              <Button
                type="button"
                size="small"
                variant="white"
                className="my-1 !mx-auto"
                onClick={() => setMore(true)}
              >
                {t('common:see_all_services')}
              </Button>
            </div>
          )}
        </Row>
      </CustomContainer>
    </Section>
  );
};
