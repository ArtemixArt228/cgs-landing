import React from "react";

import { ICalculatorStep } from "../../../types/Admin/Response.types";
import CalculatorStepItem from "./CalculatorStepItemForm";

interface ICalculatorStepsArrProps {
  arr: ICalculatorStep[];
  refetch: () => void;
  isBlockchain: boolean;
}

export const CalculatorStepsArr = ({
  arr,
  isBlockchain,
  refetch,
}: ICalculatorStepsArrProps) => {
  return (
    <>
      {arr.map((step, idx) => (
        <CalculatorStepItem
          isBlockchain={isBlockchain}
          allSteps={arr}
          step={step}
          key={idx}
          index={idx}
          refetch={refetch}
        />
      ))}
    </>
  );
};
