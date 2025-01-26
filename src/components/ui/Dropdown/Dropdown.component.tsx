import React, { useRef, useState } from "react";
import Image from "next/image";

import * as Styled from "./Dropdown.styled";

import { useOnBlur } from "../../../hooks/use-on-blur.hook";

import CloseIconBtn from "/public/BlogDecorations/SortMethodCloseBtn.svg";
import DropdownArrow from "../../../utils/svg/dropdown-arrow";
import clsx from "clsx";

interface IDropdownProps {
  setFilters: (tags: string[]) => void;
  filters: string[];
  options: string[];
  dropdownName: string;
  isTag?: boolean;
  className?: string;
  prefix?: string;
  icon?: React.ReactElement;
}

export const Dropdown = ({
  setFilters,
  filters,
  options,
  dropdownName,
  isTag = false,
  className = "",
  prefix = "",
  icon,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useOnBlur(modalRef, () => setIsOpen(false));

  const handleOptionClick = (option: string) => {
    if (!filters.includes(option)) {
      setFilters([...filters, option]);
    }
    setIsOpen(false);
  };

  const resetSortMethod = () => {
    setFilters([]);
  };
  return (
    <Styled.DropdownWrapper ref={modalRef} className={className}>
      <Styled.DropdownButton
        className={clsx(
          className,
          isOpen && "open",
          filters.filter((item) => item !== "").length > 0 && "selected"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && icon}
        <Styled.DropdownText className={className}>
          {dropdownName}
        </Styled.DropdownText>
        <Styled.IconWrapper className={className}>
          <DropdownArrow currentColor className="dropdown-arrow" />
        </Styled.IconWrapper>
      </Styled.DropdownButton>

      {isOpen && (
        <Styled.DropdownContent className={`open ${className}`}>
          {options.map((option) => (
            <Styled.DropdownItem
              key={option}
              className={filters.includes(option) ? "checked" : ""}
              onClick={() => handleOptionClick(option)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {isTag ? `${prefix}${option}` : option}
              {!isTag && filters.includes(option) && (
                <Image
                  src={CloseIconBtn}
                  alt="close button"
                  style={{ cursor: "pointer" }}
                  onClick={resetSortMethod}
                />
              )}
            </Styled.DropdownItem>
          ))}
        </Styled.DropdownContent>
      )}
    </Styled.DropdownWrapper>
  );
};
