import React, { FC, useContext } from "react";
import { OfferContext } from "context";

import {
  FirstStep,
  FormNavigation,
  FourthStep,
  InfoStepper,
  SecondStep,
  ThirdStep,
} from "..";

export const FormStepper: FC = (): JSX.Element => {
  const { step } = useContext(OfferContext);

  return (
    <div
      className="
        flex flex-col bg-white rounded-xl shadow-2xl shadow-black/5 p-6
        dark:bg-black/20
      "
    >
      <InfoStepper />
      <div className="flex flex-col gap-4 py-6">
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
      </div>
      <FormNavigation />
    </div>
  );
};
