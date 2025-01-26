import React, { FC } from "react";

import * as Styled from "../../styles/Burger.styles";

import { IBurgerButtonProps } from "../../types/Button.types";

const BurgerButton: FC<IBurgerButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <Styled.BurgerButtonWrapper>
      <Styled.BurgerButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="burger-btn"
      >
        <span />
        <span />
        <span />
      </Styled.BurgerButton>
    </Styled.BurgerButtonWrapper>
  );
};

export default BurgerButton;
