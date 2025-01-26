import { Field, Form } from "formik";
import styled from "styled-components";
import themes from "../utils/themes";

export const AdminAuthPassWrapper = styled.div`
  width: 650px;
  border: 2px solid ${themes.primary.colors.black};
  border-radius: 1px;
  position: absolute;
  top: 18.78%;
  margin: 0 auto 0 auto;
  left: 0;
  right: 0;
`;

export const AdminAuthTeamLogo = styled.div`
  width: fit-content;
`;

export const AdminAuthSubHeader = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 2.42em;
  margin-bottom: 0;
  font-size: 2em;
  text-align: center;
`;

export const AdminAuthPassBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 58px;
`;

export const AdminAuthButton = styled.button`
  width: 280px;
  outline: none;
  border: none;
  padding: 17px 0;
  cursor: pointer;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.secondary};
  background: ${themes.primary.colors.black};
`;

export const AuthFormBlock = styled(Form)`
  margin: 0;
  padding: 0;
  width: 388px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthFormError = styled.h4`
  font-family: ${themes.primary.font.family.sourceCode};
  color: ${themes.primary.colors.errorText};
`;

export const AdminFormContainer = styled.div`
  padding: 0 25px;
`;

export const AdminFormHeader = styled.div`
  padding: 27px 35px 26px;
  border-bottom: 2px solid ${themes.primary.colors.black};
  background: linear-gradient(
    75.6deg,
    ${themes.primary.colors.mainGradientColor1} -9.39%,
    ${themes.primary.colors.mainGradientColor2} 110.45%
  );
`;

export const AdminFormTitleWrap = styled.div`
  padding-bottom: 17px;
  border-bottom: 2px solid ${themes.primary.colors.lightGreyBorder};
  margin-bottom: 30px;
`;

export const AdminFormField = styled(Field)`
  width: 100%;
  border: 1px solid ${themes.primary.colors.inputGrey};
  background: transparent;
  padding: 16px 14px 17px;

  font-family: ${themes.primary.font.family.namu};

  font-size: ${themes.primary.font.size.faqAnswer};
  color: ${themes.primary.colors.inputGrey};
  font-weight: ${themes.primary.font.weight.heavy};

  &:focus {
    outline: none;
  }

  &.password {
    margin-bottom: 1px;
  }
`;

export const AdminFormLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.faqAnswer};
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const AdminAuthFormContainer = styled.div`
  margin-bottom: 22px;
`;

export const AdminAuthFormError = styled.div`
  padding-top: 8px;
  color: ${themes.primary.colors.adminRed};
  font-size: 12px;
`;
