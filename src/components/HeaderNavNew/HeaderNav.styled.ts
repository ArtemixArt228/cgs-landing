import styled from "styled-components";
import themes from "../../utils/themes";

export const HeaderWrapper = styled.nav`
  padding: 0;
  height: 75px;

  div :focus-visible {
    outline: none;
  }
  @media ${themes.primary.media.min768Mobile} {
    height: 88px;
  }

  @media (min-width: 1101px) {
    height: 82px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 109px;
  }

  @media print {
    display: none;
  }
`;

export const HeaderNavContainer = styled.div<{
  isScrolled: boolean;
  withPromoSection: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  top: -1px;
  z-index: 36;
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: ${({ isScrolled, withPromoSection }) =>
    isScrolled && !withPromoSection
      ? `1px solid ${themes.primary.colors.headerBorder}`
      : "none"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 5px 15px -5px rgba(0, 0, 0, 0.35)" : "none"};
  transition: border-bottom 0.3s ease-in-out;
  padding: 14px 52px 12px;
  min-height: 82px;

  @media screen and ${themes.primary.media.maxBreakpoint1100} {
    padding: 0;
    justify-content: flex-start;
    border: none;
    min-height: 75px;
    max-height: 88px;
  }

  @media screen and ${themes.primary.media.max767Mobile} {
    max-height: 75px;
  }

  @supports (-webkit-hyphens: none) {
    @media ${themes.primary.media.maxTabletPortrait} {
      top: -1px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 18px 76px 16px 58px;
  }
`;

export const NavBarWrapper = styled.div<{
  isScrolled: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background-color: ${themes.primary.colors.blogBackground};
  z-index: 36;
  padding: 17px 21px 16px 16px;
  &.header-without-shadow {
    box-shadow: none;
  }

  @media ${themes.primary.media.min768Mobile} {
    height: 88px;
    padding: 32px 40px 32px 40px;
  }

  @media screen and (min-width: 1101px) {
    height: auto;
    padding: 0;
    width: auto;
    box-shadow: none;
  }
`;

export const LogoLinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  z-index: 36;
  height: 100%;
`;

export const HeaderSeparator = styled.div`
  height: 24px;
  border-left: 1px solid ${themes.primary.colors.comment};
  margin-left: 38px;
  margin-right: 20px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 32px;
    margin-left: 38px;
    margin-right: 26px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const ListItemNav = styled.a`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.medium};
  cursor: pointer;
  transition: 300ms;
  padding: 0 25px;
  font-size: 16px;

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.minTabletPortrait} and (max-width: 992px) {
    width: 14.5vw;
  }

  @media ${themes.primary.media.minServiceWeb} {
    width: fit-content;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    padding: 19px 37px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: ${themes.primary.colors.primary};
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: calc(100% - 48px);
  }

  &.disabled {
    cursor: default;
    opacity: 0.5;
    &:hover {
      border-right: 0;
      border-bottom: 0;
    }
  }
`;

export const NavList = styled.ul`
  margin: 0;
  display: flex;
  height: 76px;
  padding-top: 1px;
  padding-left: 0;

  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      margin-right: 0;

      & > a:nth-child(1) {
        padding: 0 43px 0 46px;
      }
    }
  }

  @media (max-width: 1600px) {
    height: 57px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }

  @media ${themes.primary.media.maxLaptop} {
    &.mobileAudit {
      & > a:nth-child(1) {
        padding-left: 44px;
        padding-right: 44px;
      }

      & > div:nth-child(2) {
        button {
          padding-left: 40px;
          padding-right: 40px;
        }
      }
    }
  }

  @media ${themes.primary.media.minTabletPortraitToMaxTabletLandScape} {
    height: 43px;
  }
`;

export const LinkText = styled.span`
  font-size: 16px;
  line-height: 19.2px;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    line-height: 26.4px;
  }
`;

export const BurgerLinkText = styled.p`
  cursor: pointer;
  margin: 0;
  padding: 18px 40px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  border-bottom: 1px solid ${themes.primary.colors.separator};

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    padding: 18px 20px;
  }
`;

export const HeaderButtonWrapper = styled.div`
  margin-left: auto;

  @media ${themes.primary.media.maxBreakpoint1100} {
    display: none;
  }
`;

export const BurgerButtonWrapper = styled.div`
  margin-top: 48px;
  margin-left: 16px;
  margin-right: 16px;
  button {
    width: 100%;
    padding: 16px 28px;
  }
`;
