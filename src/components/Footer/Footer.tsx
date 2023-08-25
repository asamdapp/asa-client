import React, { FC } from 'react';

import { Col, Row } from 'react-grid-system';
import Trans from 'next-translate/Trans';
import { Link, useRouter } from 'next-translate-routes';
import useSWR from 'swr';

import { CustomContainer, LanguageSwitcher, Logo, Section } from 'components';

export const Footer: FC = (): JSX.Element => {
  const { locale } = useRouter();

  const { data: services } = useSWR('services');

  return (
    <div>
      <Section withGradient className="!p-5">
        <CustomContainer>
          <Row>
            <Col>
              <div>
                <div>
                  <Trans i18nKey={'common:contacts'} />
                </div>

                <ul>
                  <li>
                    <Link href={{ pathname: '/' }} passHref locale={locale}>
                      <a>item</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col>
              <div>
                <div className="mb-2">
                  <Trans i18nKey={'common:services'} />
                </div>

                <ul>
                  {services?.map((item: any) => (
                    <li key={item?._id} className="py-1 last:pb-0">
                      <Link
                        href={{
                          pathname: '/services/[serviceSlug]',
                          query: { serviceSlug: item?.slug?.current },
                        }}
                        passHref
                        locale={locale}
                      >
                        <a className="flex transition text-sm text-white/50 hover:text-white">
                          {item?.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col>
              <div>
                <div className="mb-2">
                  <Trans i18nKey="common:about" />
                </div>

                <ul>
                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/mission',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex transition text-sm text-white/50 hover:text-white">
                        <Trans i18nKey={'common:company_mission'} />
                      </a>
                    </Link>
                  </li>

                  <li className="py-1 last:pb-0">
                    <Link
                      href={{
                        pathname: '/jobs',
                      }}
                      passHref
                      locale={locale}
                    >
                      <a className="flex transition text-sm text-white/50 hover:text-white">
                        <Trans i18nKey={'common:company_jobs'} />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col>social</Col>
          </Row>
        </CustomContainer>
      </Section>

      <Section withGradient className="!p-2 border-t border-white/5">
        <CustomContainer>
          <Row>
            <Col>
              <div className="flex items-center justify-between py-2">
                <Logo />

                <div className="text-sm">
                  © 2021 Agenția Servicii Autorizate. Toate drepturile
                  rezervate.
                </div>

                <LanguageSwitcher />
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </Section>
    </div>
  );
};
