import styled, { css } from "styled-components";
import { ISlide } from "../types/Decoration.types";
import themes from "../utils/themes";
import { slideDown, slideUp } from "./Animations.styled";

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  width: max-content;
  min-width: 8.22vw;
  top: 100%;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  border: 1px solid ${themes.primary.colors.primary};
  display: none;
  padding: 14px 0;

  &.open {
    display: block;
  }
  @media ${themes.primary.media.min4K} {
    border: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
  border-bottom: 0;
  border-right: 0;
  width: fit-content;

  transition: all 0.3s;
  padding: 0 26px;

  img {
    width: 9px !important;
    height: 5px !important;
  }
  button,
  &:first-child {
    border: none;
  }
  @media ${themes.primary.media.minTabletLandScape} and ${themes.primary.media
      .maxBreakpoint1100} {
    padding: 0 16px;
  }
  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      padding: 0 42px 0 40px;
      column-gap: 10px;
      font-size: 16px;
      & > img {
        width: 9px;
        height: 5px;
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 1.3em;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
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
    width: calc(100% - 48px); // 100% minus left and right padding
  }

  &.open::after {
    width: 0;
  }
  &:hover &.open {
    border-bottom: 0 !important;
    border-right: 2px solid ${themes.primary.colors.primary} !important;
  }
  &.open {
    border-bottom: 0 !important;
    border-right: 0 solid ${themes.primary.colors.primary} !important;

    img {
      transform: rotate(180deg);
    }
  }
  &.disabled {
    cursor: default;
    &:hover {
      border-right: 0;
      border-bottom: 0;
    }
  }
  & > img,
  & > span {
    vertical-align: middle;
  }
  img {
    transform: rotate(0deg);
    margin-top: 3px;
  }
  @media (max-width: 1800px) {
    column-gap: 18px;
    font-size: 16px;
  }

  @media ${themes.primary.media.minTabletPortraitToMaxTabletLandScape} {
    font-size: 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    line-height: 26.4px;
    padding: 19px 34px;
    font-size: 22px;
    gap: 19px;
    img {
      width: 12px !important;
      height: 7px !important;
    }
  }
`;

export const Dropdown = styled.li`
  position: relative;
  display: flex;
  background-color: ${themes.primary.colors.blogBackground};
  list-style: none;
`;

export const LinkWrapper = styled.div<ISlide>`
  &.burger-dropdown {
    padding: 0 40px;
    font-size: 20px;
    line-height: 44px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    animation: ${({ ind }) =>
      css`
        ${slideUp} 300ms ${ind * 60}ms ease-in forwards
      `};
    transition: all 0.3s;

    &.open {
      transform-origin: top center;
      opacity: 0;
      animation: ${({ ind }) =>
        css`
          ${slideDown} 300ms ${ind * 60}ms ease-in forwards
        `};
    }

    &:first-of-type {
      margin-top: 10px;
    }
    &:last-of-type {
      margin-bottom: 10px;
    }

    &:hover {
      color: ${themes.primary.colors.darkBlue};
    }

    &.additional-padding {
      padding-left: 52px;
    }
    @media screen and ${themes.primary.media.maxMobile} {
      padding: 0 20px;
      font-size: 18px;
      line-height: 39px;
      &.additional-padding {
        padding-left: 32px;
      }
    }
  }
  &.web-dropdown {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.dropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }

    &.additional-padding {
      padding-left: 15px;
    }
  }

  &.ai {
    background-color: #cacfee4d;
  }
  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }
`;

export const Link = styled.a`
  &.web-dropdown {
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 10px 16px;
    height: 39px;
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 24px;
      height: 47px;
    }
  }
`;

export const DropdownLabel = styled.span`
  color: ${themes.primary.colors.darkBlue};
  white-space: pre-wrap;
`;
