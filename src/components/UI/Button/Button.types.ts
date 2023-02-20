import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  size?: "small" | "normal";
  variant?: "red" | "green" | "white";
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;
