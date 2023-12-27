import { useRouter } from 'next/router';
import { FC } from 'react';
import Trans from 'next-translate/Trans';

interface IProps {}

interface IProps {
  services: any;
}

export const MenuItemServices: FC<IProps> = ({ services }): JSX.Element => {
  const { locale } = useRouter();

  return (
    <>
      <li className="group relative h-full flex items-center">
        <button
          type="button"
          className="flex items-center gap-3 text-sm group-hover:bg-jelly-bean rounded-lg transition py-1 px-2"
        >
          <span>
            <Trans i18nKey={'common:services'} />
          </span>
          <svg
            viewBox="0 0 20 12"
            className="w-2.5 fill-white hidden xxl:block"
          >
            <path d="M.94.94a1.5 1.5 0 0 1 2.12 0L10 7.878l6.94-6.94a1.5 1.5 0 0 1 2.12 2.122l-8 8a1.5 1.5 0 0 1-2.12 0l-8-8a1.5 1.5 0 0 1 0-2.122Z" />
          </svg>
        </button>

        <ul className="top-12 opacity-0 scale-0 origin-top-left group-hover:scale-100 group-hover:z-10 group-hover:opacity-100 w-[220px] z-[-9999] divide-y divide-gray-100 transition-all absolute bg-white p-3 rounded-xl">
          {services?.map((item: any) => (
            <li key={item?._id} className="py-2 first:pt-0 last:pb-0">
              <a
                href={`${locale === 'ru' ? '/' + locale + '/' : '/'}services/${
                  item?.slug?.current
                }`}
                className="flex transition text-sm text-downriver hover:text-cardinal"
              >
                {item?.name}
              </a>

              {/*<Link
                href={{
                  pathname: '/services/[serviceSlug]',
                  query: { serviceSlug: item?.slug?.current },
                }}
                passHref
                locale={locale}
              >
                <a className="flex transition text-sm text-downriver hover:text-cardinal">
                  {item?.name}
                </a>
              </Link>*/}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
