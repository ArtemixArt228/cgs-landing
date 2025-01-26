import React from "react";
import Link from "next/link";

import * as Styled from "./HistoryLink.styled";

interface IHistoryLink {
  sectionName?: string;
  lastModified: string;
  link: string;
}

const HistoryLink = ({
  sectionName = "",
  lastModified,
  link = "/404",
}: IHistoryLink) => {
  return (
    <Styled.LinkWrapper>
      <p>{`${sectionName} section last modified: ${lastModified}`}</p>
      <Link href={link} passHref>
        <Styled.LinkText target="_blank" rel="noopener noreferrer">
          Open history
        </Styled.LinkText>
      </Link>
    </Styled.LinkWrapper>
  );
};

export default HistoryLink;
