import React, { useState } from "react";

import * as Styled from "../../styles/HeaderBurgerDropdown.styled";

import { navigationRoutesLinks } from "../../utils/variables";
import HeaderDropdownLink from "./HeaderDropdownLink";

interface IBurgerDropDown {
  tags: string[];
  dropdownName: string;
}

const HeaderBurgerDropdown = ({ tags, dropdownName }: IBurgerDropDown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen((old) => !old);

  const handleClose = () => setIsOpen(false);

  return (
    <Styled.DropDownWrapper
      onClick={handleClick}
      tabIndex={0}
      onBlur={handleClose}
    >
      <Styled.DropDownHeader>
        {dropdownName}
        <Styled.ArrowImage
          className={isOpen ? "open" : undefined}
          width="9"
          height="5"
          viewBox="0 0 9 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.49999 5C4.33869 5 4.17741 4.93998 4.05443 4.82018L0.184628 1.0486C-0.0615425 0.808678 -0.0615425 0.419689 0.184628 0.179867C0.430698 -0.0599556 0.829741 -0.0599556 1.07593 0.179867L4.49999 3.51717L7.92406 0.179983C8.17023 -0.0598391 8.56923 -0.0598391 8.81528 0.179983C9.06157 0.419806 9.06157 0.808794 8.81528 1.04871L4.94554 4.8203C4.8225 4.94011 4.66122 5 4.49999 5Z" />
        </Styled.ArrowImage>
      </Styled.DropDownHeader>
      <Styled.DropDownContent className={isOpen ? "open" : undefined}>
        {tags.map((option, i) => (
          <HeaderDropdownLink
            key={option}
            index={i}
            handleClose={handleClose}
            isOpen={isOpen}
            hrefLink={
              navigationRoutesLinks[
                option as keyof typeof navigationRoutesLinks
              ]
            }
            title={option}
            className="burger-dropdown"
          />
        ))}
      </Styled.DropDownContent>
    </Styled.DropDownWrapper>
  );
};

export default HeaderBurgerDropdown;
