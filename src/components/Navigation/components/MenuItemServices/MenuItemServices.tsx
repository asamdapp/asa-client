import { Link, useRouter } from 'next-translate-routes';
import { FC } from 'react';
import useSWR from 'swr';

interface IProps {}

export const MenuItemServices: FC<IProps> = (): JSX.Element => {
  const { locale } = useRouter();
  const { data: services } = useSWR('services');

  return (
    <>
      <li className="group relative h-full flex items-center">
        <button className="text-sm text-white group-hover:bg-jelly-bean rounded-lg transition py-1 px-2">
          Services
        </button>

        <ul className="w-[220px] z-[-9999] divide-y divide-gray-100 opacity-0 transition scale-0 origin-left translate-y-0 group-hover:scale-100 group-hover:translate-y-3/4 group-hover:z-10 group-hover:opacity-100 absolute bg-white p-3 rounded-xl">
          {services?.map((item: any) => (
            <li key={item?._id} className="py-2 first:pt-0 last:pb-0">
              <Link
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
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
