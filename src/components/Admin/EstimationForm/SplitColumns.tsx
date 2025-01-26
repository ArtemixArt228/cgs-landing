import React from "react";
import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

export interface ISplitColumnsProps {
  currentQuestion: string;
  currentPage: string;
}

const SplitColumns = ({ currentQuestion, currentPage }: ISplitColumnsProps) => {
  return (
    <AdminPageStyled.Box margin="0 6px 0 0" align="start">
      <Styled.TieUpInput
        type="checkbox"
        className={"admin-checkbox"}
        name={`isSplitColumns`}
        id={`isSplitColumnsId${currentQuestion}${currentPage}`}
      />
      <Styled.TieUpLabel
        dangerouslySetInnerHTML={{
          __html: "split columns",
        }}
        htmlFor={`isSplitColumnsId${currentQuestion}${currentPage}`}
        style={{ marginLeft: "6px" }}
      />
    </AdminPageStyled.Box>
  );
};

export default SplitColumns;
