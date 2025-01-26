import React, { useState } from "react";

import * as Styled from "../../styles/CareersDropdown.styled";

import { ICareersDropdown } from "../../types/Company.types";

import Arrow from "../../../public/upArrowSidebar.svg";

const CareersDropdown = ({
  setFilter,
  positions,
  dropdownName,
  setEnable,
}: ICareersDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBlur = () => {
    setIsOpen(false);
    if (setEnable) setEnable(false);
  };

  return (
    <Styled.Dropdown onBlur={onBlur}>
      <Styled.DropdownButton
        className={isOpen ? "open" : "className"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{dropdownName}</span>
        <img width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? `open ` : undefined}>
        {positions.map((option) => (
          <div
            onClick={() => {
              setFilter(option);
              setIsOpen(false);
            }}
            key={option}
            onMouseDown={(e) => e.preventDefault()}
          >
            {option}
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default CareersDropdown;
