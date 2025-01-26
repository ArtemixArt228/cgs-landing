import React, { useRef } from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";
import { TieUpInput } from "../../styles/Calculator/CalculatorAdmin.styled";

import { ICalculatorEmailFieldProps } from "../../types/Admin/Response.types";

const CalculatorEmailField = ({
  email,
  calculateIsClicked,
}: ICalculatorEmailFieldProps) => {
  const { handleChange, errors } = useFormikContext<{ email: string }>();
  const inputRef = useRef<HTMLInputElement>();

  const handleInputClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <Styled.EmailInputWrapper>
      <Styled.CalculatorFieldWrapper className="email">
        <Styled.LeftBlackBorder />
        <Styled.CalculatorInputFields
          className="email"
          id="input-email"
          onClick={handleInputClick}
        >
          <TieUpInput
            innerRef={inputRef}
            type="email"
            name="email"
            id={`user-email`}
            className={`email ${
              calculateIsClicked && errors["email"] ? "warn-text" : undefined
            }`}
            placeholder={email}
            onChange={handleChange}
          />
        </Styled.CalculatorInputFields>
      </Styled.CalculatorFieldWrapper>
    </Styled.EmailInputWrapper>
  );
};

export default CalculatorEmailField;
