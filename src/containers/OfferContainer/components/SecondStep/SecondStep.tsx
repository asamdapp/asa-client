import React, { FC, useEffect } from 'react';
import Select from 'react-dropdown-select';
import useTranslation from 'next-translate/useTranslation';
import { Calendar } from 'react-date-range';
// @ts-ignore
import * as locales from 'react-date-range/dist/locale';
import { DateTime } from 'luxon';

import { Input, Label } from 'UI';
import { useFormContext } from 'react-hook-form';
import useSWR from 'swr';
import { DELIVERY_TIME } from 'utils';

export const SecondStep: FC = (): JSX.Element => {
  const { lang } = useTranslation();
  const { data: languages } = useSWR('languages');

  const { getValues, setValue, watch, register } = useFormContext();

  const sourceLanguage = watch('source_language');
  const targetLanguage = watch('target_language');
  const date = watch('date');

  const deliveryTime = watch('delivery_time');
  const countryApostilleRequested = watch('country_apostille_requested');

  useEffect(() => {
    if (sourceLanguage?._id === targetLanguage?._id) {
      setValue('target_language', '');
    }
  }, [sourceLanguage]);

  useEffect(() => {
    if (sourceLanguage?._id === targetLanguage?._id) {
      setValue('target_language', '');
    }
  }, [sourceLanguage]);

  return (
    <div className="flex gap-8 md:gap-10 lg:gap-16 sm:flex-row-reverse flex-col-reverse">
      {!getValues('service')?.isServiceWithDeliveryTime && (
        <div className="sm:w-1/2">
          <Label isRequired className="mb-2">
            Termen livrare
          </Label>

          <Calendar
            date={
              date
                ? DateTime.fromFormat(date, 'dd.MM.yyyy').toJSDate()
                : undefined
            }
            onChange={(date) =>
              setValue('date', DateTime.fromJSDate(date).toFormat('dd.MM.yyyy'))
            }
            locale={locales[lang ?? 'ro']}
            showMonthAndYearPickers={false}
            showDateDisplay={false}
            minDate={new Date()}
            className="scale-[0.92] sm:scale-100 origin-top-left"
          />
        </div>
      )}

      <div className="flex gap-6 flex-col w-full">
        {getValues('service')?.isServiceForLanguage && (
          <>
            <div>
              <Label isRequired className="mb-2">
                Din ce limba traducem?
              </Label>

              <Select
                onChange={(values) => setValue('source_language', values[0])}
                values={sourceLanguage ? [sourceLanguage] : []}
                options={languages}
                valueField="_id"
                labelField="name"
                searchable
                searchBy="name"
              />
            </div>

            <div>
              <Label isRequired className="mb-2">
                In ce limba traducem?
              </Label>

              <Select
                onChange={(values) => setValue('target_language', values[0])}
                values={targetLanguage ? [targetLanguage] : []}
                options={languages.filter(
                  (item: any) => item._id !== sourceLanguage?._id
                )}
                valueField="_id"
                labelField="name"
                searchable
                searchBy="name"
                disabled={!sourceLanguage}
              />
            </div>
          </>
        )}

        {getValues('service')?.isServiceWithDeliveryTime && (
          <div>
            <Label isRequired className="mb-2">
              Termen livrare
            </Label>

            <Select
              onChange={(values) => setValue('delivery_time', values[0])}
              values={deliveryTime ? [deliveryTime] : []}
              options={DELIVERY_TIME}
              valueField="id"
              labelField={`name.${lang}`}
            />
          </div>
        )}

        {getValues('service')?.isServiceWithCountryApostilleRequested && (
          <Input
            isRequired
            label="Țara (pentru care se solicită apostila)"
            {...register('country_apostille_requested')}
          />
        )}
      </div>
    </div>
  );
};
