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

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  display: flex;
  justify-content: end;
  margin-top: 32px;
  right: -35.7px;
  margin-bottom: -18px;
`;
