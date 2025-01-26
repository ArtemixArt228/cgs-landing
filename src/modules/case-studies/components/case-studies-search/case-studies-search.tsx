import React, { useState } from "react";

import * as Styled from "./case-studies-search.styled";
import { SearchIcon } from "./components";

interface IProps {
  isSearchOpen: boolean;
  searchText: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchRequest: () => void;
  handleSearchClose: () => void;
}

export const SearchInput = ({
  searchText,
  handleSearchChange,
  handleSearchRequest,
  handleSearchClose,
  isSearchOpen,
}: IProps) => {
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchRequest();
    }
  };
  const handleSearchInputFocus = () => {
    setCloseButtonVisible(true);
  };

  const handleSearchInputBlur = () => {
    setCloseButtonVisible(false);
  };
  return (
    <Styled.PortfolioSearchWrapper>
      <Styled.PortfolioSearch isSearchOpen={isSearchOpen}>
        <Styled.PortfolioSearchButton onClick={handleSearchRequest}>
          <Styled.PortfolioSearchIcon isSearchOpen={isSearchOpen}>
            <SearchIcon currentColor />
          </Styled.PortfolioSearchIcon>
        </Styled.PortfolioSearchButton>
        <Styled.PortfolioInputWrapper isSearchOpen={isSearchOpen}>
          <input
            type="text"
            value={searchText}
            placeholder="Search work"
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
          />
        </Styled.PortfolioInputWrapper>
        <Styled.PortfolioSearchCloseButton
          isSearchOpen={isSearchOpen}
          isVisible={isCloseButtonVisible}
          onClick={handleSearchClose}
          onMouseDown={handleSearchClose}
        >
          <Styled.PortfolioSearchCloseIcon />
        </Styled.PortfolioSearchCloseButton>
      </Styled.PortfolioSearch>
    </Styled.PortfolioSearchWrapper>
  );
};
