import React from "react";

import * as Styled from "../../styles/Inputs";
import * as StyledAdminPage from "../../styles/AdminPage";
export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  header: string;
  iserror?: boolean;
  errorMessage?: string;
}
const InputWithType = (props: IInputProps) => {
  return (
    <>
      <Styled.SubTitle>{props.header}</Styled.SubTitle>
      <Styled.DateInput iserror={props.iserror} {...props} />
      {props.errorMessage && props.iserror && (
        <StyledAdminPage.AdminInputErrorMessage>
          {props.errorMessage}
        </StyledAdminPage.AdminInputErrorMessage>
      )}
    </>
  );
};

export default InputWithType;
