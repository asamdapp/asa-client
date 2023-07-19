import React, { FC } from 'react';
import { Navigation } from 'components';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout: FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div>{children}</div>
      <div className="mt-auto">{/*<Footer />*/}</div>
    </div>
  );
};
