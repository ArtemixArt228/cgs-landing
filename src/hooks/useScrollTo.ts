import { useRef, useState, useEffect, useCallback, RefObject } from "react";

declare type UseScrollReturnProp<T> = [RefObject<T>, () => void];

export const useScrollTo = <T extends Element>(): UseScrollReturnProp<T> => {
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);

  const scrollTo = useCallback(() => setShouldScrollTo(true), []);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  return [ref, scrollTo];
};
