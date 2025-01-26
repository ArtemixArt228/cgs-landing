import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import CalculatorModalComponent from "./CalculatorPagerModalComponent";
import CalculatorTitleField from "./CalculatorTitleField";

import {
  Loader,
  LoaderWrapper,
} from "../../styles/Calculator/CalculatorComponent.styled";

import { useWindowDimension } from "../../hooks/useWindowDimension";
import { queryKeys } from "../../consts/queryKeys";

import {
  ICalculator,
  ICalculatorQuittingPager,
} from "../../types/Admin/Response.types";

const CalculatorQuittingPager = ({
  handleClose,
  handleContinueClick,
  handleQuitClick,
}: ICalculatorQuittingPager) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { width } = useWindowDimension();

  return (
    (width && (
      <CalculatorModalComponent
        onClose={handleClose}
        buttonText="< continue >"
        onButtonClick={handleContinueClick}
        onQuitButtonClick={handleQuitClick}
        mobile={width <= 768}
        isQuiting
      >
        {data ? (
          <CalculatorTitleField className="quit" text={data?.popUpMessage} />
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </CalculatorModalComponent>
    )) ||
    null
  );
};

export default CalculatorQuittingPager;
