import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export type OfferContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  completedSteps: number[];
  setCompletedSteps: Dispatch<SetStateAction<number[]>>;
};

const initialState: OfferContextType = {
  step: 1,
  setStep: () => {},
  completedSteps: [],
  setCompletedSteps: () => {},
};

export const OfferContext = createContext(initialState);

export const OfferProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<number>(initialState.step);
  const [completedSteps, setCompletedSteps] = useState<number[]>(
    initialState.completedSteps
  );

  return (
    <OfferContext.Provider
      value={{ step, setStep, completedSteps, setCompletedSteps }}
    >
      {children}
    </OfferContext.Provider>
  );
};
