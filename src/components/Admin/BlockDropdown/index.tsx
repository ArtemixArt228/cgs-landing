import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import ArrowDown from "../../../../public/arrowWhiteDown.svg";
import Image from "next/image";

interface IDropdownProps {
  title: string;
  children: JSX.Element;
  styles?: object;
  isOpened?: boolean;
  id?: string;
}

const BlockDropdown = ({
  title,
  children,
  styles,
  isOpened,
  id,
}: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpened ?? true);

  const changeModalState = () => setIsOpen((prevState) => !prevState);

  return (
    <Styled.BlockDropdown id={id} {...styles}>
      <Styled.BlockDropdownHeader onClick={changeModalState}>
        <Styled.BlockDropdownHeaderTitle>
          {title}
        </Styled.BlockDropdownHeaderTitle>
        <Styled.BlockDropdownHeaderIcon isOpen={isOpen}>
          <Image width={20} height={9} src={ArrowDown.src} alt="Arrow" />
        </Styled.BlockDropdownHeaderIcon>
      </Styled.BlockDropdownHeader>
      {isOpen && (
        <Styled.BlockDropdownContent>{children}</Styled.BlockDropdownContent>
      )}
    </Styled.BlockDropdown>
  );
};

export default BlockDropdown;
