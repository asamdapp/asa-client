import React, { FC } from "react";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isGradientReverse?: boolean;
  withGradient?: boolean;
}

export const Section: FC<IProps> = ({
  children,
  withGradient,
  isGradientReverse,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={clsx(
        "py-36",
        "text-white",
        withGradient &&
          "gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver",
        withGradient &&
          isGradientReverse &&
          "gradient-jelly-bean-to-downriver dark:gradient-downriver-to-firefly",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
