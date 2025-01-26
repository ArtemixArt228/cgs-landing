import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";

interface ICalculatorTieUpDropdownProps {
  header?: string;
  data: ICalculatorStep[];
  current: number;
}

const CalculatorTieUpDropdown = ({
  header,
  data,
  current,
}: ICalculatorTieUpDropdownProps) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ICalculatorStep>();

  const handleClick = () => {
    setIsOpen((old) => !old);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleStepClick = (idx: number) => {
    setFieldValue("tieUpSteps[0].number", idx);
    values.tieUpSteps[0].number = idx;
    setIsOpen(false);

    if (data && typeof values.tieUpSteps[0].number === "number") {
      handleSubmit();
      queryClient.invalidateQueries([queryKeys.getCalculatorClassicSteps]);
      queryClient.invalidateQueries([queryKeys.getCalculatorBlockchainSteps]);
    }
  };

  return (
    <Styled.DropDownContainer onBlur={handleBlur} tabIndex={0}>
      <Styled.DropDownHeader
        className={isOpen ? "open" : undefined}
        onClick={handleClick}
      >
        {values.tieUpSteps.length > 0 &&
        typeof values.tieUpSteps[0].number === "number"
          ? `Step ${values.tieUpSteps[0].number + 1}`
          : header}
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7.5 8L14 1" stroke="currentColor" />
        </svg>
      </Styled.DropDownHeader>
      <Styled.HiddenContent className={isOpen ? "open" : undefined}>
        {new Array(data.length).fill(0).map(
          (_, idx) =>
            idx < current && (
              <Styled.DropdownStepItem
                key={idx}
                onClick={() => handleStepClick(idx)}
              >
                Step {idx + 1}
              </Styled.DropdownStepItem>
            )
        )}
      </Styled.HiddenContent>
    </Styled.DropDownContainer>
  );
};

export default CalculatorTieUpDropdown;
