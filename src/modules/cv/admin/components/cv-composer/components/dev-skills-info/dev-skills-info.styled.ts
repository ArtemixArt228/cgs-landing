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

export const SortButton = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  font-family: ${themes.primary.font.family.inter};
  color: ${(props) =>
    props.isActive ? "red" : themes.primary.colors.darkBlue};
  margin-top: 10px;
  font-size: 16px;
`;
