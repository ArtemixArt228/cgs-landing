import React, { useState } from "react";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import CalculatorStepItemComponent from "./CalculatorStepItemComponent";

interface ICalculatorStepItemProps {
  allSteps: ICalculatorStep[];
  step: ICalculatorStep;
  index: number;
  refetch: () => void;
  isBlockchain: boolean;
}

const CalculatorStepItem = ({
  isBlockchain,
  allSteps,
  step,
  index,
  refetch,
}: ICalculatorStepItemProps) => {
  const [submitKey, setSubmitKey] = useState<boolean>(false);

  const { mutateAsync: updateBlockchain } = useMutation(
    [queryKeys.getCalculatorBlockchainSteps],
    async (data: ICalculatorStep) => {
      return await toast.promise(
        adminCalculatorService.updateCalculatorBlockchainStepById(data),
        {
          pending: "Pending update",
          success: "Blockchain step data updated successfully",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const { mutateAsync: updateClassic } = useMutation(
    [queryKeys.getCalculatorClassicSteps],
    async (data: ICalculatorStep) => {
      return await toast.promise(
        adminCalculatorService.updateCalculatorClassicStepById(data),
        {
          pending: "Pending update",
          success: "Classic step data updated successfully",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const handleSubmit = async (values: ICalculatorStep) => {
    const converted = values;

    document.body.style.cursor = "wait";
    isBlockchain ? updateBlockchain(converted) : updateClassic(converted);
    await refetch();
    document.body.style.cursor = "auto";
    setSubmitKey((old) => !old);
  };

  return (
    <Formik initialValues={step} onSubmit={handleSubmit}>
      <CalculatorStepItemComponent
        index={index}
        submitKey={submitKey}
        data={allSteps}
        isBlockchain={isBlockchain}
      />
    </Formik>
  );
};

export default CalculatorStepItem;
