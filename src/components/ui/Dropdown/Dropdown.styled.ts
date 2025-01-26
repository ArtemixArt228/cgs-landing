import styled from "styled-components";
import themes from "../../../utils/themes";

interface IDropdownTextProp {
  isSortBy?: boolean;
}

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
  cursor: url("/arrow-black.svg"), auto;
  &.blog {
    display: flex;
    flex: 1;
    @media ${themes.primary.media.min768Mobile} {
      flex: unset;
    }
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  vertical-align: middle;
  line-height: 24px;
  letter-spacing: 0.03em;
  width: 131px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 17px;
  border-radius: 10px;

  &:hover &.open {
    img {
      transform: rotate(180deg);
    }
  }

  &.blog-tag-filter,
  &.blog-sort-dropdown {
    border: 1px solid ${themes.primary.colors.celeste};
  }

  &.open {
    padding: 8px 16px 5px 17px;
    border-radius: 10px 10px 0 0;

    &.blog-tag-filter,
    &.blog-sort-dropdown {
      & .dropdown-arrow {
        transform: rotate(180deg);
      }
    }

    &.dropdown-arrow {
      transform: rotate(180deg);
    }
  }
  &.portfolio_dropdown-element {
    white-space: nowrap;
    letter-spacing: 0.3px;
    height: 40px;
    border: 1px solid ${themes.primary.colors.loaderSpinner};
    width: 176px;

    &:hover {
      box-shadow: 2px 4px ${themes.primary.colors.jetBlack};
    }

    &.open {
      border: 1px solid ${themes.primary.colors.black};
      border-bottom: none;
      border-right-width: 3px;
      box-shadow: 2px 4px ${themes.primary.colors.jetBlack};
    }

    @media ${themes.primary.media.min768Mobile} {
      width: 189px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      gap: 22px;
      width: 100%;
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 54px;
      font-size: 21.33px;
      line-height: 32px;
      padding: 10.67px 21.33px;
      gap: 21.33px;
    }
  }

  &.blog {
    height: 48px;
    padding: 0 24px;
    border-radius: 46px;
    color: ${themes.primary.colors.mutedBlueGrey};

    &.selected {
      color: ${themes.primary.colors.primary};
    }

    @media screen and ${themes.primary.media.minPCFullHD} {
      height: 64px;
    }
  }

  &.blog-tag-filter {
    width: unset;
    max-width: 178px;
    flex: 1 0 auto;
    transition: background-color 0.15s ease-out;

    @media ${themes.primary.media.min768Mobile} {
      max-width: unset;
      width: 168px;
    }
    @media ${themes.primary.media.minLaptop} {
      width: 136px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      width: 180px;
      gap: 32px;
      padding: unset;
      justify-content: center;
    }
  }

  &.blog-sort-dropdown {
    width: 100%;
    transition: background-color 0.15s ease-out;
    gap: 6px;

    @media ${themes.primary.media.maxMobile} {
      min-width: 153px;
    }

    @media ${themes.primary.media.min768Mobile} {
      min-width: 158px;
      gap: 6px;
    }

    @media ${themes.primary.media.minLaptop} {
      min-width: 170px;
      gap: 12px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      min-width: 218px;
      gap: 16px;
      justify-content: center;
    }
  }
  @media screen and ${themes.primary.media.minLaptop} {
    &.blog-sort-dropdown:hover,
    &.blog-sort-dropdown:focus,
    &.blog-tag-filter:hover,
    &.blog-tag-filter:focus {
      transition: background-color 0.15s ease-out;
      background-color: ${themes.primary.colors.dropdownHover};
    }
  }

  & > img,
  & > span {
    vertical-align: middle;
  }

  img {
    margin-left: 10px;
    transform: rotate(0deg);
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 3em;
    width: 10.91em;
    padding: 0 1em;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  background-color: ${themes.primary.colors.blogBackground};
  min-width: 156px;
  z-index: 3;
  border: 1px solid ${themes.primary.colors.primary};
  border-right: 3px solid ${themes.primary.colors.primary};
  border-bottom: 3px solid ${themes.primary.colors.primary};
  border-radius: 10px 0 10px 10px;
  display: none;
  overflow-y: auto;
  scrollbar-gutter: stable;
  max-height: 432px;

  &.blog-tag-filter {
    padding: 14px 0;
    width: 100%;
    max-width: 175px;
    top: 60px;

    @media ${themes.primary.media.min768Mobile} {
      max-width: unset;
      width: 168px;
    }
    @media ${themes.primary.media.min1440} {
      width: 136px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      width: 180px;
      top: 76px;
    }
  }

  &.blog-sort-dropdown {
    padding: 14px 0;
    width: 158px;
    top: 60px;

    @media ${themes.primary.media.min1440} {
      width: 170px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      width: 218px;
      top: 76px;
    }
  }

  &.blog-tag-filter div,
  &.blog-sort-dropdown div {
    font-size: ${themes.primary.font.size.smallestBlogTitle};
    line-height: 1.2;

    @media ${themes.primary.media.min768Mobile} {
      font-size: 14px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 21px;
    }
  }

  &.open {
    &.blog-sort-dropdown,
    &.blog-tag-filter {
      display: flex;
      flex-direction: column;
      gap: 12px;

      border: 1px solid ${themes.primary.colors.primary};
      border-radius: 16px;
    }

    &.portfolio_dropdown-element div {
      padding: 10px 20px;
    }

    &.portfolio_dropdown-element {
      display: flex;
      flex-direction: column;
      border: 1px solid ${themes.primary.colors.primary};
      box-shadow: 2px 4px ${themes.primary.colors.jetBlack};
    }

    &.blog-sort-dropdown div,
    &.blog-tag-filter div {
      border-bottom: none;
      padding: 10px 20px;
    }
  }

  &.open {
    display: block;
  }

  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: 16px;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: calc(
        clamp(
          11.2px,
          11.2px + (100vw - 1440px) * ((16 - 11.2) / (1920 - 1440)),
          16px
        )
      )
      calc(
        clamp(10px, 10px + (100vw - 1440px) * ((12 - 10) / (1920 - 1440)), 12px)
      );
    text-decoration: none;
    text-align: left;
    cursor: url("/hand.svg"), pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};

      &:last-child {
        border-radius: 10px 0 10px 10px;
      }

      &:first-child {
        border-radius: 10px 0 0;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
    &.checked {
      background-color: ${themes.primary.colors.dropdownHover};
    }
  }

  &.blog {
    left: 0;
  }

  &.portfolio_dropdown-element {
    left: -34px;
    border-radius: 10px 0 10px 10px;

    @media ${themes.primary.media.maxMobile} {
      max-height: 324px;
    }

    @media ${themes.primary.media.maxPCFullHD} {
      max-height: 340px;
      left: -24px;
    }
    div {
      &.checked {
        color: ${themes.primary.colors.darkGrey};
      }
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${themes.primary.colors.blogBackground};
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const DropdownText = styled.span<IDropdownTextProp>`
  color: inherit;
  &.blog {
    font-size: ${themes.primary.font.size.smallestBlogTitle};
    line-height: 1.5;
    text-overflow: ellipsis; /* enables ellipsis */
    white-space: nowrap; /* keeps the text in a single line */
    overflow: hidden; /* keeps the element from overflowing its parent */

    @media ${themes.primary.media.min768Mobile} {
      font-size: 14px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 21px;
    }
  }
  &.portfolio_dropdown-element {
    font-size: 16px;
    line-height: 1.2;
    text-overflow: ellipsis; /* enables ellipsis */
    white-space: nowrap; /* keeps the text in a single line */
    overflow: hidden; /* keeps the element from overflowing its parent */

    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  width: 13px;
  height: 13px;
  padding: 2.1px;
  @media ${themes.primary.media.min1440} {
    width: 15px;
    height: 15px;
    padding: 3px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 21px;
    height: 21px;
    padding: 0 3px;
    &.portfolio_dropdown-element {
      width: 29.33px;
      height: 29.33px;
      padding: 8px;
    }
  }
`;
export const SelectedOptionName = styled.p`
  margin: 0;
  padding: 0;
`;
