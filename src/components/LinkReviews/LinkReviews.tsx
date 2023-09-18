import React, { FC } from 'react';
import { IconArrowRight } from '@tabler/icons';
import Trans from 'next-translate/Trans';
import { OVER_REVIEWS_COUNT } from '../../utils';

interface IProps {}

export const LinkReviews: FC<IProps> = (): JSX.Element => {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 group transition-all"
        href="https://www.google.com/maps/place/Agen%C8%9Bia+Servicii+Autorizate/@47.1399248,28.4782568,11z/data=!4m8!3m7!1s0x40c97d115e2a6899:0x2416f44a61581f7!8m2!3d47.0254233!4d28.8404693!9m1!1b1!16s%2Fg%2F11nrt3j2q4?entry=ttu"
      >
        <div className="flex items-center flex-col">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 800 800"
                className="h-4 fill-amber-300"
              >
                <path d="M438.6 41.5 529 224.3a43 43 0 0 0 32.4 23.6l201.8 29.3a43 43 0 0 1 23.9 73.5L641 493a43 43 0 0 0-12.4 38.1l34.4 201a43 43 0 0 1-62.5 45.4l-180.4-94.9a43.1 43.1 0 0 0-40.1 0l-180.5 94.9A43 43 0 0 1 137 732l34.4-201a43 43 0 0 0-12.3-38.1L13 350.7a43 43 0 0 1 23.8-73.5l201.8-29.3a43 43 0 0 0 32.5-23.6l90.2-182.8a43 43 0 0 1 77.2 0Z" />
              </svg>
            ))}

            <span className="text-xl font-semibold ml-2">5.0</span>
          </div>

          <span className="text-sm ml-2 text-white/50">
            <Trans
              i18nKey={'common:over_n_reviews'}
              values={{ n: OVER_REVIEWS_COUNT }}
            />
          </span>
        </div>

        <div className="h-10 w-10 flex-none bg-black/20 rounded-full flex items-center justify-center group-hover:bg-cardinal transition">
          <IconArrowRight />
        </div>
      </a>
    </>
  );
};
