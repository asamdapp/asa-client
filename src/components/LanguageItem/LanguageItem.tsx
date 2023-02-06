import React, { FC } from "react";

interface IProps {
  flag: string;
}

export const LanguageItem: FC<IProps> = ({ flag }): JSX.Element => {
  return (
    <div className="flex flex-col items-center font-medium text-xs md:text-sm text-white/70 dark:text-white/50 gap-2 my-3">
      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
        <img src={flag} alt="" className="object-cover w-full h-full" />
      </div>
      <span>Нидерландский</span>
    </div>
  );
};
