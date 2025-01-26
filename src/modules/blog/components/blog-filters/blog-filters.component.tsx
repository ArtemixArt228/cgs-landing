import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { ChosenTags } from "./components";
import { Dropdown } from "../../../../components/ui";

import * as Styled from "./blog-filters.styled";

import { IBlogFilters } from "../../types";

import { useDebouncedSearch } from "../../../../hooks/use-debounced-search.hook";

import searchIcon from "../../../../../public/BlogDecorations/Search.svg";
import sortIcon from "../../../../../public/BlogDecorations/Sort.svg";

interface IBlogFilterProps {
  filters: IBlogFilters;
  setFilters: (filters: (prevFilters: IBlogFilters) => IBlogFilters) => void;
  tags: string[] | undefined;
  sortOptions: string[] | undefined;
}

export const BlogFilters = ({
  filters,
  setFilters,
  tags,
  sortOptions,
}: IBlogFilterProps) => {
  const router = useRouter();

  const [search, setSearch] = useState(filters.search);
  const [tagsAvailableOptions] = useState(tags ?? []);
  const [sortAvailableOptions] = useState(
    sortOptions?.filter((option) => option !== "Top rated") ?? []
  );

  const isDesktop = useMediaQuery("(min-width:1200px)");

  useDebouncedSearch<IBlogFilters>(search, setFilters);

  const setTags = useCallback(
    async (tags: string[]) => {
      setFilters((prevFilters) => ({ ...prevFilters, tags }));

      const query = {
        ...router.query,
        tags: tags.length > 0 ? tags.join(",") : undefined,
      };

      if (tags.length === 0) {
        delete query.tags;
      }

      await router.replace(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        { shallow: true }
      );
    },
    [router, setFilters]
  );

  const handleDeleteTag = useCallback(
    async (index: number) => {
      const newTags = filters.tags.filter((_, i) => i !== index);

      setFilters((prevFilters) => ({ ...prevFilters, tags: newTags }));

      const query = {
        ...router.query,
        tags: newTags.length > 0 ? newTags.join(",") : undefined,
      };

      if (newTags.length === 0) {
        delete query.tags;
      }

      await router.replace(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        { shallow: true }
      );
    },
    [filters.tags, router, setFilters]
  );

  const setSorting = useCallback(
    async (sortBy: string[]) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortBy: sortBy[1] ?? "",
      }));

      const query = { ...router.query, sortBy: sortBy[1] ?? undefined };

      if (!sortBy[1]) {
        delete (query as { sortBy?: string }).sortBy;
      }

      await router.replace(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        { shallow: true }
      );
    },
    [router, setFilters]
  );

  const deleteAllTags = async () => {
    setFilters((prevFilters) => ({ ...prevFilters, tags: [] }));

    await router.replace(
      {
        pathname: router.pathname,
        query: {},
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Styled.FiltersContainer>
      <Styled.FiltersWrapper>
        <Styled.SortAndSearchWrapper>
          {isDesktop && (
            <Styled.SearchSortByContainer>
              <Dropdown
                filters={[filters.sortBy]}
                className="blog blog-sort-dropdown"
                setFilters={setSorting}
                options={sortAvailableOptions}
                dropdownName={filters.sortBy ? filters.sortBy : "Sort by"}
                icon={
                  <Styled.IconWrapper className="sort">
                    <Image src={sortIcon} alt="sort by icon" layout="fill" />
                  </Styled.IconWrapper>
                }
              />
            </Styled.SearchSortByContainer>
          )}
          <Styled.SearchInputWrapper>
            <Styled.IconWrapper className="search">
              <Image src={searchIcon} alt="search" layout="fill" />
            </Styled.IconWrapper>
            <Styled.SearchInput
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Styled.SearchInputWrapper>
        </Styled.SortAndSearchWrapper>
        <Styled.TagsContainer>
          <Dropdown
            filters={filters.tags}
            className="blog blog-tag-filter"
            setFilters={setTags}
            options={tagsAvailableOptions}
            dropdownName="#Tags"
            prefix={"#"}
            isTag={true}
          />
          {isDesktop && (
            <ChosenTags
              filters={filters.tags}
              deleteAllTags={deleteAllTags}
              handleDeleteTag={handleDeleteTag}
            />
          )}
          {!isDesktop && (
            <Styled.SearchSortByContainer>
              <Dropdown
                filters={[filters.sortBy]}
                className="blog blog-sort-dropdown"
                setFilters={setSorting}
                options={sortAvailableOptions}
                dropdownName={filters.sortBy ? filters.sortBy : "Sort by"}
                icon={
                  <Styled.IconWrapper className="sort">
                    <Image layout="fill" src={sortIcon} alt="sort by icon" />
                  </Styled.IconWrapper>
                }
              />
            </Styled.SearchSortByContainer>
          )}
        </Styled.TagsContainer>
      </Styled.FiltersWrapper>
      {!isDesktop && (
        <ChosenTags
          filters={filters.tags}
          deleteAllTags={deleteAllTags}
          handleDeleteTag={handleDeleteTag}
        />
      )}
    </Styled.FiltersContainer>
  );
};
