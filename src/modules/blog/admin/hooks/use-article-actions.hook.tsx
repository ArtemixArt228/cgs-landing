import React, { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { FormikHelpers, FormikState } from "formik";

import { adminGlobalService } from "../../../../services/adminHomePage";
import { IArticle } from "../types";
import { ISitemapData } from "../../../../types/Admin/Response.types";

import { blogAdminService } from "../services";
import { adminSitemapService } from "../../../../services/adminSitemapPage";
import {
  formatMetadata,
  formatsDateWithTime,
  updateSitemapUrl,
} from "../utils";
import { getAdminBlogValidation } from "../../validators";
import { useArticleMutations } from ".";
import { parseValidationErrors } from "../../../../utils/validation-errors-parse";

export const useArticleActions = (
  setIsNewArticle: (val: boolean) => void,
  setArticle: (val: number) => void,
  sitemap: void | ISitemapData | undefined
) => {
  const isSubmitting = useRef(false);
  const { mutateAsync: deletePhoto } = useMutation((url: string) =>
    adminGlobalService.deleteImage(url)
  );
  const { postArticle, updateArticle, updateSitemap, deleteBlogArticle } =
    useArticleMutations(blogAdminService, adminSitemapService);

  const handleDeleteArticle = async (
    article: IArticle,
    sitemap: ISitemapData | undefined | void
  ) => {
    if (article.url && sitemap) {
      const updatedSitemap = sitemap;
      const index = updatedSitemap?.includedPages.indexOf(
        `blog/${article.url}`
      );
      if (index > -1) {
        updatedSitemap?.includedPages.splice(index, 1);
        await updateSitemap(updatedSitemap);
      }
    }

    await deleteBlogArticle(article._id);
    if (article.image?.url) await deletePhoto(article.image.url);
    if (article.author.image?.url) await deletePhoto(article.author.image.url);
  };

  const handleDeactivateArticle = async (article: IArticle) => {
    const updatedArticle = {
      ...article,
      disabled: true,
      publishedDate: "",
    };
    await updateArticle(updatedArticle);
  };

  const handlePublishArticle = async (article: IArticle) => {
    const updatedArticle = {
      ...article,
      publishedDate: formatsDateWithTime(),
      draft: false,
      disabled: false,
    };
    await updateArticle(updatedArticle);
  };
  const validateArticleForm = async (
    article: IArticle,
    existingUrls: {
      _id: string;
      url: string;
    }[],
    validateEmailImage = false
  ) => {
    try {
      await getAdminBlogValidation(existingUrls, validateEmailImage).validate(
        article,
        {
          abortEarly: false,
        }
      );
      return {};
    } catch (validationError) {
      return parseValidationErrors(validationError, isSubmitting);
    }
  };

  const handleSubmit = async (
    values: IArticle,
    { resetForm, setFieldValue }: FormikHelpers<IArticle>,
    isNewArticle: boolean,
    articles: IArticle[]
  ) => {
    const preparedArticle = formatMetadata(values);

    if (isNewArticle) {
      await postArticle(preparedArticle);
      setIsNewArticle(false);
    } else {
      await updateArticle(preparedArticle);
    }

    if (
      sitemap &&
      !isNewArticle &&
      preparedArticle.url !== articles.find((a) => a.url === values.url)?.url
    ) {
      const updatedSitemap = updateSitemapUrl(
        sitemap,
        articles.find((a) => a.url === values.url)?.url || "",
        preparedArticle.url
      );
      updatedSitemap && (await updateSitemap(updatedSitemap));
    }

    resetForm();
    setArticle(0);
    setIsNewArticle(true);
    setFieldValue("meta.metaTitle", "");
    setFieldValue("meta.metaDescription", "");
  };

  const handleFormReset = (
    resetForm: (nextState?: Partial<FormikState<IArticle>> | undefined) => void,
    scrollTo: () => void
  ) => {
    resetForm();
    scrollTo();
  };

  const handleSaveClick = async (
    setFieldValue: (
      field: string,
      value: unknown,
      shouldValidate?: boolean
    ) => void,
    values: IArticle,
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
  ) => {
    isSubmitting.current = true;
    if (values.disabled) {
      const published = values.draft ? "draft" : "";
      setFieldValue("publishedDate", published);
    } else {
      setFieldValue("draft", false);
      setFieldValue("disabled", false);
      setFieldValue("publishedDate", formatsDateWithTime());
    }
    handleSubmit();
  };

  const handleDraftClick = (
    setFieldValue: (
      field: string,
      value: unknown,
      shouldValidate?: boolean
    ) => void,
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
  ) => {
    isSubmitting.current = true;
    setFieldValue("draft", true);
    setFieldValue("disabled", true);
    setFieldValue("publishedDate", "draft");
    handleSubmit();
  };

  const handleCancelArticle = () => {
    setIsNewArticle(true);
    setArticle(0);
  };
  return {
    isSubmitting,
    handleDeleteArticle,
    handleDeactivateArticle,
    handlePublishArticle,
    handleSubmit,
    handleSaveClick,
    handleFormReset,
    handleDraftClick,
    handleCancelArticle,
    validateArticleForm,
  };
};
