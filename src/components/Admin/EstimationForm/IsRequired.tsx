import React from "react";
import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

export interface IIsRequiredProps {
  currentQuestion: string;
  currentPage: string;
}

const IsRequired = ({ currentQuestion, currentPage }: IIsRequiredProps) => {
  return (
    <AdminPageStyled.Box margin="0 6px 0 0" align="start">
      <Styled.TieUpInput
        type="checkbox"
        className={"admin-checkbox"}
        name={`isRequired`}
        id={`isRequiredId${currentQuestion}${currentPage}`}
      />
      <Styled.TieUpLabel
        dangerouslySetInnerHTML={{
          __html: "required",
        }}
        htmlFor={`isRequiredId${currentQuestion}${currentPage}`}
        style={{ marginLeft: "6px" }}
      />
    </AdminPageStyled.Box>
  );
};

export default IsRequired;
