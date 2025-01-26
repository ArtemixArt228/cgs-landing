import React, { useCallback, useEffect, useRef, useState } from "react";
import { NextRouter } from "next/router";

import { IBlogFilters } from "../types";

export const useBlogFilters = (
  router: NextRouter,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const initializeFiltersFromURL = (): IBlogFilters => ({
    tags: ((router.query.tags as string) || "").split(",").filter(Boolean),
    search: (router.query.search as string) || "",
    sortBy: (router.query.sortBy as string) || "",
  });

  const [filters, setFilters] = useState<IBlogFilters>(
    initializeFiltersFromURL
  );
  const prevFilters = useRef(filters); // To track previous filters

  const areFiltersActive = useCallback((): boolean => {
    return (
      filters.tags.length > 0 ||
      filters.search.length > 0 ||
      filters.sortBy.length > 0
    );
  }, [filters]);

  useEffect(() => {
    const searchChanged = prevFilters.current.search !== filters.search;
    const tagsChanged = prevFilters.current.tags !== filters.tags;
    const sortChanged = prevFilters.current.sortBy !== filters.sortBy;

    if (searchChanged || tagsChanged || sortChanged) {
      setCurrentPage(1);
    }

    prevFilters.current = filters;
  }, [filters, setCurrentPage]);

  return { filters, setFilters, areFiltersActive };
};
