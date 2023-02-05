import * as React from "react";

export type AppContextType = {
  data: any;
  setData: any;
};

const initialState: AppContextType = {
  data: [],
  setData: () => {},
};
export const AppContext = React.createContext(initialState);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState<any>([]);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
