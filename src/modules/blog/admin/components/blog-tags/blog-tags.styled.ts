import styled from "styled-components";
import themes from "../../../../../utils/themes";
import { Field } from "formik";
import { TextareaAutosize } from "@mui/material";

export const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 56px;
  flex-wrap: wrap;
  row-gap: 15px;
  margin-top: 15px;
`;

export const Tag = styled.input`
  width: 243px;
  height: 56px;
  padding-left: 14px;
  display: flex;
  border: none;
  border-radius: 0;
  align-items: center;
  font-size: ${themes.primary.font.size.aboutUsCardText};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  background-color: ${themes.primary.colors.secondary};
  margin-right: 23px;
  &:focus {
    outline: 1px solid gray;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const AddTag = styled.div`
  margin-left: 10px;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${themes.primary.colors.black};
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`;

export const PlusIcon = styled.img``;

export const Minus = styled.div`
  font-size: 35px;
  font-weight: ${themes.primary.font.weight.medium};
`;

export const TagInputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 58px;
  gap: 15px;

  height: 56px;
  align-items: center;
`;

export const TagInputSubmit = styled.button`
  width: 58px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  border: 0;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: default;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HiddenField = styled(Field)`
  display: none;
  visibility: hidden;
`;

export const DropdownBanner = styled.div<{
  isError?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  width: 274.5px;
  height: 56px;
  color: ${themes.primary.colors.adminInputBorder};
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid
    ${({ isError }) =>
      isError
        ? themes.primary.colors.adminRed
        : themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.vistaco};
  letter-spacing: 0.03em;

  &.open img {
    transform: rotate(180deg);
  }
`;

export const DropdownWrapper = styled.div`
  margin-right: 20px;
`;

export const CareerInfo = styled.div`
  margin-top: 20px;
`;

export const Content = styled.div`
  position: absolute;
  min-width: 274.5px;
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
export const TagItemDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  & > span {
    display: block;
    width: 100%;
  }
  & > div:last-child {
    padding-right: 16px;
  }
`;
export const Container = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  flex-wrap: wrap;
`;

interface IAdminInput {
  height?: string;
  width?: string;
  isAdmin?: boolean;
  isadminblog?: boolean;
  iserror?: boolean;
  isActive?: boolean;
}
export const AdminInput = styled(TextareaAutosize).withConfig({
  shouldForwardProp: (prop) =>
    !["iserror", "isAdmin", "isActive", "isadminblog"].includes(prop),
})<IAdminInput>`
  resize: vertical;
  width: ${({ width }) => (width ? width : "100%")};
  border: 1px solid
    ${({ iserror }) =>
      iserror
        ? themes.primary.colors.adminRed
        : themes.primary.colors.adminInputBorder};
  background-color: ${themes.primary.colors.blogBackground};
  outline: ${({ isAdmin }) =>
    isAdmin ? `1px solid ${themes.primary.colors.comment}` : null};
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  padding: ${themes.primary.spacing.primary};
  height: ${({ height }) => height};
  line-height: 160%;

  margin-bottom: ${({ isadminblog }) =>
    isadminblog ? "0" : themes.primary.spacing.primary};

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: 1px solid gray;
  }
  &:invalid {
    border: 1px solid red;
  }

  &.withBottomButtons {
    margin-bottom: 6px;
  }
  &.tag {
    font-size: 20px;
  }

  &.smallYOffset {
    margin-bottom: 0.63em;
  }

  &.metaField {
    background-color: ${themes.primary.colors.careerBackground};
  }

  &.badgesInput {
    padding-right: 30px;
  }
`;

export const TagWrapper = styled.div`
  padding: 3px 8px 4px;
  font-size: 14px;
  line-height: 160%;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    cursor: pointer;
    margin-left: 6px;
  }
`;
