import React, { FC } from "react";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isGradientReverse?: boolean;
  withGradient?: boolean;
  withSmallPadding?: boolean;
}

export const Section: FC<IProps> = ({
  children,
  withGradient,
  isGradientReverse,
  className,
  withSmallPadding,
  ...props
}): JSX.Element => {
  return (
    <div
      className={clsx(
        { "py-16 xl:py-28": !withSmallPadding },
        { "py-12 lg:py-16 xl:py-20": withSmallPadding },
        {
          "text-white gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver":
            withGradient,
        },
        {
          "text-white gradient-jelly-bean-to-downriver dark:gradient-downriver-to-firefly":
            withGradient && isGradientReverse,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
