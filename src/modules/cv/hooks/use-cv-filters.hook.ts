import React, { useEffect, useState, useRef } from "react";
import { NextRouter } from "next/router";

import { ICvFilters } from "../types";

export const useCvFilters = (
  router: NextRouter,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const initializeFiltersFromURL = (): ICvFilters => ({
    search: (router.query.search as string) || "",
    category: (router.query.category as string) || "",
  });

  const [filters, setFilters] = useState<ICvFilters>(initializeFiltersFromURL);
  const prevFilters = useRef(filters); // To track previous filters

  useEffect(() => {
    const searchChanged = prevFilters.current.search !== filters.search;
    const categoryChanged = prevFilters.current.category !== filters.category;

    if (searchChanged || categoryChanged) {
      setCurrentPage(1);
    }

    prevFilters.current = filters;
  }, [filters, setCurrentPage]);

  return { filters, setFilters };
};
