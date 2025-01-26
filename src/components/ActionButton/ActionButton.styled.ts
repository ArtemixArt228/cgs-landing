import styled from "styled-components";
import themes from "../../utils/themes";

export interface IFontSize {
  size?: string;
  padding?: string;
}

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  font-family: ${themes.primary.font.family.namu};
  border: 1px solid ${themes.primary.colors.primary};
  cursor: pointer;
  font-weight: ${themes.primary.font.weight.heavy};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  padding: 12px 28px;
  letter-spacing: 0.1px;
  transition: all 0.3s;
  white-space: nowrap;

  img {
    transition: filter 0.1s;
  }
  &.header {
    color: ${themes.primary.colors.secondary};
    background-color: ${themes.primary.colors.primary};
    img {
      transform: rotate(0deg);
      transition: transform 0.3s ease-in-out, filter 0.3s;
    }
    &:hover {
      background-color: unset;
      color: ${themes.primary.colors.primary};
      img {
        filter: invert(100%);
        transform: rotate(-180deg);
      }
    }
  }

  &.homepage-hero,
  &.services-common,
  &.services-hero,
  &.blog-main-card {
    color: ${themes.primary.colors.jetBlack};
    background-color: ${themes.primary.colors.dropdownHover};
    border: 1px solid ${themes.primary.colors.greyAdminServices};
    &:hover {
      color: ${themes.primary.colors.grey};
      background-color: ${themes.primary.colors.jetBlack};
      border-color: ${themes.primary.colors.jetBlack};
      img {
        filter: invert(1) brightness(100);
      }
    }
  }
  &.services-pricing,
  &.homepage-success-cases,
  &.portfolio-cta {
    color: ${themes.primary.colors.secondary};
    background-color: ${themes.primary.colors.primary};
    border: 1px solid ${themes.primary.colors.primary};
    img {
      filter: invert(100%);
    }
    &:hover {
      background-color: unset;
      color: ${themes.primary.colors.primary};

      img {
        filter: brightness(100);
      }
    }
  }
  @media screen and ${themes.primary.media.maxMobile} {
    gap: 12px;
    font-size: 16px;
    line-height: 24px;
    &.header {
      padding: 12px 28px;
      gap: 8px;
      width: 100%;
    }
    &.blog-main-card {
      font-size: 14px;
      line-height: 20px;
      width: 100%;
    }
    &.homepage-success-cases {
      padding: 12px 24px;
    }
    &.portfolio-cta {
      font-size: 16px;
      line-height: 28px;
    }
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    gap: 12px;
    font-size: 18px;
    line-height: 26px;
    &.header {
      font-size: 16px;
      line-height: 24px;
      padding: 16px 28px;
      gap: 14px;
      width: 100%;
    }
    &.blog-main-card {
      font-size: 14px;
      line-height: 20px;
      width: unset;
    }
    &.homepage-success-cases {
      padding: 12px 100px;
    }
    &.portfolio-cta {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media screen and ${themes.primary.media.minBreakpoint1100} {
    gap: 12px;
    font-size: 20px;
    line-height: 26px;
    &.header {
      padding: 8px 24px;
      gap: 14px;
      font-size: 18px;
      line-height: 26px;
    }
    &.homepage-success-cases {
      padding: 12px 88px;
    }
    &.portfolio-cta {
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    padding: 16px 37.33px;
    gap: 16px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.13px;
    &.header {
      padding: 10px 24px;
      gap: 18px;
      font-size: 24px;
      line-height: 34.67px;
    }
    &.blog-main-card {
      font-size: 18px;
      line-height: 26.67px;
    }
    &.homepage-success-cases {
      padding: 16px 128px;
    }
    &.portfolio-cta {
      font-size: 22px;
      line-height: 37.33px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ${themes.primary.media.minPCFullHD} {
    width: 29.33px;
    height: 29.33px;
  }
  &.header {
    width: 16px;
    height: 16px;
    @media screen and ${themes.primary.media.minBreakpoint1100} {
      width: 32px;
      height: 32px;
    }
    @media screen and ${themes.primary.media.minPCFullHD} {
      width: 42px;
      height: 42px;
    }
  }
  &.services-hero,
  &.homepage-hero {
    @media screen and ${themes.primary.media.minPCFullHD} {
      width: 29.33px;
      height: 29.33px;
    }
  }
  &.blog-main-card {
    width: 16px;
    height: 16px;
    @media screen and ${themes.primary.media.minPCFullHD} {
      width: 22px;
      height: 22px;
    }
  }
  &.portfolio-cta {
    width: 16px;
    height: 20px;
    @media screen and ${themes.primary.media.min768Mobile} {
      width: 22px;
      height: 28px;
    }
    @media screen and ${themes.primary.media.minPCFullHD} {
      width: 29.33px;
      height: 37.33px;
    }
  }
`;
