import React, { FC } from "react";

import * as Styles from "./article-author.styled";

import { IArticleAuthor } from "../../types";

import AuthorPlaceholder from "/public/authorPlaceholder.svg";

export const ArticleAuthor: FC<IArticleAuthor> = ({
  author,
  time,
  views,
  isTablet,
}) => {
  return (
    <Styles.Wrapper>
      <Styles.AuthorInfoWrapper>
        <Styles.AuthorImage
          src={author?.image?.url ? author?.image.url : AuthorPlaceholder.src}
          alt={author?.name}
        />
        <Styles.DetailsText>
          {`By ${author?.name} // ${author?.specialization}`}
        </Styles.DetailsText>
      </Styles.AuthorInfoWrapper>
      <Styles.StatisticWrapper>
        {isTablet && <Styles.DotDivider></Styles.DotDivider>}
        <Styles.DetailsText className="additional-article-info">
          {time} min read
        </Styles.DetailsText>
        <Styles.DotDivider></Styles.DotDivider>
        <Styles.DetailsText className="additional-article-info">
          {views || 0} views
        </Styles.DetailsText>
      </Styles.StatisticWrapper>
    </Styles.Wrapper>
  );
};
