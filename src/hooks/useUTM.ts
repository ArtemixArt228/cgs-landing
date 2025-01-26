import { useContext } from "react";

import { UTMContext } from "../contexts/UTMContext/UTMContext";

export const useUTM = () => {
  const context = useContext(UTMContext);
  if (!context) throw new Error("useUTM must be used within a UTMProvider");
  return context;
};
