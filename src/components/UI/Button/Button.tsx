import React, { ElementType, forwardRef, Ref } from "react";
import clsx from "clsx";

import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const defaultElement = "button" as const;

export const Button = forwardRef(
  <E extends ElementType = typeof defaultElement>(
    {
      children,
      className,
      as,
      size = "normal",
      variant = "red",
      ...otherProps
    }: ButtonProps<E>,
    ref: Ref<E>
  ): JSX.Element => {
    const TagName = as || defaultElement;
    return (
      // @ts-ignore
      <TagName
        {...otherProps}
        ref={ref}
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
  }
);

Button.displayName = "Button";
