import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Dropdown } from "../../../../components/ui";

import * as Styled from "./case-studies-filters.styled";

import { IPortfolioPageData } from "../../../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../../../consts/queryKeys";
import { SearchInput } from "../case-studies-search";

interface IProps {
  searchText: string;
  isSearchOpen: boolean;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchRequest: () => void;
  handleSearchClose: () => void;
  selectedIndustries: string[];
  handleChangeCategory: (name: string) => void;
  handleChangeIndustry: (industries: string[]) => void;
  category: string;
}

export const PortfolioFilters = ({
  searchText,
  handleSearchChange,
  handleSearchRequest,
  handleSearchClose,
  isSearchOpen,
  selectedIndustries,
  handleChangeCategory,
  handleChangeIndustry,
  category,
}: IProps) => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IPortfolioPageData>([
    queryKeys.getPortfolioPageData,
  ]);

  const allProjectsCategory = {
    name: "All projects",
    value: "",
  };

  const categories = [
    { ...allProjectsCategory },
    ...(data?.categories.map((item) => ({
      name: item.name,
      value: item.name,
    })) ?? []),
  ];

  return (
    <Styled.PortfolioFiltersWrapper>
      <Styled.PortfolioCategoryWrapper>
        {categories.map(({ name, value }) => (
          <Styled.PortfolioCategoryItem
            key={name}
            className={category === value ? "active" : ""}
            onClick={() => handleChangeCategory(value)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Styled.PortfolioCategoryItem>
        ))}
      </Styled.PortfolioCategoryWrapper>

      <Styled.PortfolioSearchAndIndustriesWrapper>
        <Styled.PortfolioSearchAndIndustries>
          <SearchInput
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleSearchRequest={handleSearchRequest}
            handleSearchClose={handleSearchClose}
            isSearchOpen={isSearchOpen}
          />
          <Styled.DropdownContainer>
            <Dropdown
              className="portfolio_dropdown-element"
              filters={selectedIndustries}
              setFilters={handleChangeIndustry}
              options={data?.industries ?? []}
              dropdownName="// INDUSTRY"
              isTag={true}
            />
          </Styled.DropdownContainer>
        </Styled.PortfolioSearchAndIndustries>
        {selectedIndustries.length > 0 && (
          <Styled.SelectedIndustriesWrapper>
            <Styled.SelectedIndustries>
              {selectedIndustries.length > 0 && (
                <>
                  <Styled.IndustriesClearButton
                    onClick={() => {
                      handleChangeIndustry([]);
                    }}
                  >
                    {"Clear all"}
                  </Styled.IndustriesClearButton>

                  {selectedIndustries.map((filter, index) => (
                    <Styled.PortfolioIndustryTagWrapper key={index}>
                      <Styled.PortfolioIndustryTag>
                        {filter}
                      </Styled.PortfolioIndustryTag>
                      <Styled.PortfolioIndustryTagDelete
                        onClick={() => {
                          const newIndustries = selectedIndustries.filter(
                            (filter) => filter !== selectedIndustries[index]
                          );
                          handleChangeIndustry([...newIndustries]);
                        }}
                      />
                    </Styled.PortfolioIndustryTagWrapper>
                  ))}
                </>
              )}
            </Styled.SelectedIndustries>
          </Styled.SelectedIndustriesWrapper>
        )}
      </Styled.PortfolioSearchAndIndustriesWrapper>
    </Styled.PortfolioFiltersWrapper>
  );
};
