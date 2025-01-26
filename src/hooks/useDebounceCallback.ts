import { useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";

export const useDebounceCallback = <T extends (...args: any[]) => void>(
  callback: T
): T => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 500);
  }, []);

  return debouncedCallback as unknown as T;
};
