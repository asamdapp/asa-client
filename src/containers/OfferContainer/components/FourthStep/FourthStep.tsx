import React, { FC } from 'react';
import { Input, Label, TextArea } from 'UI';
import { useFormContext } from 'react-hook-form';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidEmail } from 'utils';
import useTranslation from 'next-translate/useTranslation';

export const FourthStep: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { getValues, setValue, register, watch } = useFormContext();
  const email = watch('email');

  return (
    <>
      <div className="grid md:grid-cols-2 w-full gap-6 flex-col md:flex-row flex-wrap">
        <Input label="Nume / Prenume" {...register('name')} />
        <Input
          className={!isValidEmail(email) ? '!border-red-500' : ''}
          label="E-mail"
          type="email"
          {...register('email')}
        />

        <div>
          <Label isRequired className="mb-2">
            {t('common:phone')}
          </Label>
          <PhoneInput
            country="md"
            countryCodeEditable={false}
            value={getValues('phone')}
            onChange={(phone) => setValue('phone', phone)}
          />
        </div>

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
