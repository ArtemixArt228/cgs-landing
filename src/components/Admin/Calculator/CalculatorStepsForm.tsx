import React from "react";
import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import CalculatorChooseButton from "./CalculatorChooseButton";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { CalculatorStepsArr } from "./CalculatorStepsArr";

interface ICalculatorStepsFormProps {
  isBlockchain: boolean;
  classicStepsData: ICalculatorStep[];
  blockchainStepsData: ICalculatorStep[];
  classicIsLoading: boolean;
  blockchainIsLoading: boolean;
  classicRefetch: () => void;
  blockchainRefetch: () => void;
  toogleBlockchain: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorStepsForm = ({
  classicStepsData,
  blockchainStepsData,
  classicIsLoading,
  blockchainIsLoading,
  classicRefetch,
  blockchainRefetch,
  isBlockchain,
  toogleBlockchain,
}: ICalculatorStepsFormProps) => {
  return classicIsLoading || blockchainIsLoading ? (
    <AdminPageStyled.AdminUnauthorizedModal>
      Loading...
    </AdminPageStyled.AdminUnauthorizedModal>
  ) : classicStepsData && blockchainStepsData ? (
    <>
      <Styled.ChooseTitle>Choose:</Styled.ChooseTitle>
      <Styled.ChooseButtonsWrapper>
        <CalculatorChooseButton
          header="classic development"
          active={!isBlockchain}
          setActive={toogleBlockchain}
        />
        <CalculatorChooseButton
          header="blockchain development"
          active={isBlockchain}
          setActive={toogleBlockchain}
        />
      </Styled.ChooseButtonsWrapper>
      {isBlockchain && (
        <CalculatorStepsArr
          arr={blockchainStepsData}
          isBlockchain={isBlockchain}
          refetch={blockchainRefetch}
        />
      )}
      {!isBlockchain && (
        <CalculatorStepsArr
          arr={classicStepsData}
          isBlockchain={isBlockchain}
          refetch={classicRefetch}
        />
      )}
    </>
  ) : (
    <AdminPageStyled.AdminUnauthorizedModal>
      {"Something went wrong :("}
    </AdminPageStyled.AdminUnauthorizedModal>
  );
};

export default CalculatorStepsForm;
