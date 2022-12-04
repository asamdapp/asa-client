import React, { FC } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout: FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className="bg-red-100 flex flex-col min-h-screen">
      <div>Navigation</div>
      <div>{children}</div>
      <div className="mt-auto">Footer</div>
    </div>
  );
};
