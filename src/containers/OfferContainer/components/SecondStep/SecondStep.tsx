import React, { FC, useEffect } from 'react';
import Select from 'react-dropdown-select';
import useTranslation from 'next-translate/useTranslation';
import { Calendar } from 'react-date-range';
// @ts-ignore
import * as locales from 'react-date-range/dist/locale';

import { Label, TextArea } from 'UI';
import { useFormContext } from 'react-hook-form';
import useSWR from 'swr';

export const SecondStep: FC = (): JSX.Element => {
  const { lang } = useTranslation();
  const { data: languages } = useSWR('languages');

  const { getValues, setValue, watch } = useFormContext();

  const sourceLanguage = watch('source_language');
  const targetLanguage = watch('target_language');
  const date = watch('date');

  useEffect(() => {
    if (sourceLanguage?._id === targetLanguage?._id) {
      setValue('target_language', '');
    }
  }, [sourceLanguage]);

  return (
    <div className="flex gap-8 md:gap-10 lg:gap-16 sm:flex-row-reverse flex-col-reverse">
      <div className="sm:w-1/2">
        <Label isRequired className="mb-2">
          Termen livrare
        </Label>

        <Calendar
          date={date}
          onChange={(date) => setValue('date', date)}
          locale={locales[lang ?? 'ro']}
          showMonthAndYearPickers={false}
          showDateDisplay={false}
          minDate={new Date()}
          className="scale-[0.8] md:scale-100 origin-top-left"
        />
      </div>

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

        <div>
          <TextArea
            className={
              'resize-none' +
              (getValues('service')?.isServiceForLanguage ? ' h-20' : ' h-48')
            }
            isRequired={false}
            label="Comentariu"
            onChange={(event) => setValue('comment', event.target.value)}
            value={getValues('comment')}
          />
        </div>
      </div>
    </div>
  );
};
