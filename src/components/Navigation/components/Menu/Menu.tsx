import { FC } from 'react';
import Link from 'next/link';

import { useRouter } from 'next-translate-routes';
import Trans from 'next-translate/Trans';

import { MenuItemAbout, MenuItemServices } from '..';

interface IProps {}

export const Menu: FC<IProps> = (): JSX.Element => {
  const { locale } = useRouter();

  return (
    <>
      <ul className="relative h-full flex items-center gap-3 flex-col xxl:flex-row xxl:text-white text-downriver">
        <MenuItemAbout />
        <MenuItemServices />

        <Link href={{ pathname: '/languages' }} passHref locale={locale}>
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:languages_of_translation'} />
          </a>
        </Link>

        <Link
          href={{
            pathname: '/faq',
          }}
          passHref
          locale={locale}
        >
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:faq'} />
          </a>
        </Link>

        <Link
          href={{
            pathname: '/contact',
          }}
          passHref
          locale={locale}
        >
          <a className="text-sm hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            <Trans i18nKey={'common:contacts'} />
          </a>
        </Link>
      </ul>
    </>
  );
};
