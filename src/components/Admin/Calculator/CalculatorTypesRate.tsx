import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { toast } from "react-toastify";

import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculator,
  ICalculatorRole,
} from "../../../types/Admin/Response.types";
import SaveBtn from "../Global/SaveBtn";
import CalculatorRateComponent from "./CalculatorRateComponent";

const CalculatorTypesRate = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    async (data: ICalculator) => {
      return await toast.promise(
        adminCalculatorService.updateCalculatorData(data),
        {
          pending: "Pending update",
          success: "Calculator price data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getCalculatorData]);
      },
    }
  );

  const handleSubmit = (
    values: { roles: ICalculatorRole[] },
    { resetForm }: FormikHelpers<{ roles: ICalculatorRole[] }>
  ) => {
    if (data) {
      const updatedData = data;
      updatedData.roles = values.roles;
      mutateAsync(updatedData);
      resetForm();
    }
  };

  return (
    (data && (
      <Formik
        initialValues={{ roles: data.roles }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, handleSubmit }) => {
          return (
            <div>
              <Styled.CalculatorTypeGrid>
                {values.roles.map((role, idx) => (
                  <CalculatorRateComponent
                    key={role.name}
                    type={role.name}
                    rate={role.rate}
                    idx={idx}
                  />
                ))}
              </Styled.CalculatorTypeGrid>
              <SaveBtn
                handleClick={handleSubmit}
                title="Save Changes"
                style={{ marginTop: "14px", marginBottom: "20px" }}
              />
            </div>
          );
        }}
      </Formik>
    )) ||
    null
  );
};

export default CalculatorTypesRate;
