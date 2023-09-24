import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  withGradient?: boolean;
}

export const SectionTitle: FC<IProps> = ({
  children,
  className,
  withGradient,
  ...props
}): JSX.Element => {
  return (
    <div className="row">
      <div className="col-lg-8 col-xl-6">
        <h2
          {...props}
          className={clsx(
            'font-noto-serif lg:text-4xl md:text-3xl text-2xl mb-10 leading-tight',
            className,
            { 'text-downriver dark:text-white': !withGradient },
            { 'text-white': withGradient }
          )}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};
