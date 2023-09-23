import React, { FC, useEffect, useState } from 'react';
import { IconArrowRight } from '@tabler/icons';
import Trans from 'next-translate/Trans';
import { OVER_REVIEWS_COUNT } from '../../utils';
import { StarsRating } from '../StarsRating/StarsRating';
import { getGoogleReviewsUserRating } from '../../services';

interface IProps {}

export const LinkReviews: FC<IProps> = (): JSX.Element => {
  const [googleReviews, setGoogleReviews] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getGoogleReviewsUserRating();
      setGoogleReviews(result);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(googleReviews);
  return (
    <>
      {googleReviews ? (
        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 group transition-all"
          href="https://www.google.com/maps/place/Agen%C8%9Bia+Servicii+Autorizate/@47.1399248,28.4782568,11z/data=!4m8!3m7!1s0x40c97d115e2a6899:0x2416f44a61581f7!8m2!3d47.0254233!4d28.8404693!9m1!1b1!16s%2Fg%2F11nrt3j2q4?entry=ttu"
        >
          <div className="flex items-center flex-col">
            <div className="flex items-center gap-2">
              <StarsRating
                rating={Math.ceil(googleReviews?.rating ?? 5)}
                size="large"
              />

              <span className="text-xl font-semibold ml-2">
                {googleReviews?.rating ?? 5}
              </span>
            </div>

            <span className="text-sm ml-2 text-white/50">
              <Trans
                i18nKey={'common:total_n_reviews'}
                values={{
                  n: googleReviews?.user_ratings_total ?? OVER_REVIEWS_COUNT,
                }}
              />
            </span>
          </div>

          <div className="h-10 w-10 flex-none bg-black/20 rounded-full flex items-center justify-center group-hover:bg-cardinal transition">
            <IconArrowRight />
          </div>
        </a>
      ) : (
        <div className="w-[200px] h-[60px] flex-none" />
      )}
    </>
  );
};
