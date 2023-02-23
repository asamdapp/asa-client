import React, { ElementType } from "react";
import clsx from "clsx";

import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const defaultElement = "button" as const;

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  className,
  as,
  size = "normal",
  variant = "red",
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
        {
          [styles.red]: variant === "red",
          [styles.green]: variant === "green",
          [styles.white]: variant === "white",
        },
        className
      )}
    >
      {children}
    </TagName>
  );
};
