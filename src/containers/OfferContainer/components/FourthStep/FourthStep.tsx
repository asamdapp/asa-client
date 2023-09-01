import React, { FC } from 'react';
import { Input, Label, TextArea } from 'UI';
import { useFormContext } from 'react-hook-form';

export const FourthStep: FC = (): JSX.Element => {
  const { getValues, setValue, register } = useFormContext();

  return (
    <>
      <div className="grid md:grid-cols-2 w-full gap-6 flex-col md:flex-row flex-wrap">
        <Input label="Nume / Prenume" {...register('name')} />
        <Input label="E-mail" type="email" {...register('email')} />
        <Input label="Telefon de contact" {...register('phone')} />

        <TextArea
          className={'resize-none'}
          isRequired={false}
          label="Comentariu"
          onChange={(event) => setValue('comment', event.target.value)}
          value={getValues('comment')}
        />
      </div>
    </>
  );
};
