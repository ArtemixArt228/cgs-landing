import React from "react";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

interface ICalculatorChooseButtonProps {
  header: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorChooseButton = ({
  header,
  active,
  setActive,
}: ICalculatorChooseButtonProps) => {
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <Styled.ChooseButton
      className={active ? "active" : "disabled"}
      onClick={handleClick}
    >
      {header || "CHOOSE"}
    </Styled.ChooseButton>
  );
};

export default CalculatorChooseButton;
