import React, { FC } from "react";
import { Input, Label } from "UI";

export const FourthStep: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex w-full gap-6">
        <Input label="Nume / Prenume" />
        <Input label="E-mail" />
        <Input label="Telefon de contact" />
      </div>

      <div className="flex items-center mt-2">
        <span className="flex-none flex h-5 w-5 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-md mr-2" />
        <input type="checkbox" className="sr-only" />
        <Label isRequired={false}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Label>
      </div>
    </>
  );
};
