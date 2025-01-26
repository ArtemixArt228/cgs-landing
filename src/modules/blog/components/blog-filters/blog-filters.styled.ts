import styled from "styled-components";
import themes from "../../../../utils/themes";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;

  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
    align-items: flex-start;
    width: 100%;
  }

  @media ${themes.primary.media.minLaptop} {
    width: 100%;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and ${themes.primary.media.min768Mobile} {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: unset;
  }

  @media screen and ${themes.primary.media.minLaptop} {
    flex-wrap: wrap;
  }
  @media screen and ${themes.primary.media.minLaptop} {
    flex-direction: row;
  }
`;

export const ChosenTagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and ${themes.primary.media.min767Mobile} {
    width: unset;
  }
  @media screen and ${themes.primary.media.minLaptop} {
    flex-direction: row;
  }
`;

export const SearchSortByContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 24px 0 54px;
  border-radius: 46px;
  border: 1px solid ${themes.primary.colors.celeste};
  outline: none;
  background-color: transparent;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.smallestBlogTitle};
  line-height: 1.2;
  color: ${themes.primary.colors.mutedBlueGrey};

  ::placeholder {
    transition: opacity 0.3s ease;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    width: 100%;
  }
  @media screen and ${themes.primary.media.minLaptop} {
    font-size: 16px;
    transition: background-color 0.15s ease-out;

    &:hover,
    &:focus {
      transition: background-color 0.15s ease-out;
      background-color: ${themes.primary.colors.dropdownHover};
    }
  }

  @media screen and ${themes.primary.media.minLaptop} {
    width: 228px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 64px;
    padding: 0 32px 0 74px;
    font-size: 21px;
    width: 304px;
  }
`;

export const Tag = styled.div`
  min-width: 120px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-radius: 46px;
  background-color: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.portfolioBg};
  font-size: 16px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 120%;

  @media ${themes.primary.media.minPCFullHD} {
    height: 64px;
    padding: 0 32px;
    font-size: 21px;
  }
`;

export const IconWrapper = styled.div`
  &.search {
    position: absolute;
    top: 16px;
    left: 24px;
  }
  &.sort {
    position: relative;
    display: flex;
    align-items: center;
  }
  width: 18px;
  height: 18px;

  @media ${themes.primary.media.minLaptop} {
    width: 20px;
    height: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.search {
      left: 32px;
      top: 21px;
    }
    width: 26px;
    height: 26px;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const ClearAllTagsButton = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 1.2;
  padding: 0;
  border: none;
  color: ${themes.primary.colors.mutedBlueGrey};
  background-color: transparent;

  @media ${themes.primary.media.minLaptop} {
    font-size: 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 21px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and ${themes.primary.media.min768Mobile} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and ${themes.primary.media.minLaptop} {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const SortAndSearchWrapper = styled.div`
  @media screen and ${themes.primary.media.maxMobile} {
    flex: 1 0 auto;
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    flex: 1 0 auto;
    max-width: 343px;
  }

  @media screen and ${themes.primary.media.minLaptop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 12px;
    max-width: unset;
    flex: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
  }
`;
