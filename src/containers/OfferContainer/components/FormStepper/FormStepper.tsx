import React, { FC, useContext } from "react";
import { OfferContext } from "context";

import {
  FirstStep,
  FormNavigation,
  FourthStep,
  SecondStep,
  ThirdStep,
} from "..";

export const FormStepper: FC = (): JSX.Element => {
  const { step } = useContext(OfferContext);

  return (
    <div
      className="
        flex flex-col gap-4 bg-white rounded-xl shadow-2xl shadow-black/5 p-6
        dark:bg-black/20
      "
    >
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && <FourthStep />}
      <FormNavigation />
    </div>
  );
};
