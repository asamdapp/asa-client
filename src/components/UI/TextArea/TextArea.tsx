import React, { forwardRef, useId } from "react";
import clsx from "clsx";

import type { ITextArea } from "./TextArea.types";
import styles from "./TextArea.module.scss";
import { Label } from "UI";

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  (
    { className, wrapperClassName, id, label, isRequired = true, ...props },
    ref
  ) => {
    const inputId = useId();
    return (
      <div className={clsx("flex flex-col w-full", wrapperClassName)}>
        {label && (
          <Label
            htmlFor={id ?? inputId}
            isRequired={isRequired}
            className="mb-2"
          >
            {label}
          </Label>
        )}

        <textarea
          id={id ?? inputId}
          className={clsx(
            styles.textarea,
            "dark:text-white dark:border-gray-800",
            className
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
