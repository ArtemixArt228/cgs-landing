import styled from "styled-components";
import themes from "../utils/themes";

export const DateInput = styled.input<{
  iserror?: boolean;
}>`
  resize: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  padding: ${themes.primary.spacing.primary};
  border: 0;
  height: ${(props) => props.height} !important;
  margin-bottom: ${themes.primary.spacing.primary};
  background: transparent;
  border: 1px solid
    ${({ iserror }) =>
      iserror
        ? themes.primary.colors.adminRed
        : themes.primary.colors.adminInputBorder};
  &:focus {
    outline: 1px solid gray;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  line-height: 22px;
  margin: 10px 0;
  text-align: left;
`;
