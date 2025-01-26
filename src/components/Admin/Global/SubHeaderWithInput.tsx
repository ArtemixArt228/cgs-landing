import React from "react";

import * as Styled from "../../../styles/AdminPage";

import { InputWithHeader } from "../../../types/Admin/Admin.types";

const SubHeaderWithInput = ({
  header,
  inputValue,
  onChangeFunction,
  onBlurFunction,
  onInputFunction,
  name,
  placeholder,
  minRows,
  isBlog = false,
  isadminblog,
  height,
  width,
  containerWidth,
  id,
  inputStyle,
  titleStyle,
  isMetaField = false,
  iserror = false,
  errorMessage,
  maxLength,
  minLength,
  withLabel,
  isDisabled = false,
}: InputWithHeader) => {
  return (
    <div style={{ width: containerWidth }}>
      <Styled.AdminSubTitle
        style={titleStyle}
        isadminblog={isadminblog}
        isBlog={isBlog}
        lineHeight="22px"
        textAlign="left"
        size="18px"
      >
        {header}
      </Styled.AdminSubTitle>

      <Styled.AdminInputWithLabel style={{ width: width ?? "100%" }}>
        <Styled.AdminInput
          onBlur={onBlurFunction}
          iserror={iserror}
          disabled={isDisabled}
          className={isMetaField ? "metaField" : undefined}
          onInput={onInputFunction}
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeFunction}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          minRows={minRows}
          height={height}
          width={width}
          id={id}
          style={inputStyle}
          isadminblog={isadminblog}
        />
        {withLabel && <label htmlFor={id}>{withLabel}</label>}
      </Styled.AdminInputWithLabel>
      {errorMessage && iserror && (
        <Styled.AdminInputErrorMessage>
          {errorMessage}
        </Styled.AdminInputErrorMessage>
      )}
    </div>
  );
};

export default SubHeaderWithInput;
