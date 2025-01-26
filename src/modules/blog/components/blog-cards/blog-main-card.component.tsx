import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { ActionButton } from "../../../../components/ActionButton/ActionButton";

import * as Styled from "./blog-card.styled";

import { IBlogItem } from "../../types";

import AuthorPlaceholder from "public/authorPlaceholder.svg";
import FireIcon from "public/fire.svg";

import { getTextFromHtml } from "../../../../utils/getTextFromHtml";

export const BlogMainCard = ({ article }: IBlogItem) => {
  const is1920 = useMediaQuery("(min-width:1920px)");

  const iconSize = is1920 ? 24 : 20;

  const parsedDesc = getTextFromHtml(article.description);

  return (
    <a href={`/blog/${article.url}`} target="_blank" rel="noreferrer">
      <Styled.BlogItemContainer>
        <Styled.BlogInfoItemContainer className="main-card-container">
          <Styled.BlogItemImageContainer>
            {article.image?.url && (
              <Image
                src={article.image.url}
                alt="blog image"
                layout="fill"
                objectFit="contain"
                priority
              />
            )}
          </Styled.BlogItemImageContainer>
          <Styled.MainBlogCardInfoWrapper>
            <Styled.BlogItemInfoContainer>
              <Styled.DateAndTitleWrapper>
                <Styled.TrendingWrapper>
                  <Image
                    src={FireIcon.src}
                    alt="Trending image"
                    width={iconSize}
                    height={iconSize}
                  />
                  <span>Trending</span>
                </Styled.TrendingWrapper>
                <Styled.BlogItemInfoHeading>
                  {article.title}
                </Styled.BlogItemInfoHeading>
              </Styled.DateAndTitleWrapper>
              <Styled.BlogItemInfoIntroContainer>
                <Styled.BlogItemInfoAuthorContainer>
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
                  <Styled.Dot />
                  <Styled.BlogItemInfoTimeRead>{`${article.minutesToRead} min read`}</Styled.BlogItemInfoTimeRead>
                </Styled.BlogItemInfoAuthorContainer>
                <Styled.BlogItemInfoDesc>{parsedDesc}</Styled.BlogItemInfoDesc>
              </Styled.BlogItemInfoIntroContainer>
            </Styled.BlogItemInfoContainer>
            <Styled.BlogButtonContainer>
              <ActionButton
                handleAction={() =>
                  window.open(`/blog/${article.url}`, "_blank")
                }
                buttonText="Continue reading"
                className="blog-main-card"
              />
            </Styled.BlogButtonContainer>
          </Styled.MainBlogCardInfoWrapper>
        </Styled.BlogInfoItemContainer>
      </Styled.BlogItemContainer>
    </a>
  );
};
