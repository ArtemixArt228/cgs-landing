import React, { ChangeEvent } from "react";
import { useFormikContext } from "formik";

import * as Styled from "./article-list-item.styled";

import { IArticle } from "../../types";
import { IBlogPageData } from "../../../types";

interface IArticleControlsProps {
  article: IArticle;
  onDeactivate: () => void;
  onPublish: () => void;
}

export const ArticleControls: React.FC<IArticleControlsProps> = ({
  article,
  onDeactivate,
  onPublish,
}) => {
  const { handleSubmit, values, setFieldValue } =
    useFormikContext<IBlogPageData>();

  return (
    <Styled.InternalButtonWrapper>
      {!article.draft && !article.disabled && (
        <Styled.AdminFlexRow>
          <Styled.AdminCheckboxField
            checked={values.mainArticle == article._id}
            disabled={values.mainArticle == article._id}
            type="checkbox"
            id={`Mark_as_Main_${article._id}`}
            name="mainArticle"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const { checked } = e.target;
              setFieldValue("mainArticle", checked ? article._id : "");
              handleSubmit();
            }}
          />
          <label
            htmlFor={`Mark_as_Main_${article._id}`}
            style={{
              margin: "6px",
              fontSize: "16px",
              color: values.mainArticle == article._id ? "red" : "black",
            }}
          >
            {values.mainArticle == article._id
              ? "Main article"
              : "Mark as Main"}
          </label>
        </Styled.AdminFlexRow>
      )}
      {article.publishedDate && !article.draft && (
        <Styled.TimeStamp>
          <strong>Published </strong>
          {article.publishedDate}
        </Styled.TimeStamp>
      )}
      <Styled.DeactivateButton
        disabled={article.draft || article.disabled}
        onClick={onDeactivate}
      >
        Deactivate
      </Styled.DeactivateButton>
      <Styled.PublishButton disabled={!article.disabled} onClick={onPublish}>
        <p>{!article.disabled ? "Published" : "Publish now"}</p>
      </Styled.PublishButton>
    </Styled.InternalButtonWrapper>
  );
};
