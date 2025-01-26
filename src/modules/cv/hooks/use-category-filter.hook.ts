import { useRouter } from "next/router";
import { useCallback } from "react";

import { ICvFilters } from "../types";

export const useCategoryFilter = (
  setFilters: (filters: (prevFilters: ICvFilters) => ICvFilters) => void
) => {
  const router = useRouter();

  const setCategory = useCallback(
    async (category: string) => {
      setFilters((prev) => ({ ...prev, category }));
      const query = { ...router.query, category: category || undefined };

      if (!category) delete query.category;

      await router.replace({ pathname: router.pathname, query }, undefined, {
        shallow: true,
      });
    },
    [router, setFilters]
  );

  return { setCategory };
};
