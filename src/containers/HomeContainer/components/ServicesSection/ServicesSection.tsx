import React, { FC } from 'react';
import { IconArrowRight } from '@tabler/icons';
import { Col, Row } from 'react-grid-system';
import { Link, useRouter } from 'next-translate-routes';
import Image from 'next/image';
import useSWR from 'swr';

import { CustomContainer, Section, SectionTitle } from 'components';
import { urlFor } from 'utils';

export const ServicesSection: FC = (): JSX.Element => {
  const { locale } = useRouter();
  const { data } = useSWR('services');

  return (
    <Section>
      <CustomContainer>
        <SectionTitle>
          Oferim o gamă largă de servicii complete și profesionale
        </SectionTitle>

        <Row className="gap-y-5">
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
                      text-downriver hover:text-cardinal
                    "
                >
                  <div className="w-28 h-20 md:w-36 md:h-28 flex-none relative">
                    <Image
                      layout="fill"
                      src={urlFor(item?.image).url()}
                      alt={item?.name}
                    />
                  </div>

                  <span className="word-break">{item?.name}</span>

                  <IconArrowRight className="flex-none ml-auto text-gray-200 dark:text-white/70 group-hover:text-cardinal transition" />
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </CustomContainer>
    </Section>
  );
};
