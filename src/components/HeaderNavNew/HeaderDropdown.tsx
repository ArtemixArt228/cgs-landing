import React, { useState } from "react";
import Image from "next/image";

import * as Styled from "../../styles/HeaderDropdown.styled";

import Arrow from "/public/upArrowSidebar.svg";

import { navigationRoutesLinks } from "../../utils/variables";
import HeaderDropdownLink from "./HeaderDropdownLink";

interface IBlogDropdown {
  tags: string[];
  dropdownName: string;
  className?: string;
}

const HeaderDropdown = ({ tags, dropdownName, className }: IBlogDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onBlur = () => setIsOpen(false);

  const onClick = () => {
    setIsOpen((old) => !old);
  };

  const buttonClassName = () => {
    if (isOpen && className) {
      return `open ${className}`;
    }

    if (isOpen) {
      return "open";
    }

    if (className) {
      return className;
    }
  };

  return (
    <Styled.Dropdown className={className} onBlur={onBlur} tabIndex={0}>
      <Styled.DropdownButton className={buttonClassName()} onClick={onClick}>
        <span>{dropdownName}</span>
        <Image width={9} height={5} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : ""}>
        {tags.map((option, i) => (
          <HeaderDropdownLink
            key={option}
            hrefLink={
              navigationRoutesLinks[
                option as keyof typeof navigationRoutesLinks
              ]
            }
            title={option}
            className="web-dropdown"
            index={i}
            isOpen={isOpen}
          />
        ))}
      </Styled.DropdownContent>
    </Styled.Dropdown>
  );
};

export default HeaderDropdown;
