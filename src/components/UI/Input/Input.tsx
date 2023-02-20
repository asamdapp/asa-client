import React, { forwardRef, useId } from "react";
import clsx from "clsx";

import type { IInput } from "./Input.types";
import styles from "./Input.module.scss";
import { Label } from "../Label/Label";

export const Input = forwardRef<HTMLInputElement, IInput>(
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

        <input
          id={id ?? inputId}
          className={clsx(
            styles.input,
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

Input.displayName = "Input";
