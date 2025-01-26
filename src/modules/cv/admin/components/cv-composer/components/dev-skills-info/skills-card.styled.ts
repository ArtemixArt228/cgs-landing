import styled from "styled-components";
import themes from "../../../../../../../utils/themes";

export const FieldsWrapper = styled.div`
  width: 100%;
  border-inline: 1px solid black;
  border-bottom: 1px solid black;
  padding: 16px;
  margin-bottom: 24px;
  margin-top: -22px;
`;

export const BottomText = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  justify-content: flex-end;
`;

export const TextCounter = styled.div``;

export const CardWrapper = styled.div`
  margin-bottom: 24px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  padding-top: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 24px;
  max-width: 810px;
  width: 810px;
  flex-wrap: wrap;
`;

export const AdminCategoryNameInput = styled.input<{
  isActive?: boolean;
}>`
  height: 56px;
  border: 1px solid ${themes.primary.colors.darkGrey};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 19px;
  color: ${themes.primary.colors.primary};
  padding: 18px 14px;
  background: transparent;
  user-select: ${(props) => (props.isActive ? "none" : undefined)};
  pointer-events: ${(props) => (props.isActive ? "none" : undefined)};

  &::placeholder {
    font-size: 18px;
  }

  max-width: 265px;
  width: 265px;
`;

export const DeleteStack = styled.button`
  color: red;
  border: none;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  text-align: end;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminCategoryAddBlockWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
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
