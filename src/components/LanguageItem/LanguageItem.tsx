import React, { FC } from 'react';
import Image from 'next/image';
import { urlFor } from '../../utils';

interface IProps {
  item: any;
}

export const LanguageItem: FC<IProps> = ({ item }): JSX.Element => {
  return (
    <div className="flex flex-col items-center font-medium text-xs md:text-sm text-white/70 dark:text-white/50 gap-2 my-3">
      <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
        <Image
          src={urlFor(item?.flag).url()}
          alt={item?.name}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-xl"
        />
      </div>
      <span>{item?.name}</span>
    </div>
  );
};
