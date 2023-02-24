import React, { FC, useContext } from "react";
import { OfferContext } from "context";
import { Button } from "UI";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";

export const FormNavigation: FC = (): JSX.Element => {
  const { step, setStep } = useContext(OfferContext);
  console.log(step);

  return (
    <div className="flex items-center pt-6 border-t border-gray-200 dark:border-gray-800 gap-6">
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
        >
          <span>Mai departe</span>
          <IconArrowRight />
        </Button>
      )}

      {step === 4 && (
        <Button className="flex justify-center items-center gap-2 w-full !max-w-full">
          <span>Trimite cererea</span>
          <IconArrowRight />
        </Button>
      )}
    </div>
  );
};
