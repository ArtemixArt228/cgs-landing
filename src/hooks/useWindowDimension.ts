import { IWindowDimension } from "../types/Dimension.types";
import { useState, useEffect } from "react";
import { getWindowDimension } from "../utils/getWindowDimension";
import { debounce } from "@mui/material";
import { useDebounceCallback } from "../hooks/useDebounceCallback";

export const useWindowDimension = (debounceTime = 50): IWindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimension()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimension());

    const handleDebounceResize = debounce(handleResize, debounceTime);

    window.addEventListener("resize", handleDebounceResize);

    return () => window.removeEventListener("resize", handleDebounceResize);
  }, [debounceTime]);

  return windowDimensions;
};

export const useWinDimension = (): IWindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimension()
  );

  const handleDebounceResize = useDebounceCallback(() =>
    setWindowDimensions(getWindowDimension())
  );

  useEffect(() => {
    window.addEventListener("resize", handleDebounceResize);

    return () => window.removeEventListener("resize", handleDebounceResize);
  }, [handleDebounceResize]);

  return windowDimensions;
};
