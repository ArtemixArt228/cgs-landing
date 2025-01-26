import React from "react";
import Image from "next/image";
import { format } from "date-fns";

import * as Styled from "./article-date.styled";

import calendarIcon from "/public/BlogDecorations/Calendar.svg";

interface IArticleDate {
  date?: string;
  isTablet: boolean;
}

export const ArticleDate = ({ date = "" }: IArticleDate) => {
  return (
    <Styled.ArticleDateContainer>
      <Styled.IconWrapper>
        <Image
          src={calendarIcon}
          layout="fill"
          objectFit="contain"
          alt="calendar"
        />
      </Styled.IconWrapper>
      <Styled.ArticleDate>
        {format(new Date(date), "MMM d, yyyy")}
      </Styled.ArticleDate>
    </Styled.ArticleDateContainer>
  );
};
