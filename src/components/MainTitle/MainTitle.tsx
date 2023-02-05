import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}

export const MainTitle: FC<IProps> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <h1
      {...props}
      className={clsx(
        "font-noto-serif text-3xl sm:text-4xl md:text-5xl leading-tight border-l-4 pl-3 border-cardinal",
        className
      )}
    >
      {children}
    </h1>
  );
};
