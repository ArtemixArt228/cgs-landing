import React, { FC } from "react";
import { useField } from "formik";
import { TextFieldProps } from "@mui/material";
import * as Styled from "../../styles/AdminAuth";
import {
  AdminAuthFormContainer,
  AdminAuthFormError,
  AdminFormContainer,
} from "../../styles/AdminAuth";

interface IFieldProps {
  name: string;
  label: string;
  handleChange: any;
  type?: string;
  placeholder: string;
  labelName: string;
  className?: string;
}

const AdminAuthFormInput: FC<IFieldProps> = ({
  name,
  label,
  handleChange,
  type,
  placeholder,
  labelName,
  className,
}: IFieldProps) => {
  const [field, meta] = useField<string>(name);

  const configTextField: TextFieldProps = {
    ...field,
    label: label,
    type: type,
    variant: "standard",
    onChange: handleChange,
    placeholder,
    className,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <Styled.AdminAuthFormContainer>
      <Styled.AdminFormLabel>{labelName}</Styled.AdminFormLabel>
      <Styled.AdminFormField {...configTextField} />
      {meta && meta.touched && meta.error && (
        <Styled.AdminAuthFormError>{meta.error}</Styled.AdminAuthFormError>
      )}
    </Styled.AdminAuthFormContainer>
  );
};

export default AdminAuthFormInput;
