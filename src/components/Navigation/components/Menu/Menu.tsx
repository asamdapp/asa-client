import Link from 'next/link';
import { FC } from 'react';

import { MenuItemAbout, MenuItemServices } from '..';
import { useRouter } from 'next-translate-routes';

interface IProps {}

export const Menu: FC<IProps> = (): JSX.Element => {
  const { locale } = useRouter();

  return (
    <>
      <ul className="relative h-full flex items-center gap-3">
        <MenuItemAbout />
        <MenuItemServices />

        <Link
          href={{
            pathname: '/services/[serviceSlug]',
          }}
          passHref
          locale={locale}
        >
          <a className="text-sm text-white hover:bg-jelly-bean rounded-lg transition py-1 px-2">
            Despre noi
          </a>
        </Link>
      </ul>
    </>
  );
};
