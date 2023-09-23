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
import useTranslation from 'next-translate/useTranslation';

interface IProps {
  props: any;
}
export const FormStepper: FC<IProps> = ({ props }): JSX.Element => {
  const { t } = useTranslation();
  const { step, totalSteps } = useContext(OfferContext);
  const formMethods = useForm();

  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    const notify = () =>
      toast(<>{t('common:server_error')}</>, {
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
          data?.country_apostille_requested?.name.ro ?? ''
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
          // setIsLoading(false);
          return response.json();
        })
        .then((data) => {
          // Handle the response data here
          setCookie('thanks', true, { maxAge: 20 });
          push({
            pathname: 'thanks',
          }).then((r) => r);
        })
        .catch((error) => {
          // Handle errors here
          setIsLoading(false);
          notify();
          console.error(error);
        });
    }
  };

  return (
    <>
      <ToastContainer />

      {isLoading && (
        <div className="flex flex-col gap-3 p-5 fixed top-0 left-0 bottom-0 right-0 z-[999999] flex items-center justify-center bg-firefly/50 backdrop-blur-md">
          <svg stroke="#fff" viewBox="0 0 38 38" className="h-12 w-12">
            <g
              fill="none"
              fillRule="evenodd"
              strokeWidth="2"
              transform="translate(1 1)"
            >
              <circle cx="18" cy="18" r="18" strokeOpacity=".5" />
              <path d="M36 18C36 8 28 0 18 0">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  from="0 18 18"
                  repeatCount="indefinite"
                  to="360 18 18"
                  type="rotate"
                />
              </path>
            </g>
          </svg>

          <div className="text-center text-white font-semibold ">
            <p>{t('common:loading_message_1')}</p>
            <p>{t('common:loading_message_2')}</p>
          </div>
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
              {step === 2 && <SecondStep props={props} />}
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
