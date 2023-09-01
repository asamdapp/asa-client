import { Link, useRouter } from 'next-translate-routes';
import { FC } from 'react';
import Trans from 'next-translate/Trans';

interface IProps {}

export const MenuItemAbout: FC<IProps> = (): JSX.Element => {
  const { locale } = useRouter();

  return (
    <>
      <li className="group relative h-full flex items-center xxl:flex-row flex-col">
        <button
          type="button"
          className="flex items-center gap-3 text-sm xxl:group-hover:bg-jelly-bean rounded-lg transition py-1 px-2"
        >
          <span>
            <Trans i18nKey="common:about" />
          </span>
          <svg
            viewBox="0 0 20 12"
            className="w-2.5 fill-white hidden xxl:block"
          >
            <path d="M.94.94a1.5 1.5 0 0 1 2.12 0L10 7.878l6.94-6.94a1.5 1.5 0 0 1 2.12 2.122l-8 8a1.5 1.5 0 0 1-2.12 0l-8-8a1.5 1.5 0 0 1 0-2.122Z" />
          </svg>
        </button>

        <ul
          className="
            w-[220px] xxl:z-[-9999]
            divide-y divide-gray-100
            xxl:opacity-0 transition
            xxl:scale-0 xxl:origin-left
            xxl:translate-y-0 group-hover:scale-100
            group-hover:xxl:translate-y-3/4 group-hover:z-10
            group-hover:opacity-100 xxl:absolute bg-white p-3 rounded-xl
          "
        >
          <li className="py-2 first:pt-0 last:pb-0">
            <Link
              href={{
                pathname: '/mission',
              }}
              passHref
              locale={locale}
            >
              <a className="flex transition text-sm text-downriver hover:text-cardinal">
                <Trans i18nKey={'common:company_mission'} />
              </a>
            </Link>
          </li>

          <li className="py-2 first:pt-0 last:pb-0">
            <Link
              href={{
                pathname: '/jobs',
              }}
              passHref
              locale={locale}
            >
              <a className="flex transition text-sm text-downriver hover:text-cardinal">
                <Trans i18nKey={'common:company_jobs'} />
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};
