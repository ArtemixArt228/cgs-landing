import styled from "styled-components";
import themes from "../../../../utils/themes";
import DarkExitIcon from "/public/Portfolio/DarkExitIcon.svg";

export const PortfolioSearchWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;

  @media ${themes.primary.media.min768Mobile} {
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
    max-width: 100%;
    flex: 1;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    flex: unset;
    align-items: flex-end;
    flex-direction: row;
    max-width: unset;
  }
`;

interface IPortfolioSearch {
  isSearchOpen?: boolean;
  isVisible?: boolean;
}

export const PortfolioSearch = styled.div<IPortfolioSearch>`
  position: relative;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  column-gap: 6px;
  height: 32px;
  background: transparent;
  transition: 0.5s ease-in-out;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    border-bottom: 1px solid #8f8e93;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: ${({ isSearchOpen }) => (isSearchOpen ? "100%" : "20px")};
    border-bottom: ${({ isSearchOpen }) =>
      isSearchOpen ? "1px solid #8f8e93" : "1px solid transparent"};
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: ${({ isSearchOpen }) => (isSearchOpen ? "240px" : "20px")};
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: ${({ isSearchOpen }) => (isSearchOpen ? "270px" : "29.33px")};
    height: 44px;
  }
`;
export const PortfolioInputWrapper = styled.div<IPortfolioSearch>`
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  transition: 0.5s ease-in-out;

  & input {
    font-family: ${themes.primary.font.family.namu};
    outline: none;
    width: 100%;
    font-size: 16px;
    border: none;
    background-color: transparent;
  }

  & input:active {
    border: none;
  }

  & input::placeholder {
    font-family: ${themes.primary.font.family.namu};
    color: #a9a5a4;
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    display: flex;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    display: ${({ isSearchOpen }) => (isSearchOpen ? "flex" : "none")};
    & input {
      font-size: 16px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 5px;
    & input {
      font-size: 20px;
      line-height: 42px;
    }
  }
`;

export const PortfolioSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PortfolioSearchCloseButton = styled.div<IPortfolioSearch>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  height: 100%;
  width: 20px;
  align-items: center;
  opacity: 0.5;
  transition: 0.5s ease-in-out;
  @media ${themes.primary.media.min768Mobile} {
    display: ${({ isSearchOpen }) => (isSearchOpen ? "flex" : "none")};
  }
`;

export const PortfolioSearchCloseIcon = styled.div`
  cursor: pointer;
  background-image: url(${DarkExitIcon.src});
  background-repeat: no-repeat;
  background-size: cover;
  height: 10px;
  width: 10px;
  @media ${themes.primary.media.min768Mobile} {
    height: 14px;
    width: 14px;
  }
`;

export const PortfolioSearchIcon = styled.div<IPortfolioSearch>`
  height: 20px;
  width: 20px;
  opacity: ${({ isSearchOpen }) => (isSearchOpen ? "0.4" : "1")};
  transition: 0.5s ease-in-out;

  @media ${themes.primary.media.maxMobile} {
    color: ${themes.primary.colors.darkGrey};
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 29.33px;
    width: 29.33px;
    svg {
      scale: 1.3;
    }
  }
`;
