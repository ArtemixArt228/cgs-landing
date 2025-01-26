import React from "react";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

interface ICalculatorTitleField {
  text?: string;
  loader?: true;
  className?: string;
  disabled?: boolean;
}

const CalculatorTitleField = ({
  text,
  loader,
  disabled,
  className,
}: ICalculatorTitleField) => {
  const fieldWrapperClassName = `${className ? className : ""} title`;

  return (
    <Styled.CalculatorFieldWrapper className={fieldWrapperClassName}>
      <Styled.LeftBlackBorder className={className} />
      <Styled.CalculatorField className={className}>
        {!loader && text ? (
          <Styled.CalculatorInputsFieldsWrapper
            className={className}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ) : (
          <Styled.SpinnerWrapper>
            <div className="loader"></div>
          </Styled.SpinnerWrapper>
        )}
        <Styled.Disabled className={disabled ? "disabled" : undefined} />
        {className === "last" && <Styled.ResultFormGradient />}
      </Styled.CalculatorField>
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorTitleField;
