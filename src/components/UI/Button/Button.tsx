import { ElementType } from "react";

import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";
import clsx from "clsx";

const defaultElement = "button";

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  className,
  as,
  ...otherProps
}: ButtonProps<E>): JSX.Element => {
  const TagName = as || defaultElement;
  return (
    <TagName {...otherProps} className={clsx(styles.body, className)}>
      {children}
    </TagName>
  );
};
