import { FieldAttributes } from "formik";
import React from "react";
import * as Styled from "../../../styles/AdminPage";

interface IAdminInput extends FieldAttributes<any> {
  height?: string;
  width?: string;
  isAdmin?: boolean;
  isadminblog?: boolean;
  iserror?: boolean;
  isActive?: boolean;
}
export const AdminFieldTextArea = (props: IAdminInput) => {
  return <Styled.AdminTextArea as="textarea" {...props} />;
};

export const AdminFieldInputArea = (props: IAdminInput) => {
  return <Styled.AdminTextArea as="input" {...props} />;
};

interface IAdminCheckboxInput extends FieldAttributes<any> {
  iserror?: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AdminCheckboxField = (props: IAdminCheckboxInput) => {
  const normalizedProps = {
    ...props,
    checked: !!props.checked,
  };

  return <Styled.AdminCheckboxField type="checkbox" {...normalizedProps} />;
};
