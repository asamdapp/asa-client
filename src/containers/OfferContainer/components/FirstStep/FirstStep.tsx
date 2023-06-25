import React, { FC, useContext, useEffect } from 'react';
import useSWR from 'swr';
import { useFormContext } from 'react-hook-form';

import { Label } from 'UI';
import { OfferContext } from 'context';

export const FirstStep: FC = (): JSX.Element => {
  const { getValues, setValue, watch } = useFormContext();
  const { setCompletedSteps } = useContext(OfferContext);

  const { data: services } = useSWR('services');

  const selectedService = watch('service');

  useEffect(() => {
    if (selectedService?._id) {
      setCompletedSteps((prevState) => [...prevState, 1]);
    }
  }, [selectedService]);

  return (
    <>
      <Label>Selectează serviciile dorite</Label>

      <div className="flex flex-wrap gap-4">
        {services.map((item: any) => (
          <div
            key={item?._id}
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
              id={item?._id}
              name="service"
              onChange={() => setValue('service', item)}
              defaultChecked={getValues('service')?._id === item?._id}
              className="
                h-5 w-5 flex-none bg-gray-100 dark:bg-gray-800 rounded-full
                checked:bg-cardinal checked:ring-cardinal checked:hover:bg-cardinal checked:focus:bg-cardinal
              "
            />
            <label
              htmlFor={item?._id}
              className="flex bg-transparent -ml-8 pl-10 pr-3 py-2
              bg-white rounded-xl border border-gray-200
              cursor-pointer
              "
            >
              <span>{item?.name}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
