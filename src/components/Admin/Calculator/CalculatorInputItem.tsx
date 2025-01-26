import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { ChangeEvent } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import {
  OptionWrapper,
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";

interface ICalculatorInputItemProps {
  type: string;
  tieUp?: boolean;
  item: IStepOptions;
  ind: number;
}

const CalculatorTieUpInputItem = ({
  type,
  item,
  ind,
  tieUp,
}: ICalculatorInputItemProps) => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ICalculatorStep>();
  const queryClient = useQueryClient();

  const handleCondition = (e: ChangeEvent<HTMLInputElement>) => {
    if (tieUp) {
      if (
        e.target &&
        values.tieUpSteps.length > 0 &&
        !values.tieUpSteps[0].condition.includes(e.target.value)
      ) {
        setFieldValue("tieUpSteps[0].condition", [
          ...values.tieUpSteps[0].condition,
          e.target.value,
        ]);
      } else {
        setFieldValue(
          "tieUpSteps[0].condition",
          values.tieUpSteps[0].condition.filter((el) => el !== e.target.value)
        );
      }
    } else {
      if (
        e.target &&
        values.subSteps.length > 0 &&
        !values.subSteps[0].condition.includes(e.target.value)
      ) {
        setFieldValue("subSteps[0].condition", [
          ...values.subSteps[0].condition,
          e.target.value,
        ]);
      } else {
        setFieldValue(
          "subSteps[0].condition",
          values.subSteps[0].condition.filter((el) => el !== e.target.value)
        );
      }
    }
    handleSubmit();
    queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
    queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
  };

  return (
    <OptionWrapper>
      <TieUpInput
        type="checkbox"
        name="subStepInput"
        id={`${type}${item.label}${ind}`}
        value={item.label}
        className={`admin-${type}`}
        checked={values[
          tieUp ? "tieUpSteps" : "subSteps"
        ][0].condition.includes(item.label)}
        onChange={handleCondition}
      />
      <TieUpLabel
        dangerouslySetInnerHTML={{ __html: item.label }}
        htmlFor={`${type}${item.label}${ind}`}
        className="admin"
      />
    </OptionWrapper>
  );
};

export default CalculatorTieUpInputItem;
