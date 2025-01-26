import React, { useState, useCallback } from "react";
import Image from "next/image";

import * as Styled from "./blog-tags.styled";

import Arrow from "/public/upArrowSidebar.svg";
import Basket from "/public/basket.svg";

interface IDropdownProps {
  dropdownTags: string[];
  handleRemoveTag: (tag: string) => void;
  handleChooseTag: (tag: string) => void;
  isError?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  dropdownTags,
  handleRemoveTag,
  handleChooseTag,
  isError,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Styled.DropdownWrapper onBlur={closeDropdown}>
      <Styled.DropdownBanner
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Toggle tags dropdown"
        className={isOpen ? "open" : undefined}
        isError={isError}
      >
        #TAGS
        <Image width={12} height={12} src={Arrow.src} alt="Toggle Arrow" />
      </Styled.DropdownBanner>

      {isOpen && (
        <Styled.Content className="open" role="menu">
          {dropdownTags.map((tag) => (
            <Styled.TagItemDropdown
              key={tag}
              onMouseDown={(e) => e.preventDefault()}
            >
              <span
                role="menuitem"
                tabIndex={0}
                onClick={() => {
                  closeDropdown();
                  handleChooseTag(tag);
                }}
              >
                {tag}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                aria-label={`Remove tag ${tag}`}
              >
                <Image
                  width={11}
                  height={14}
                  src={Basket.src}
                  alt="Remove Tag Icon"
                />
              </button>
            </Styled.TagItemDropdown>
          ))}
        </Styled.Content>
      )}
    </Styled.DropdownWrapper>
  );
};
