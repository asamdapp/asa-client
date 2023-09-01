import React, { FC, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { OfferContext } from 'context';

import {
  FirstStep,
  FormNavigation,
  FourthStep,
  InfoStepper,
  SecondStep,
  ThirdStep,
  FifthStep,
} from '..';

export const FormStepper: FC = (): JSX.Element => {
  const { step, totalSteps } = useContext(OfferContext);
  const formMethods = useForm();

  const onSubmit = (data: any) => {
    if (step === totalSteps) {
      const formData = new FormData();

      formData.append('name', data?.name);
      formData.append('email', data?.email);
      formData.append('phone', data?.phone);
      formData.append('comment', data?.comment ?? '');

      formData.append('service', data?.service?.name.ro);

      if (data?.service?.isServiceForLanguage) {
        formData.append('source_language', data?.source_language?.name ?? '');
        formData.append('target_language', data?.target_language?.name ?? '');
        formData.append('date', data?.date ?? '');
      }

      if (data?.service?.isServiceWithDeliveryTime) {
        formData.append('delivery_time', data?.delivery_time?.name.ro ?? '');
      }

      if (data?.service?.isServiceWithCountryApostilleRequested) {
        formData.append(
          'country_apostille_requested',
          data?.country_apostille_requested ?? ''
        );
      }

      if (!data?.service?.isServiceWithoutFiles) {
        if (data?.files) {
          for (let i = 0; i < data?.files.length; i++) {
            formData.append('files', data?.files[i]);
          }
        }
      }

      fetch('api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response as JSON if applicable
        })
        .then((data) => {
          // Handle the response data here
          console.log(data);
        })
        .catch((error) => {
          // Handle errors here
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div
          className="
            flex flex-col bg-white rounded-xl shadow-2xl shadow-black/5 p-4
            dark:bg-black/20
          "
        >
          <InfoStepper />

          <div className="flex flex-col gap-4">
            {step === 1 && <FirstStep />}
            {step === 2 && <SecondStep />}
            {step === 3 && <ThirdStep />}
            {step === 4 && <FourthStep />}
            {step === 5 && <FifthStep />}
          </div>

          <FormNavigation />
        </div>
      </form>
    </FormProvider>
  );
};
