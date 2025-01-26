import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React from "react";

import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorRole,
} from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";

interface ICalculatorRateComponentProps {
  type: string;
  rate: number;
  idx: number;
}

const CalculatorRateComponent = ({
  type,
  rate,
  idx,
}: ICalculatorRateComponentProps) => {
  const { values, handleChange, handleSubmit } = useFormikContext<{
    roles: ICalculatorRole[];
  }>();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const handleDelete = () => {
    if (data) {
      const filtered = data;
      filtered.roles = filtered.roles.filter((role) => role.name !== type);
      values.roles = filtered.roles;
      handleSubmit();
    }
  };

  return (
    <Styled.CalculatorRateComponentWrapper>
      <AdminPageStyled.AdminSubTitle size="16px">
        {type}
      </AdminPageStyled.AdminSubTitle>
      <Styled.CalculatorRateFieldWrapper>
        <Styled.CalculatorPriceField
          name={`roles.[${idx}].rate`}
          type="number"
          value={rate}
          onChange={handleChange}
        />
      </Styled.CalculatorRateFieldWrapper>
      <Styled.CalculatorPriceDeleteBtn onClick={handleDelete}>
        delete
      </Styled.CalculatorPriceDeleteBtn>
    </Styled.CalculatorRateComponentWrapper>
  );
};

export default CalculatorRateComponent;
