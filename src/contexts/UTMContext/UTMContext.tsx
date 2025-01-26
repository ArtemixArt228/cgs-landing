import React, { createContext, ReactNode, useState } from "react";
import { storeKeys } from "../../consts";
import { getItem, setItem } from "../../utils/localStorage";

export interface UTMParams {
  utm_source?: string | string[];
  utm_medium?: string | string[];
  utm_campaign?: string | string[];
  utm_term?: string | string[];
  utm_content?: string | string[];
}
export interface UTMContextProps {
  params: UTMParams;
  setParams: (params: UTMParams) => void;
}
export const UTMContext = createContext<UTMContextProps | undefined>(undefined);

interface IProps {
  children?: ReactNode;
}
export const UTMProvider = ({ children }: IProps) => {
  const [params, setParams] = useState<UTMParams>(
    () => getItem(storeKeys.utmParams) || {}
  );

  const updateParams = (newParams: UTMParams) => {
    setParams(newParams);
    setItem(storeKeys.utmParams, newParams);
  };

  return (
    <UTMContext.Provider value={{ params, setParams: updateParams }}>
      {children}
    </UTMContext.Provider>
  );
};
