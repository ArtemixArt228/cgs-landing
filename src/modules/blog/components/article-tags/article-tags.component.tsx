import React from "react";
import { FC } from "react";
import Router from "next/router";

import * as Styles from "./article-tags.styled";

import { IArticleTags } from "../../types";

export const ArticleTags: FC<IArticleTags> = ({ tags = [] }) => {
  const handleTagClick = async (tag: string) => {
    await Router.push(`/blog?tags=${tag}`);
  };

  return (
    <Styles.Wrapper>
      {tags.map((tag, index) => (
        <Styles.TagItem key={index} onClick={() => handleTagClick(tag)}>
          <Styles.DetailsText>#{tag}</Styles.DetailsText>
        </Styles.TagItem>
      ))}
    </Styles.Wrapper>
  );
};
