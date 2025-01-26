import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { queryKeys } from "../../../consts/queryKeys";
import {
  CalculatorMultiplyTypeSelectContent,
  CalculatorMultiplyTypeSelectOption,
  CalculatorTypeSelectHeader,
  CalculatorTypeSelectWrapper,
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorStep,
} from "../../../types/Admin/Response.types";
import TypeSelectArrow from "./svg/typeSelectArrow";

interface ICalculatorMultiplyRolesSelectProps {
  defaultHeader: string;
  value?: string[];
  name: string;
}

const CalculatorMultiplyRolesSelect = ({
  defaultHeader,
  name,
  value,
}: ICalculatorMultiplyRolesSelectProps) => {
  const { handleChange } = useFormikContext<ICalculatorStep>();
  const queryClient = useQueryClient();
  const roles = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ])?.roles;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleHeaderClick = () => {
    setIsOpen((old) => !old);
  };

  const contentClassName = isOpen ? "open" : undefined;

  return (
    (roles && (
      <CalculatorTypeSelectWrapper>
        <CalculatorTypeSelectHeader
          onClick={handleHeaderClick}
          className={contentClassName}
        >
          <span>{(value && value.join(", ")) || defaultHeader}</span>
          <TypeSelectArrow />
        </CalculatorTypeSelectHeader>
        <CalculatorMultiplyTypeSelectContent className={contentClassName}>
          {roles.map((role, ind) => (
            <CalculatorMultiplyTypeSelectOption key={ind}>
              <TieUpInput
                type="checkbox"
                name={name}
                id={`checkbox${role.name}${ind}`}
                value={role.name}
                className="admin-checkbox"
                checked={value && value.includes(role.name)}
                onChange={handleChange}
              />
              <TieUpLabel
                dangerouslySetInnerHTML={{ __html: role.name }}
                htmlFor={`checkbox${role}${ind}`}
              />
            </CalculatorMultiplyTypeSelectOption>
          ))}
        </CalculatorMultiplyTypeSelectContent>
      </CalculatorTypeSelectWrapper>
    )) ||
    null
  );
};

export default CalculatorMultiplyRolesSelect;
