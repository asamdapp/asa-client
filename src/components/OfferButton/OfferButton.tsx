import React, { FC } from "react";
import { Link, useRouter } from "next-translate-routes";
import clsx from "clsx";

import styles from "../UI/Button/Button.module.scss";
import { ButtonProps } from "../UI/Button/Button.types";

interface IProps extends Omit<ButtonProps<"a">, "onClick | children"> {}

export const OfferButton: FC<IProps> = ({
  size = "normal",
  variant = "red",
  className,
  ...props
}: ButtonProps<"a">): JSX.Element => {
  const { locale } = useRouter();
  return (
    <Link href={{ pathname: "/offer" }} locale={locale} passHref {...props}>
      <button
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
        Solicită oferta
      </button>
    </Link>
  );
};
