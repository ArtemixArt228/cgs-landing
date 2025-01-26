import React, { useEffect, useState } from "react";
import { Form, Formik, useFormikContext } from "formik";
import "react-toastify/dist/ReactToastify.css";

import { ArticleComposer } from "../article-composer";

import { IBlogPageData } from "../../../types";
import { IArticleManagementFormProps } from "../../types";

import { useArticleActions } from "../../hooks";
import { NEW_BLOG_ARTICLE } from "../../consts";
import * as Styled from "../../styles/blog-admin.styled";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import MetaTagsBlock from "../../../../../components/Admin/MetaTagsBlock";
import { useScrollTo } from "../../../../../hooks/useScrollTo";
import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";

export const ArticleManagementForm: React.FC<IArticleManagementFormProps> = ({
  article,
  articles,
  setIsNewArticle,
  isNewArticle,
  setArticle,
  sitemap,
}) => {
  const [existingUrls, setExistingUrls] = useState<
    { _id: string; url: string }[]
  >([]);
  const { values: blogValues } = useFormikContext<IBlogPageData>();
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();
  const {
    handleSubmit: onSubmit,
    handleDraftClick,
    handleFormReset,
    handleSaveClick,
    handleCancelArticle,
    validateArticleForm,
  } = useArticleActions(setIsNewArticle, setArticle, sitemap);

  useEffect(() => {
    setExistingUrls(
      articles.map(({ _id, url }) => ({
        _id,
        url,
      }))
    );
  }, [articles]);
  return (
    <Formik
      key={`${isNewArticle} article form`}
      initialValues={
        isNewArticle
          ? JSON.parse(JSON.stringify(NEW_BLOG_ARTICLE))
          : { ...NEW_BLOG_ARTICLE, ...articles[article] }
      }
      onSubmit={async (values, formikHelpers) => {
        await onSubmit(values, formikHelpers, isNewArticle, articles);
      }}
      validateOnChange
      validateOnBlur={false}
      validate={async (values) => {
        const errors = await validateArticleForm(
          values,
          existingUrls,
          isNewArticle || values.draft
        );
        return errors;
      }}
    >
      {({ values, resetForm, setFieldValue, handleSubmit }) => (
        <Form>
          <Styled.AdminBlocksContent ref={ref}>
            <AdminBlockDropDown title="Add Article" defaultOpen={!isNewArticle}>
              <ArticleComposer
                possibleTags={blogValues.possibleTags}
                isNewArticle={isNewArticle}
              />

              <Styled.BlogButtonWrapper>
                <Styled.SubmitButtonWrapper>
                  <SaveBtn
                    title={`${
                      isNewArticle
                        ? "Save and Publish"
                        : values.draft
                        ? "Edit Draft"
                        : "Edit"
                    } Article`}
                    handleClick={() =>
                      handleSaveClick(setFieldValue, values, handleSubmit)
                    }
                  />
                  {isNewArticle && (
                    <Styled.DraftButton
                      type={"button"}
                      onClick={() =>
                        handleDraftClick(setFieldValue, handleSubmit)
                      }
                    >
                      Add to draft
                    </Styled.DraftButton>
                  )}
                </Styled.SubmitButtonWrapper>
                <Styled.BlogCancelButton
                  type={"button"}
                  onClick={
                    isNewArticle
                      ? () => handleFormReset(resetForm, scrollTo)
                      : handleCancelArticle
                  }
                >
                  {isNewArticle ? "Reset" : "Cancel"}
                </Styled.BlogCancelButton>
              </Styled.BlogButtonWrapper>
              <Styled.MetaBlockWrapper style={{ marginBottom: "4em" }}>
                <MetaTagsBlock
                  theme="dark"
                  sitemap={
                    (values.url !== "" && `blog/${values.url}`) || undefined
                  }
                />
              </Styled.MetaBlockWrapper>
            </AdminBlockDropDown>
          </Styled.AdminBlocksContent>
        </Form>
      )}
    </Formik>
  );
};
