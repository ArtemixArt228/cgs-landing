import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorStep,
} from "../../../types/Admin/Response.types";
import TypeSelectArrow from "./svg/typeSelectArrow";

interface ICalculatorTypeSelectProps {
  header?: string;
  name: string;
  zIndex: number;
}

const CalculatorTypeSelect = ({
  header,
  name,
  zIndex,
}: ICalculatorTypeSelectProps) => {
  const { setFieldValue } = useFormikContext<ICalculatorStep>();

  const currHeader = () => {
    if (header) {
      return header;
    }

    return "Specialist";
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currRole, setCurrRole] = useState<string>(currHeader());
  const queryClient = useQueryClient();
  const roles = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ])?.roles;

  const handleHeaderClick = () => {
    setIsOpen((old) => !old);
  };

  const handleOptionClick = (role: string) => {
    setFieldValue(name, role);
    setCurrRole(role);
    setIsOpen(false);
  };

  const contentClassName = isOpen ? "open" : undefined;

  return (
    (roles && (
      <Styled.CalculatorTypeSelectWrapper>
        <Styled.CalculatorTypeSelectHeader
          onClick={handleHeaderClick}
          className={contentClassName}
        >
          <span>{currRole}</span>
          <TypeSelectArrow />
        </Styled.CalculatorTypeSelectHeader>
        <Styled.CalculatorTypeSelectContent
          style={{ zIndex }}
          className={contentClassName}
        >
          {roles.map((role) => (
            <Styled.CalculatorTypeSelectOption
              key={role.name}
              onClick={() => handleOptionClick(role.name)}
            >
              {role.name}
            </Styled.CalculatorTypeSelectOption>
          ))}
        </Styled.CalculatorTypeSelectContent>
      </Styled.CalculatorTypeSelectWrapper>
    )) ||
    null
  );
};

export default CalculatorTypeSelect;
