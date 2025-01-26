import React from "react";
import parse from "html-react-parser";

import { ArticleControls } from "./article-controls.component";

import * as Styled from "./article-list-item.styled";

import { IBlogItemProps } from "../../types";

import { useArticleActions, useArticleDate } from "../../hooks";

import close from "/public/bigClose.svg";
import changeIcon from "/public/ChangeIcon.svg";

export const ArticleListItem: React.FC<IBlogItemProps> = ({
  item,
  i,
  isNewArticle,
  setIsNewArticle,
  setArticle,
  sitemap,
  article,
}) => {
  const articleDate = useArticleDate(item);

  const { handleDeleteArticle, handleDeactivateArticle, handlePublishArticle } =
    useArticleActions(setIsNewArticle, setArticle, sitemap);

  const toggleEditPost = () => {
    if (isNewArticle) {
      setIsNewArticle(false);
      setArticle(i);
      window.scrollTo(0, 0);
    } else {
      setIsNewArticle(true);
      setArticle(0);
    }
  };

  return (
    <Styled.BlogItemContainer>
      <Styled.BlogItem>
        <Styled.BlogContentWrapper>
          <Styled.BlogItemInfo>
            <Styled.BlogDateTagWrapper>
              {articleDate && (
                <Styled.Date>
                  {articleDate.label && <strong>{articleDate.label}</strong>}
                  {articleDate.value}
                </Styled.Date>
              )}
              <Styled.Tag>{item.tags[0]}</Styled.Tag>
            </Styled.BlogDateTagWrapper>
            <Styled.BlogItemTitle>{item.title}</Styled.BlogItemTitle>
            <Styled.BlogItemDescription className="admin">
              {parse(item.description)}
            </Styled.BlogItemDescription>
          </Styled.BlogItemInfo>
          <Styled.BlogItemImage
            src={item.image?.url}
            alt="blog admin item image"
          />
        </Styled.BlogContentWrapper>

        <Styled.Fade
          style={{
            display: isNewArticle
              ? "none"
              : !isNewArticle && article !== i
              ? "block"
              : "none",
          }}
        />

        {item.draft && <Styled.DraftMark>DRAFT</Styled.DraftMark>}

        <Styled.ChangeIconWrapper onClick={toggleEditPost}>
          <Styled.ChangeIcon
            src={isNewArticle || article !== i ? changeIcon.src : close.src}
          />
        </Styled.ChangeIconWrapper>

        <Styled.ButtonWrapper>
          <Styled.DeleteButton
            onClick={() => handleDeleteArticle(item, sitemap)}
          >
            delete article
          </Styled.DeleteButton>

          <ArticleControls
            article={item}
            onDeactivate={() => handleDeactivateArticle(item)}
            onPublish={() => handlePublishArticle(item)}
          />
        </Styled.ButtonWrapper>
      </Styled.BlogItem>
    </Styled.BlogItemContainer>
  );
};
