import React from "react";
import Image from "next/image";
import { format } from "date-fns";

import * as Styled from "./blog-card.styled";

import { IBlogItem } from "../../types";

import AuthorPlaceholder from "/public/authorPlaceholder.svg";
import { getTextFromHtml } from "../../../../utils/getTextFromHtml";

export const BlogCard = ({ article }: IBlogItem) => {
  const parsedDescription = getTextFromHtml(article?.description);

  return (
    <a href={`/blog/${article.url}`} target="_blank" rel="noreferrer">
      <Styled.BlogCardContainer>
        <Styled.BlogCardImageContainer>
          {article.image?.url && (
            <Image
              src={article.image.url}
              alt="blog image"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          )}
        </Styled.BlogCardImageContainer>
        <Styled.BlogCardPostedDate>
          {format(new Date(article.date), "MMM d, yyyy")}
        </Styled.BlogCardPostedDate>
        <Styled.BlogCardHeading title={article.title}>
          {article.title}
        </Styled.BlogCardHeading>
        <Styled.BlogCardDesc>{parsedDescription}</Styled.BlogCardDesc>
        <Styled.BlogCardAuthorContainer>
          <Styled.BlogCardAuthor>
            <Styled.BlogItemInfoAuthorImage>
              <Image
                src={
                  article.author.image?.url
                    ? article.author.image.url
                    : AuthorPlaceholder.src
                }
                alt="blog author image"
                layout="fill"
                objectFit="contain"
              />
            </Styled.BlogItemInfoAuthorImage>
            <Styled.BlogItemInfoAuthor>{`By ${article.author.name} // ${article.author.specialization}`}</Styled.BlogItemInfoAuthor>
          </Styled.BlogCardAuthor>
          <Styled.Dot className="card-dot" />
          <Styled.BlogItemInfoTimeRead>{`${article.minutesToRead} min read`}</Styled.BlogItemInfoTimeRead>
        </Styled.BlogCardAuthorContainer>
      </Styled.BlogCardContainer>
    </a>
  );
};
