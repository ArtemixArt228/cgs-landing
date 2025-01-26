import { useState, useEffect } from "react";

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const isClientSide = typeof window !== "undefined";
    setIsClient(isClientSide);
  }, []);

  return isClient;
};
