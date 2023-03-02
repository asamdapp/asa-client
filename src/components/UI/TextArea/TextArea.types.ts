import React from "react";

export interface ITextArea
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
}
