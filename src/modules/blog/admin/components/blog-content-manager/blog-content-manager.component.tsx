import React from "react";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MetaTagsBlock from "../../../../../components/Admin/MetaTagsBlock";
import ArticlesList from "../articles-list/articles-list.component";
import { BlogTitle } from "../blog-title";
import { ArticleManagementForm } from "../article-management-form";
import { BlogSubscription } from "../blog-subscription";
import { EmailContent } from "../email-content";
import { CustomToast } from "../../../../../components/Admin/CustomToast";

import * as Styled from "./blog-content-manager.styled";

import { blogAdminService } from "../../services";

import { useArticleState, useBlogData } from "../../hooks";

import { IBlogPageData } from "../../../types";

import { queryKeys } from "../../../../../consts/queryKeys";

const WarningMessage = () => (
  <div
    style={{
      fontWeight: "bold",
      fontSize: "16px",
      padding: "10px",
    }}
  >
    ⚠️ Pay attention! If you <b style={{ color: "red" }}>Save and Publish</b> or{" "}
    <b style={{ color: "red" }}>Publish Draft</b> article, then{" "}
    <i style={{ color: "#5869DD" }}>
      EMAIL CAMPAIGN WILL START IMMEDIATELY for subscribed users.
    </i>
  </div>
);

const LoadingState = () => (
  <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
);

const ErrorState = () => (
  <Styled.AdminUnauthorizedModal>
    Something went wrong :(
  </Styled.AdminUnauthorizedModal>
);

export const BlogContentManager: React.FC = () => {
  const { blogData, articles, sitemap, isLoading, refetch } = useBlogData();

  const {
    isNewArticle,
    setIsNewArticle,
    selectedArticleId,
    setSelectedArticleId,
    scrollRef,
    scrollTo,
  } = useArticleState();

  // Mutation hook for form submission
  const { mutateAsync } = useMutation(
    [queryKeys.updateBlogPage],
    async (pageData: IBlogPageData) => {
      return await toast.promise(
        blogAdminService.updateBlogPageData(pageData),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  // Form submission handler
  const handleSubmit = async (values: IBlogPageData) => {
    try {
      document.body.style.cursor = "wait";
      await mutateAsync(values);
      await refetch();
    } finally {
      document.body.style.cursor = "auto";
    }
  };

  if (isLoading) return <LoadingState />;
  if (!blogData || !articles) return <ErrorState />;

  return (
    <Styled.AdminContentBlock>
      <Formik
        key="blogPageData"
        enableReinitialize
        validateOnChange={false}
        onSubmit={handleSubmit}
        initialValues={blogData}
        validateOnBlur
      >
        <div>
          <Styled.AdminBlocksContent>
            <Styled.AdminHeader>BLOG</Styled.AdminHeader>
            <WarningMessage />
          </Styled.AdminBlocksContent>

          <BlogTitle />

          <ArticleManagementForm
            article={selectedArticleId}
            articles={articles}
            setArticle={setSelectedArticleId}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            sitemap={sitemap}
            scrollHandler={scrollTo}
          />

          <ArticlesList
            scrollRef={scrollRef}
            article={selectedArticleId}
            setArticle={setSelectedArticleId}
            isNewArticle={isNewArticle}
            setIsNewArticle={setIsNewArticle}
            data={articles}
            sitemap={sitemap}
          />

          <BlogSubscription />
          <EmailContent />

          <Styled.AdminBlocksContent>
            <Styled.MetaBlockWrapper>
              <MetaTagsBlock theme="dark" sitemap="blog" />
            </Styled.MetaBlockWrapper>
          </Styled.AdminBlocksContent>

          <CustomToast />
        </div>
      </Formik>
    </Styled.AdminContentBlock>
  );
};
