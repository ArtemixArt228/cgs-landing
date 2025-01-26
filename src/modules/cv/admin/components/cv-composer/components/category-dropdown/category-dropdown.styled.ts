import styled from "styled-components";
import themes from "../../../../../../../utils/themes";

export const DropdownWrapper = styled.div`
  margin-bottom: 24px;
`;

export const DropdownButton = styled.div<{ iserror?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  width: 347px;
  height: 56px;
  color: #8f8e93;
  text-align: left;
  padding: 18px 14px;
  box-sizing: border-box;
  border: 1px solid ${({ iserror }) => (iserror ? "red" : "#8F8E93")};
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.03em;

  &.categoryText {
    color: #000;
  }

  &.open img {
    transform: rotate(180deg);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  min-width: 347px;
  max-height: 236px;
  overflow-y: scroll;
  ms-overflow-y: scroll;
  z-index: 10;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  display: none;
  &.open {
    display: block;
  }
  div {
    background-color: ${themes.primary.colors.blogBackground};
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;
