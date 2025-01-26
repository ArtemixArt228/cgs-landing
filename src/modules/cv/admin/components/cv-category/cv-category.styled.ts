import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const ContentWrapper = styled.div`
  margin-bottom: 4.1em;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;

export const AdminNewCategoryInputWrapper = styled.div`
  display: flex;
`;

export const AdminCategoryNameInput = styled.input`
  height: 56px;
  border: 1px solid ${themes.primary.colors.darkGrey};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 19px;
  color: ${themes.primary.colors.primary};
  padding: 18px 14px;
  background: transparent;

  &::placeholder {
    font-size: 18px;
  }

  &.error {
    &::placeholder {
      color: ${themes.primary.colors.adminRed};
    }
  }

  max-width: 350px;
  width: 350px;
`;

export const AdminCategoryDeleteBlockWrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 43px;
  align-items: center;
  justify-content: center;
`;

export const AdminCategoryAddBlockWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  margin: 25px;
`;

export const AdminCategoryAddBlockBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  font-family: ${themes.primary.font.family.inter};
  color: ${themes.primary.colors.darkBlue};
  background: none;
`;
