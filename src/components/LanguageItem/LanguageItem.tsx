import React, { FC } from 'react';
import Image from 'next/image';
import { urlFor } from '../../utils';
import clsx from 'clsx';

interface IProps {
  item: any;
  colorClassName?: string;
}

export const LanguageItem: FC<IProps> = ({
  item,
  colorClassName,
}): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center font-medium text-xs md:text-sm gap-2 my-3',
        {
          'text-white/70 dark:text-white/50': !colorClassName,
        },
        colorClassName
      )}
    >
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
