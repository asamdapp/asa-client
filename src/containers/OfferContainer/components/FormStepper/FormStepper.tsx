import React, { FC, useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { setCookie } from 'cookies-next';

import 'react-toastify/dist/ReactToastify.css';

import { OfferContext } from 'context';

import {
  FifthStep,
  FirstStep,
  FormNavigation,
  FourthStep,
  InfoStepper,
  SecondStep,
  ThirdStep,
} from '..';
import { useRouter } from 'next-translate-routes';

export const FormStepper: FC = (): JSX.Element => {
  const { step, totalSteps } = useContext(OfferContext);
  const formMethods = useForm();

  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    const notify = () =>
      toast('A aparut o eroare. Mai incercati inca odata.', {
        type: 'error',
      });
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

      setIsLoading(true);

      fetch('/api/offer', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setIsLoading(false);
          return response.json(); // Parse the response as JSON if applicable
        })
        .then((data) => {
          // Handle the response data here
          console.log(data);
          setCookie('thanks', true, { maxAge: 60 });
          push({
            pathname: 'thanks',
          }).then((r) => r);
        })
        .catch((error) => {
          // Handle errors here
          setIsLoading(false);
          notify();
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };

  return (
    <>
      <ToastContainer />

      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-[999999] flex items-center justify-center bg-black/20 backdrop-blur-md h-screen w-screen text-lg text-white font-bold">
          Loading...
        </div>
      )}

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

            <FormNavigation isLoading={isLoading} />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
