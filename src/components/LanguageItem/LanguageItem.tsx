import React, { FC } from "react";

export const LanguageItem: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center text-downriver dark:text-white/50 font-medium p-3 gap-2 bg-white dark:bg-black/20 rounded-lg">
      <div className="h-8 w-12 rounded-md overflow-hidden">
        <img
          src="https://asa.md/img/flag/Flag_of_Portugal.svg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <span>Romana</span>
    </div>
  );
};
