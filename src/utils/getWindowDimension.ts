import { IWindowDimension } from "../types/Dimension.types";

export const getWindowDimension = (): IWindowDimension => {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};
