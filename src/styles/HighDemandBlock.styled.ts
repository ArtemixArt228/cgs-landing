import styled from "styled-components";
import themes from "../utils/themes";

export const AdminPageHighTechnologyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminPageHighTechnologyInputWrapper = styled.div`
  display: grid;
  gap: 24px;
  width: 40%;

  input {
    border: 1px solid ${themes.primary.colors.adminInputBorder};
    background: transparent;
    flex: auto;
    height: 56px;
    padding: 17px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 14px;
  }
`;
