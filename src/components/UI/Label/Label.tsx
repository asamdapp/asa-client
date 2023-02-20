import React, { forwardRef } from "react";
import clsx from "clsx";

import type { ILabel } from "./Label.types";

export const Label = forwardRef<HTMLLabelElement, ILabel>(
  ({ className, children, isRequired = true, ...props }, ref) => {
    return (
      <label
        className={clsx(
          "block font-semibold text-downriver dark:text-gray-400",
          className
        )}
        {...props}
      >
        {children}
        {isRequired && <span className="pl-1 text-cardinal">*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";
