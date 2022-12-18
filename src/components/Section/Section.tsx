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
        "text-cardinal text-cardinal",
        withGradient &&
          "gradient-downriver-to-atoll dark:gradient-firefly-to-downriver",
        withGradient &&
          isGradientReverse &&
          "gradient-atoll-to-downriver dark:gradient-downriver-to-firefly",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
