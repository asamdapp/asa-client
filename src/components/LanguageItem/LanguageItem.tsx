import React, { FC } from "react";

interface IProps {
  flag: string;
}

export const LanguageItem: FC<IProps> = ({ flag }): JSX.Element => {
  return (
    <div className="flex flex-col items-center text-downriver dark:text-white/50 font-medium gap-2 rounded-lg my-3">
      <div className="h-14 w-14 rounded-full overflow-hidden">
        <img src={flag} alt="" className="object-cover w-full h-full" />
      </div>
      <span>Нидерландский</span>
    </div>
  );
};
