import themes from "../utils/themes";
import styled from "styled-components";
import { Field } from "formik";

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

export const DropdownBanner = styled.div`
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
  border: 1px solid ${themes.primary.colors.adminInputBorder};
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
  padding: 0 !important;
  & > span {
    display: block;
    width: 100%;
    padding: 10px 0 10px 16px;
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
