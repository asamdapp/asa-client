import React, { FC, useContext, useEffect } from 'react';
import useSWR from 'swr';
import { useFormContext } from 'react-hook-form';

import { Label } from 'UI';
import { OfferContext } from 'context';
import { FORM_SERVICES } from '../../../../utils';
import useTranslation from 'next-translate/useTranslation';

export const FirstStep: FC = (): JSX.Element => {
  const { lang } = useTranslation();
  const { getValues, setValue, watch, resetField } = useFormContext();
  const { setCompletedSteps } = useContext(OfferContext);

  const selectedService = watch('service');

  useEffect(() => {
    if (selectedService?.id) {
      setCompletedSteps((prevState) => [...prevState, 1]);
    }
  }, [selectedService]);

  return (
    <>
      <Label>Selectează serviciul dorit</Label>

      <div className="flex flex-wrap gap-4">
        {FORM_SERVICES?.map((item: any) => (
          <div
            key={item?.id}
            className="
              flex
              text-gray-700 flex items-center
              dark:bg-black/20
              dark:border-gray-800 dark:text-gray-400
              pl-3
            "
          >
            <input
              type="radio"
              id={item?.id}
              name="service"
              onChange={() => setValue('service', item)}
              defaultChecked={getValues('service')?.id === item?.id}
              className="
                h-5 w-5 flex-none bg-gray-100 dark:bg-gray-800 rounded-full
                checked:bg-cardinal checked:ring-cardinal checked:hover:bg-cardinal checked:focus:bg-cardinal
              "
            />
            <label
              htmlFor={item?.id}
              className="flex bg-transparent -ml-8 pl-10 pr-3 py-2
              bg-white rounded-xl border border-gray-200
              cursor-pointer
              "
            >
              <span>{item?.name[lang]}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
