import React, { FC } from 'react';
import { Footer, Navigation } from 'components';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  props?: any;
}

export const MainLayout: FC<IProps> = ({ children, props }): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div>{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};
