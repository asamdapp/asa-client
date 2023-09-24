import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const CustomContainer: FC<IProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <div className="container-lg padding-container" {...props}>
      {children}
    </div>
  );
};
