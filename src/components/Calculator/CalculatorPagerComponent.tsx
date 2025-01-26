import React, { useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import CalculatorModal from "./CalculatorPagerModalComponent";
import CalculatorPager from "./CalculatorPager";
import CalculatorChooseLine from "./CalculatorChooseLine";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import PressButtonArrow from "../../../public/Calculator/pressButtonArrow.svg";
import { queryKeys } from "../../consts/queryKeys";
import {
  ICalculator,
  ICalculatorPagerComponentProps,
} from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const CalculatorPagerComponent = ({
  buttonText,
  isOpen,
  startLoading,
  blockchainStepsData,
  classicStepsData,
  handleButtonClick,
  handleClose,
  handleBlockchainClick,
  handleClassicClick,
}: ICalculatorPagerComponentProps) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isBusy, setIsBusy] = useState(false);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);
  const { width } = useWindowDimension();

  const content = data && [
    <Styled.PagerText
      key="1"
      dangerouslySetInnerHTML={{
        __html: data.startMessage.replaceAll("|", "<br>"),
      }}
    />,
    <Styled.LoaderWrapper key="2">
      <Styled.Loader />
    </Styled.LoaderWrapper>,
    <Styled.PressButtonWrapper key="3">
      <Styled.PressButtonText>just press the button</Styled.PressButtonText>
      <Styled.PressButtonImageWrapper>
        <Image
          src={PressButtonArrow.src}
          alt="press button arrow"
          layout="fill"
          objectFit="contain"
        />
      </Styled.PressButtonImageWrapper>
    </Styled.PressButtonWrapper>,
  ];

  if (!content) return <></>;

  const handleForwardClick = () => {
    const newIndex = currentContentIndex + 1;

    if (currentContentIndex === 0) {
      setCurrentContentIndex(newIndex);
      setIsBusy(true);

      setTimeout(() => {
        setCurrentContentIndex(newIndex + 1);
        setIsBusy(false);
      }, 3000);
    } else {
      setCurrentContentIndex(newIndex);
    }
  };

  const handleBackwardClick = () => {
    const newIndex = currentContentIndex - 1;

    if (currentContentIndex === content.length - 1) {
      setCurrentContentIndex(newIndex);
      setIsBusy(true);

      setTimeout(() => {
        setCurrentContentIndex(newIndex - 1);
        setIsBusy(false);
      }, 3000);
    } else {
      setCurrentContentIndex(newIndex);
    }
  };

  return width && isOpen && data ? (
    <CalculatorModal
      startLoading={startLoading}
      buttonText={buttonText}
      onClose={handleClose}
      onButtonClick={handleButtonClick}
      mobile={width <= 768}
      isData={Boolean(classicStepsData && blockchainStepsData)}
    >
      {classicStepsData &&
      blockchainStepsData &&
      buttonText === "< choose >" ? (
        <Styled.ChooseModalWrapper>
          <CalculatorChooseLine mobile={width <= 768}>
            <Styled.ChooseTextWrapper>
              <Styled.ChooseText onClick={handleBlockchainClick}>
                <span>Blockchain development</span>
              </Styled.ChooseText>
            </Styled.ChooseTextWrapper>
          </CalculatorChooseLine>
          <CalculatorChooseLine mobile={width <= 768}>
            <Styled.ChooseTextWrapper>
              <Styled.ChooseText onClick={handleClassicClick}>
                <span>Classic development</span>
              </Styled.ChooseText>
            </Styled.ChooseTextWrapper>
          </CalculatorChooseLine>
        </Styled.ChooseModalWrapper>
      ) : (
        <CalculatorPager
          mobile={width <= 768}
          onPagerLeftClick={
            isBusy || currentContentIndex === 0 ? () => {} : handleBackwardClick
          }
          onPagerRightClick={
            isBusy || currentContentIndex === content.length - 1
              ? () => {}
              : handleForwardClick
          }
        >
          <Styled.ContentWrapper>
            {content[currentContentIndex]}
          </Styled.ContentWrapper>
        </CalculatorPager>
      )}
    </CalculatorModal>
  ) : null;
};

export default CalculatorPagerComponent;
