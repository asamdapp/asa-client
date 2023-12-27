import { FC } from 'react';

import { useRouter } from 'next/router';
import Trans from 'next-translate/Trans';

import { MenuItemAbout, MenuItemServices } from '..';

interface IProps {
  services: any;
}

export const Menu: FC<IProps> = ({ services }): JSX.Element => {
  const { locale } = useRouter();

  return (
    <>
      <ul className="relative h-full flex items-center gap-3 flex-col xxl:flex-row xxl:text-white text-downriver">
        <MenuItemAbout />
        <MenuItemServices services={services} />

        <a
          href={`${locale === 'ru' ? '/' + locale + '/' : '/'}languages`}
          className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2"
        >
          <Trans i18nKey={'common:languages_of_translation'} />
        </a>

        {/* <Link href={{ pathname: '/languages' }} passHref locale={locale}>
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:languages_of_translation'} />
          </a>
        </Link>*/}

        <a
          href={`${locale === 'ru' ? '/' + locale + '/' : '/'}faq`}
          className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2"
        >
          <Trans i18nKey={'common:faq'} />
        </a>

        {/*<Link
          href={{
            pathname: '/faq',
          }}
          passHref
          locale={locale}
        >
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:faq'} />
          </a>
        </Link>*/}

        <a
          href={`${locale === 'ru' ? '/' + locale + '/' : '/'}contact`}
          className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2"
        >
          <Trans i18nKey={'common:contacts'} />
        </a>

        {/* <Link
          href={{
            pathname: '/contact',
          }}
          passHref
          locale={locale}
        >
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:contacts'} />
          </a>
        </Link>*/}
      </ul>
    </>
  );
};
