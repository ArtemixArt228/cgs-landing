import styled from "styled-components";
import themes from "../../utils/themes";

export const DropdownButton = styled.button`
  cursor: pointer;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 100%;
  width: 100%;
  position: relative;
  font-weight: 100;
  border: 1px solid ${themes.primary.colors.comment};
  background-color: ${themes.primary.colors.blogBackground};
  box-sizing: border-box !important;
  outline: none;
  color: ${themes.primary.colors.comment};

  & path {
    color: ${themes.primary.colors.primary};
  }

  &.open {
    border-width: 1px 3px 0 1px;
    border-color: ${themes.primary.colors.primary};
    box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};

    svg {
      transform: rotate(180deg);
    }
  }

  &.selected {
    color: ${themes.primary.colors.primary};
  }

  &.fieldError {
    border-color: ${themes.primary.colors.adminRed};

    & path {
      color: ${themes.primary.colors.adminRed};
    }
  }

  svg {
    transition: 0.3s;
    position: absolute;
    right: 0;
    margin-right: 18px;
  }

  &:hover &.open {
    svg {
      transform: rotate(180deg);
    }
  }
  & > svg,
  & > span {
    vertical-align: middle;
  }

  svg {
    margin-left: 10px;
    transform: rotate(0deg);
  }

  & span {
    max-width: 96%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    span {
      font-size: 12px;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.blogBackground};
  width: 100%;
  z-index: 4;
  left: 0;
  border-width: 1px 3px 12px 0;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  box-shadow: 4px 0px 0px 0px ${themes.primary.colors.black};
  display: none;
  padding-right: 4px;
  overflow: hidden;

  &.open {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  height: 40px;
  width: 100%;
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  border: 1px solid ${themes.primary.colors.primary};
  border-width: 1px 0 0 1px;
  padding-left: 13px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  transition: 0.15s;

  &:first-child {
    border-top: 0;
  }
  &:hover {
    background-color: ${themes.primary.colors.blogDropdownHover};
  }

  &:last-child {
    border-bottom: 0;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
    height: 30px;
  }
`;

export const ScrollWrapper = styled.div`
  z-index: 2;
  overflow-y: scroll;
  height: 100%;
  max-height: 200px;
  padding-right: 4px;
  position: relative;
  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-height: 300px;
  }
`;
