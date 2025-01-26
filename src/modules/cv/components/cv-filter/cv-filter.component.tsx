import React, { useState, useCallback } from "react";

import * as Styles from "./cv-filter.styled";

import { ICvFilters } from "../../types";

import { useCategoryFilter } from "../../hooks";
import { useDebouncedSearch } from "../../../../hooks/use-debounced-search.hook";

interface ICvFilterProps {
  categories: string[];
  filters: ICvFilters;
  setFilters: (filters: (prevFilters: ICvFilters) => ICvFilters) => void;
}

export const CvFilter: React.FC<ICvFilterProps> = ({
  categories,
  filters,
  setFilters,
}) => {
  const [search, setSearch] = useState(filters.search);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const { setCategory } = useCategoryFilter(setFilters);
  useDebouncedSearch<ICvFilters>(search, setFilters);

  const handleCategoryClick = useCallback(
    async (index: number, name: string) => {
      setActiveCategory(index);
      await setCategory(name.charAt(0).toUpperCase() + name.slice(1));
    },
    [setCategory]
  );

  return (
    <Styles.SettingsBlock>
      <Styles.CategoryWrapper>
        {categories.map((name, i) => (
          <Styles.CategoryItem
            key={i}
            className={i === activeCategory ? "active" : "cv"}
            onClick={() => handleCategoryClick(i, name)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Styles.CategoryItem>
        ))}
      </Styles.CategoryWrapper>

      <Styles.CvSearchWrapper>
        <Styles.CvSearchButton>
          <Styles.CvSearchIcon />
        </Styles.CvSearchButton>
        <Styles.CvSearchInput
          placeholder="Search developer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Styles.CvSearchWrapper>
    </Styles.SettingsBlock>
  );
};
