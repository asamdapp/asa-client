import React from "react";

export interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
}
