import React, { FC } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from '../UI/Button/Button.module.scss';
import { ButtonProps } from '../UI/Button/Button.types';
import Trans from 'next-translate/Trans';

interface IProps extends Omit<ButtonProps<'a'>, 'onClick | children'> {}

export const OfferButton: FC<IProps> = ({
  size = 'normal',
  variant = 'red',
  className,
  ...props
}: ButtonProps<'a'>): JSX.Element => {
  const { locale } = useRouter();

  return (
    <a
      href={`${locale === 'ru' ? '/' + locale + '/' : '/'}offer`}
      className={clsx(
        styles.btn,
        {
          [styles.normal]: size === 'normal',
          [styles.small]: size === 'small',
        },
        {
          [styles.red]: variant === 'red',
          [styles.green]: variant === 'green',
          [styles.white]: variant === 'white',
        },
        {
          'text-sm': locale === 'ru',
        },
        className
      )}
      {...props}
    >
      <Trans i18nKey={'common:offer_button'} />
    </a>
  );
};
