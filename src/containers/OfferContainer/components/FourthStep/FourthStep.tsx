import React, { FC, useEffect, useState } from 'react';
import { Input, Label, TextArea } from 'UI';
import { useFormContext } from 'react-hook-form';

import { PhoneNumberUtil } from 'google-libphonenumber';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidEmail } from 'utils';
import useTranslation from 'next-translate/useTranslation';

function isValidPhoneNumber(phone: string, country: string) {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    return phoneUtil.isValidNumberForRegion(
      phoneUtil.parse(phone, country),
      country
    );
  } catch (error) {
    return false;
  }
}

export const FourthStep: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [isValidPhone, setIsValidPhone] = useState<boolean>();
  const { getValues, setValue, register, watch } = useFormContext();
  const [phone, setPhone] = useState<string>(getValues('phone') ?? '');

  const email = watch('email');

  const handlePhoneInputChange = (value: string, data: CountryData | {}) => {
    if ('countryCode' in data) {
      if (isValidPhoneNumber(value, data?.countryCode.toUpperCase())) {
        setPhone(value);
        setIsValidPhone(true);
      } else {
        setPhone((prevState) => prevState);
        setIsValidPhone(false);
      }
    }
  };

  useEffect(() => {
    if (phone && isValidPhone) {
      setValue('phone', phone);
    } else {
      setValue('phone', '');
    }
  }, [phone, isValidPhone]);

  return (
    <>
      <div className="grid md:grid-cols-2 w-full gap-6 flex-col md:flex-row flex-wrap">
        <Input label={t('common:name_surname')} {...register('name')} />
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
            countryCodeEditable={true}
            value={phone}
            onChange={(phone, data) => handlePhoneInputChange(phone, data)}
            isValid={isValidPhone}
          />
        </div>

        <TextArea
          className={'resize-none'}
          isRequired={false}
          label={t('common:comment')}
          onChange={(event) => setValue('comment', event.target.value)}
          value={getValues('comment')}
        />
      </div>
    </>
  );
};
