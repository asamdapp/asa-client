import { ElementType } from "react";
import clsx from "clsx";

import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const defaultElement = "button";

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  className,
  as,
  size = "normal",
  ...otherProps
}: ButtonProps<E>): JSX.Element => {
  const TagName = as || defaultElement;
  return (
    <TagName
      {...otherProps}
      className={clsx(
        styles.btn,
        {
          [styles.normal]: size === "normal",
          [styles.small]: size === "small",
        },
        className
      )}
    >
      {children}
    </TagName>
  );
};
