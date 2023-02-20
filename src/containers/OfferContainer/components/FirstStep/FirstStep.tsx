import React, { FC } from "react";
import { Label } from "UI";

export const FirstStep: FC = (): JSX.Element => {
  return (
    <>
      <Label>Selectează serviciile dorite</Label>

      <div className="flex flex-wrap gap-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-1/4">
            <input type="radio" id="radio" className="sr-only" />
            <label
              htmlFor="radio"
              className="
                          text-gray-700 flex items-center p-4 bg-white rounded-xl border border-gray-200
                          dark:bg-black/20
                          dark:border-gray-800 dark:text-gray-400
                        "
            >
              <span className="flex h-5 w-5 flex-none bg-gray-100 dark:bg-gray-800 rounded-full mr-3" />
              <span>Traduceri Autorizate</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
