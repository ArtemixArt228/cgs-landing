import { useFormikContext } from "formik";
import React from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

import {
  ICalculatorStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";
import CalculatorTieUpInputItem from "./CalculatorInputItem";
import CalculatorTieUpDropdown from "./CalculatorTieUpDropdown";

interface ICalculatorTieUpItemProps {
  data: ICalculatorStep[];
  current: number;
}

const CalculatorTieUpItem = ({ data, current }: ICalculatorTieUpItemProps) => {
  const { values } = useFormikContext<ICalculatorStep>();

  return (
    <Styled.TieUpContainer>
      <CalculatorTieUpDropdown header="Steps" data={data} current={current} />
      <Styled.StepSubTitle>Tie up question</Styled.StepSubTitle>
      <Styled.SubStepSubtitle>If an answer is selected:</Styled.SubStepSubtitle>
      <Styled.InputsWrapper>
        {values.tieUpSteps.length > 0 &&
          typeof values.tieUpSteps[0].number === "number" &&
          typeof data[values.tieUpSteps[0].number].options !== "string" &&
          (data[values.tieUpSteps[0].number].options as IStepOptions[]).map(
            (el, ind) => (
              <CalculatorTieUpInputItem
                type={data[values.tieUpSteps[0].number as number].type}
                tieUp
                ind={ind}
                item={el}
                key={ind}
              />
            )
          )}
      </Styled.InputsWrapper>
    </Styled.TieUpContainer>
  );
};

export default CalculatorTieUpItem;
