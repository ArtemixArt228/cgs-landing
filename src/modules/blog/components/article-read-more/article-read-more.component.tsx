import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { BlogCard } from "../blog-cards";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";

import * as Styles from "./article-read-more.styled";

import { IArticleReadMore } from "../../types";

import AbstractDesignIcon from "/public/abstractDesign.svg";

export const ArticleReadMore = ({ readMore }: IArticleReadMore) => {
  const readMoreTitle = "Next to read";

  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1920px)");

  const iconWidth = isDesktop ? 78 : 54;
  const iconHeight = isDesktop ? 32 : 24;

  return readMore.length > 0 ? (
    <Styles.Wrapper>
      {!isTablet && (
        <div>
          <MobileInfiniteText
            title={readMoreTitle}
            className="case-study read-more-mob-title"
          />
        </div>
      )}
      <Styles.ReadMoreContainer>
        {isTablet && (
          <Styles.TitleWrapper>
            <Image
              src={AbstractDesignIcon}
              alt="abstract desing"
              width={iconWidth}
              height={iconHeight}
            />
            <Styles.Title>{readMoreTitle}</Styles.Title>
          </Styles.TitleWrapper>
        )}
        <Styles.ReadMoreItemsWrapper>
          {readMore.map((article) => (
            <BlogCard article={article} key={article._id} />
          ))}
        </Styles.ReadMoreItemsWrapper>
      </Styles.ReadMoreContainer>
    </Styles.Wrapper>
  ) : (
    <Styles.Space></Styles.Space>
  );
};
