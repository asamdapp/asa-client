import React, { FC } from "react";
import { ButtonProps } from "../UI/Button/Button.types";
import { Button } from "UI";
import { Link, useRouter } from "next-translate-routes";

interface IProps extends Omit<ButtonProps<"a">, "onClick | children"> {}

export const OfferButton: FC<IProps> = ({ ...props }): JSX.Element => {
  const { locale } = useRouter();
  return (
    <Link href={{ pathname: "/offer" }} locale={locale} passHref {...props}>
      <Button as="a" {...props}>
        Solicită oferta
      </Button>
    </Link>
  );
};
