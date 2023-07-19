import React, { FC, useContext } from 'react';
import { OfferContext } from 'context';
import { Button } from 'UI';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { useFormContext } from 'react-hook-form';

export const FormNavigation: FC = (): JSX.Element => {
  const { step, setStep } = useContext(OfferContext);
  const { watch, getValues } = useFormContext();

  // First step
  const selectedService = watch('service');
  const isCompletedFirstStep = step === 1 && selectedService?._id;

  // Second step
  const sourceLanguage = watch('source_language');
  const targetLanguage = watch('target_language');
  const date = watch('date');
  const comment = watch('comment');
  const isCompletedSecondStep =
    step === 2 &&
    date &&
    (getValues('service')?.isServiceForLanguage
      ? sourceLanguage?._id && targetLanguage?._id
      : true);

  // Third step
  const files = watch('files');
  const isCompletedThirdStep = step === 3 && files?.length > 0;

  // Fourth step
  const name = watch('name');
  const email = watch('email');
  const phone = watch('phone');
  const accepted = watch('accepted');
  const isCompletedFourthStep =
    step === 4 && name && email && phone && accepted;

  const isDisabledNextButton = !(
    isCompletedFirstStep ||
    isCompletedSecondStep ||
    isCompletedThirdStep
  );

  return (
    <div className="flex items-center pt-6 border-t border-gray-200 dark:border-gray-800 gap-6 sm:flex-row flex-col-reverse">
      {step !== 1 && (
        <Button
          onClick={() => setStep((prevStep) => prevStep - 1)}
          variant="white"
          className="flex justify-center items-center gap-2 w-full !max-w-full"
        >
          <IconArrowLeft />
          <span>Inapoi</span>
        </Button>
      )}

      {step !== 4 && (
        <Button
          onClick={() => setStep((prevStep) => prevStep + 1)}
          className="flex justify-center items-center gap-2 w-full !max-w-full"
          disabled={isDisabledNextButton}
        >
          <span>Mai departe</span>
          <IconArrowRight />
        </Button>
      )}

      {step === 4 && (
        <Button
          disabled={!isCompletedFourthStep}
          className="flex justify-center items-center gap-2 w-full !max-w-full"
        >
          <span>Trimite cererea</span>
          <IconArrowRight />
        </Button>
      )}
    </div>
  );
};
