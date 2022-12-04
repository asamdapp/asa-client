import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;
