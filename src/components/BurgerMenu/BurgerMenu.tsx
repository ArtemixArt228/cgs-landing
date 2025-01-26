import React, { FC, useEffect } from "react";

import FooterNew from "../FooterNew/FooterNew";

import * as StyledThisComp from "../../styles/Burger.styles";
import { IBurgerMenuProps } from "../../types/Button.types";

const BurgerMenu: FC<IBurgerMenuProps> = ({
  isOpen,
  children,
  burgerRef,
  setIsScrolled,
}) => {
  useEffect(() => {
    const onScroll = () => {
      window.scrollY ? setIsScrolled(true) : setIsScrolled(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, true);

    return () => window.removeEventListener("scroll", onScroll, true);
  }, [burgerRef, setIsScrolled]);

  return (
    <StyledThisComp.BurgerWrapper
      ref={burgerRef}
      className={isOpen ? "open" : "hide"}
    >
      <StyledThisComp.BurgerNavContainer>
        {children?.map((route, ind) => (
          <StyledThisComp.BurgerRow key={ind} className={isOpen ? "open" : ""}>
            {route}
          </StyledThisComp.BurgerRow>
        ))}
      </StyledThisComp.BurgerNavContainer>
      <FooterNew />
    </StyledThisComp.BurgerWrapper>
  );
};

export default BurgerMenu;
