import styled from "styled-components";
import themes from "../../../../utils/themes";
import LightExitIcon from "/public/Portfolio/LightExitIcon.svg";

export const PortfolioFiltersWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    gap: 30px;
  }
  @media ${themes.primary.media.min768Mobile} {
    flex-direction: column-reverse;
    gap: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 12px;
`;

export const PortfolioCategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 21.33px;
  }

  @media ${themes.primary.media.onlyTablet} {
    width: 100%;
    justify-content: space-between;
  }
`;

interface IPortfolioCategoryItem {
  blockWidth?: string;
  blockHeight?: string;
}

export const PortfolioCategoryItem = styled.div<IPortfolioCategoryItem>`
  font-family: ${themes.primary.font.family.namu};
  height: ${({ blockHeight }) => blockHeight || "48px"};
  width: ${({ blockWidth }) => blockWidth || "auto"};
  white-space: nowrap;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  padding: 12px 20px;
  border: 1px solid black;
  background: transparent;
  line-height: 24px;

  &:hover {
    transition: 0.15s ease-out;
    border-right-width: 2.5px;
    border-bottom-width: 4.5px;
  }

  &.active {
    transition: all 0.2s ease-in-out;
    border: 1px solid #5869dd;
    background-color: #5869dd;
    color: #f1efed;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    padding: 12px 22px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 16px 26.67px;
    font-size: 20px;
    line-height: 32px;
    height: 64px;
  }
`;

export const PortfolioSearchAndIndustriesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    max-width: 100%;
    width: 100%;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    max-width: 698px;
    width: unset;
  }
`;

export const PortfolioSearchAndIndustries = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    gap: 30px;
  }
  @media ${themes.primary.media.min768Mobile} {
    flex-direction: row;
    gap: 16px;
    align-items: flex-end;
    width: 100%;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: unset;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 21.33px;
  }
`;

interface IPortfolioIndustryTag {
  isArticlePage?: boolean;
}

export const PortfolioIndustryTagWrapper = styled.button<IPortfolioIndustryTag>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1efed;
  background-color: ${themes.primary.colors.darkBlue};
  border-radius: 4px;
  padding: 8px 10px;
  line-height: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  z-index: 1;
  column-gap: 10px;

  span {
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) =>
      props.isArticlePage && themes.primary.colors.hoveredBlogTag};
    cursor: ${(props) => props.isArticlePage && "pointer"};
  }
`;

export const PortfolioIndustryTag = styled.div`
  white-space: nowrap;
`;

export const PortfolioIndustryTagDelete = styled.span`
  background-image: url(${LightExitIcon.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  height: 16px;
  width: 16px;
`;

export const SelectedIndustries = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const SelectedIndustriesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const IndustriesClearButton = styled.button`
  order: 0;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;
  color: #8f8e93;
  border: none;
  padding: 8px 10px;
  white-space: nowrap;

  &:hover {
    color: black;
  }
`;
