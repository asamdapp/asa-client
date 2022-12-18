import React, { FC } from "react";
import { Footer } from "components";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout: FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-zircon dark:bg-firefly">
      <div>Navigation</div>
      <div>{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};
