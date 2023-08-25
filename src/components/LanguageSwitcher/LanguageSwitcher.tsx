import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LANGUAGES } from 'utils';

import flagOfMoldovaImage from 'assets/images/flags/Flag_of_Moldova.svg';
import flagOfRussiaImage from 'assets/images/flags/Flag_of_Russia.svg';

export const LanguageSwitcher = () => {
  const { locale } = useRouter();

  return (
    <Link
      href="/"
      locale={locale === LANGUAGES.RU ? LANGUAGES.RO : LANGUAGES.RU}
      shallow={false}
    >
      <a className="group bg-black/10 sm:bg-transparent sm:hover:bg-transparent flex-none rounded-md hover:bg-black/20 transition flex items-center flex-none sm:flex-row flex-col-reverse justify-center sm:max-w-fit w-[44px] h-[44px] sm:w-auto sm:h-auto">
        <span className="sm:block hidden mr-2 uppercase text-xs font-medium text-white">
          {locale === LANGUAGES.RU ? 'ROM' : 'РУС'}
        </span>
        <div className="relative flex items-center group-hover:scale-105 transition">
          <Image
            src={
              locale === LANGUAGES.RU ? flagOfMoldovaImage : flagOfRussiaImage
            }
            alt="flag lang"
            height={18}
            width={24}
          />
        </div>
      </a>
    </Link>
  );
};
