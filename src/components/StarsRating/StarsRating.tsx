import React, { FC } from 'react';
import clsx from 'clsx';

interface IProps {
  rating: any;
  size?: 'small' | 'large';
}

export const StarsRating: FC<IProps> = ({
  rating,
  size = 'small',
}): JSX.Element => {
  const totalStars = 5;
  const yellowStars = Math.min(Math.max(rating, 0), totalStars);
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const starColor = i <= yellowStars ? 'fill-amber-300' : 'fill-white/20'; // Primele "rating" stele sunt galbene, restul sunt gri

    stars.push(
      <svg
        key={i}
        viewBox="0 0 800 800"
        className={clsx(starColor, {
          'h-3': size === 'small',
          'h-4': size === 'large',
        })}
      >
        <path d="M438.6 41.5 529 224.3a43 43 0 0 0 32.4 23.6l201.8 29.3a43 43 0 0 1 23.9 73.5L641 493a43 43 0 0 0-12.4 38.1l34.4 201a43 43 0 0 1-62.5 45.4l-180.4-94.9a43.1 43.1 0 0 0-40.1 0l-180.5 94.9A43 43 0 0 1 137 732l34.4-201a43 43 0 0 0-12.3-38.1L13 350.7a43 43 0 0 1 23.8-73.5l201.8-29.3a43 43 0 0 0 32.5-23.6l90.2-182.8a43 43 0 0 1 77.2 0Z" />
      </svg>
    );
  }

  return <div className="relative flex gap-1">{stars}</div>;
};
