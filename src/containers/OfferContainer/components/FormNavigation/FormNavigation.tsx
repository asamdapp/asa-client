import React, { FC, useContext } from 'react';
import { OfferContext } from 'context';
import { Button } from 'UI';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { useFormContext } from 'react-hook-form';
import { isValidEmail } from '../../../../utils';
import useTranslation from 'next-translate/useTranslation';

export const FormNavigation: FC<{ isLoading?: boolean }> = ({
  isLoading,
}): JSX.Element => {
  const { t } = useTranslation();
  const { step, setStep, totalSteps } = useContext(OfferContext);
  const { watch, getValues } = useFormContext();

  // First step
  const selectedService = watch('service');
  const isCompletedFirstStep = step === 1 && selectedService?.id;

  // Second step
  const sourceLanguage = watch('source_language');
  const targetLanguage = watch('target_language');
  const date = watch('date');

  const deliveryTime = watch('delivery_time');
  const countryApostilleRequested = watch('country_apostille_requested');

  const isCompletedSecondStep =
    (step === 2 &&
      (getValues('service')?.isServiceWithDeliveryTime &&
      getValues('service')?.isServiceWithCountryApostilleRequested
        ? deliveryTime?.id && countryApostilleRequested
        : false)) ||
    (step === 2 &&
      date &&
      (getValues('service')?.isServiceForLanguage &&
      !getValues('service')?.isServiceWithCountryApostilleRequested
        ? sourceLanguage?._id && targetLanguage?._id
        : false)) ||
    (step === 2 &&
      date &&
      (getValues('service')?.isServiceForLanguage &&
      getValues('service')?.isServiceWithCountryApostilleRequested
        ? sourceLanguage?._id &&
          targetLanguage?._id &&
          countryApostilleRequested
        : false));

  // Third step
  const files = watch('files');
  const isCompletedThirdStep =
    (step === 3 && files?.length > 0) ||
    (step === 3 && selectedService?.isServiceWithoutFiles);

  // Fourth step
  const name = watch('name');
  const email = watch('email');
  const phone = watch('phone');
  const isCompletedFourthStep =
    step === 4 && name && email && phone && isValidEmail(email);

  // Fifth step
  const accepted = watch('accepted');
  const isCompletedFifthStep = step === 5 && accepted;

  const isDisabledNextButton = !(
    isCompletedFirstStep ||
    isCompletedSecondStep ||
    isCompletedThirdStep ||
    isCompletedFourthStep
  );

  return (
    <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-800 gap-6 sm:flex-row flex-col-reverse">
      {step !== 1 && (
        <Button
          type="button"
          onClick={() => {
            setStep((prevStep) =>
              selectedService?.isServiceWithoutFiles && step === 4
                ? prevStep - 2
                : prevStep - 1
            );
            window.scrollTo(0, 100);
          }}
          variant="white"
          className="flex justify-center items-center gap-2 w-full !max-w-[320px]"
        >
          <IconArrowLeft />
          <span>{t('common:prev_step')}</span>
        </Button>
      )}

      {step !== totalSteps && (
        <Button
          type="button"
          onClick={() => {
            setStep((prevStep) =>
              selectedService?.isServiceWithoutFiles && step === 2
                ? prevStep + 2
                : prevStep + 1
            );
            window.scrollTo(0, 100);
          }}
          className="flex justify-center items-center gap-2 w-full !max-w-[320px]"
          disabled={isDisabledNextButton}
        >
          <span>{t('common:next_step')}</span>
          <IconArrowRight />
        </Button>
      )}

      {step === totalSteps && (
        <Button
          type="submit"
          disabled={isLoading || !isCompletedFifthStep}
          className="flex justify-center items-center gap-2 w-full !max-w-[320px]"
        >
          <span>{t('common:send_request')}</span>
          <IconArrowRight />
        </Button>
      )}
    </div>
  );
};
