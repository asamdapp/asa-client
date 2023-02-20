import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type OfferContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const initialState: OfferContextType = {
  step: 1,
  setStep: () => {},
};

export const OfferContext = createContext(initialState);

export const OfferProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<number>(initialState.step);

  return (
    <OfferContext.Provider value={{ step, setStep }}>
      {children}
    </OfferContext.Provider>
  );
};
