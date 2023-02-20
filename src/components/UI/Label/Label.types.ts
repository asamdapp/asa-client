import React from "react";

export interface ILabel
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  isRequired?: boolean;
}
