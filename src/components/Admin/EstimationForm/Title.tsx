/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import * as Styled from "../../../styles/AdminPage";

interface ITitleProps {
  header: string;
  inputValue: string;
  minRows?: number;
  width?: string;
}

const Title = forwardRef(
  (
    { header, inputValue, minRows, width }: ITitleProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div>
        <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
        <Styled.AdminInput
          id={header}
          ref={ref}
          defaultValue={inputValue}
          minRows={minRows}
          width={width}
        />
      </div>
    );
  }
);

export default Title;
