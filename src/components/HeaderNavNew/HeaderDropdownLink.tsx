import React from "react";
import Link from "next/link";

import * as Styled from "../../styles/HeaderDropdown.styled";
import clsx from "clsx";

interface IBlogDropdown {
  hrefLink: string;
  title: string;
  index: number;
  isOpen: boolean;
  handleClose?: () => void;
  className?: string;
}

const HeaderDropdownLink = ({
  hrefLink,
  title,
  index,
  isOpen,
  handleClose,
  className = "",
}: IBlogDropdown) => {
  const titleLowerCase = title.toLowerCase();
  return (
    <Styled.LinkWrapper
      onClick={handleClose}
      onMouseDown={(e) => e.preventDefault()}
      ind={index}
      className={clsx(
        isOpen && "open",
        titleLowerCase.includes("ai ") && "ai",
        titleLowerCase.includes("ai chatbot") && "additional-padding",
        className
      )}
    >
      <Link href={hrefLink} passHref>
        <Styled.Link className={className}>
          {titleLowerCase.includes("ai solutions") ? (
            <>
              {title}
              <Styled.DropdownLabel> &#60;NEW&#62;</Styled.DropdownLabel>
            </>
          ) : titleLowerCase.includes("ai chatbot") ? (
            <>
              <Styled.DropdownLabel>&#62;&#62; </Styled.DropdownLabel>
              {title}
            </>
          ) : (
            title
          )}
        </Styled.Link>
      </Link>
    </Styled.LinkWrapper>
  );
};

export default HeaderDropdownLink;
