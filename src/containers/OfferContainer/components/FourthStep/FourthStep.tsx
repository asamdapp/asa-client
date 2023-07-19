import React, { FC } from 'react';
import { Input, Label } from 'UI';
import { useFormContext } from 'react-hook-form';

export const FourthStep: FC = (): JSX.Element => {
  const { register } = useFormContext();

  return (
    <>
      <div className="flex w-full gap-6 flex-col md:flex-row">
        <Input label="Nume / Prenume" {...register('name')} />
        <Input label="E-mail" type="email" {...register('email')} />
        <Input label="Telefon de contact" {...register('phone')} />
      </div>

      <div className="flex items-center mt-2">
        <span className="flex-none flex h-5 w-5 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-md mr-2" />
        <input
          type="checkbox"
          className="sr-only"
          id="accepted"
          {...register('accepted')}
        />
        <Label isRequired={false} htmlFor="accepted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Label>
      </div>
    </>
  );
};
