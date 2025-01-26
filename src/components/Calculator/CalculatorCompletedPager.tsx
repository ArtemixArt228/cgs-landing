import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

import CalculatorPager from "./CalculatorPager";
import CalculatorModalComponent from "./CalculatorPagerModalComponent";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import {
  ICalculator,
  ICalculatorCompletedPagerProps,
} from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import PressButtonArrow from "../../../public/Calculator/pressButtonArrow.svg";

const CalculatorCompletedPager = ({
  finishClick,
  handleClose,
  handleButtonClick,
  handlePagerLeftButtonClick,
  handlePagerButtonsClick,
  isCalendlyOpen,
}: ICalculatorCompletedPagerProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { width } = useWindowDimension();

  return (
    (width && (
      <CalculatorModalComponent
        buttonText={"< Finish >"}
        onClose={() => !isCalendlyOpen && handleClose}
        onButtonClick={handleButtonClick}
        mobile={width <= 768}
      >
        <CalculatorPager
          mobile={width <= 768}
          onPagerLeftClick={handlePagerLeftButtonClick}
          onPagerRightClick={handlePagerButtonsClick}
        >
          <Styled.ContentWrapper>
            {finishClick ? (
              <Styled.PressButtonWrapper>
                <Styled.PressButtonText>
                  just press the button
                </Styled.PressButtonText>
                <Styled.PressButtonImageWrapper>
                  <Image
                    src={PressButtonArrow.src}
                    alt="press button arrow"
                    layout="fill"
                    objectFit="contain"
                  />
                </Styled.PressButtonImageWrapper>
              </Styled.PressButtonWrapper>
            ) : (
              <Styled.FinishTextWrapper>
                <div>
                  <SplitBrackets text={data?.finishMessage} />
                </div>
              </Styled.FinishTextWrapper>
            )}
          </Styled.ContentWrapper>
        </CalculatorPager>
      </CalculatorModalComponent>
    )) ||
    null
  );
};

export default CalculatorCompletedPager;
