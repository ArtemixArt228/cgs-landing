import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import useDebounce from "./useDebounce";

export const useDebouncedSearch = <T>(
  search: string,
  setFilters: (filters: (prev: T) => T) => void
) => {
  const router = useRouter();
  const debouncedSearch = useDebounce(search, 1500);
  const searchRef = useRef(search);

  useEffect(() => {
    if (searchRef.current !== search) {
      searchRef.current = search;
      return;
    }

    setFilters((prev) => ({ ...prev, search: debouncedSearch }));
    const query = { ...router.query, search: debouncedSearch || undefined };

    if (!debouncedSearch) delete query.search;

    if (router.query.search !== query.search) {
      router.replace({ pathname: router.pathname, query }, undefined, {
        shallow: true,
      });
    }
  }, [debouncedSearch, setFilters, router, search]);

  return debouncedSearch;
};
