import React, { FC } from "react";
import { useField } from "formik";
import { TextFieldProps } from "@mui/material";

import * as Styled from "./FormField.styled";

import { IFieldProps } from "../../../../types/Company.types";

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  handleChange,
  type,
}: IFieldProps) => {
  const [field, meta] = useField<string>(name);

  const configTextField: TextFieldProps = {
    ...field,
    label: label,
    type: type,
    fullWidth: true,
    variant: "standard",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <>
      <Styled.FormField {...configTextField} />
    </>
  );
};

export default TextFieldWrapper;
