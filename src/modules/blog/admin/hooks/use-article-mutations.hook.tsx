import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { queryKeys } from "../../../../consts/queryKeys";

import { IArticle } from "../types";
import {
  ISitemapData,
  ISwapData,
} from "../../../../types/Admin/Response.types";

interface ArticleService {
  postArticle: (article: IArticle) => Promise<unknown>;
  updateById: (article: IArticle) => Promise<unknown>;
  deleteByUrl: (id: string) => Promise<unknown>;
  swapTwoElements: (data: ISwapData) => Promise<unknown>;
}

interface SitemapService {
  updateSitemapData: (sitemap: ISitemapData) => Promise<unknown>;
}

export const useArticleMutations = (
  articleService: ArticleService,
  sitemapService: SitemapService
) => {
  const queryClient = useQueryClient();

  const createMutationOptions = (queryKey: string) => ({
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKey]);
    },
  });

  const postArticleMutation = useMutation(
    [queryKeys.postArticle],
    async (dataToUpdate: IArticle) => {
      return await toast.promise(articleService.postArticle(dataToUpdate), {
        pending: "Pending update",
        success: {
          render({ data }) {
            const { message } = data as { message: string };
            return (
              <div>
                <div>Data updated successfully 👌</div>
                <div>{message || ""}</div>
              </div>
            );
          },
        },
        error: {
          render({ data }) {
            const { message } = data as { message: string };
            return (
              <div>
                <div>Some things went wrong 🤯</div>
                <div>{message || ""}</div>
              </div>
            );
          },
        },
      });
    },
    createMutationOptions(queryKeys.getBlogArticles)
  );

  const updateArticleMutation = useMutation(
    [queryKeys.updateBlogArticle],
    async (dataToUpdate: IArticle) => {
      return await toast.promise(articleService.updateById(dataToUpdate), {
        pending: "Pending update",
        success: {
          render({ data }) {
            const { message } = data as { message: string };
            return (
              <div>
                <div>Data updated successfully 👌</div>
                <div>{message || ""}</div>
              </div>
            );
          },
        },
        error: {
          render({ data }) {
            const { message } = data as { message: string };
            return (
              <div>
                <div>Some things went wrong 🤯</div>
                <div>{message || ""}</div>
              </div>
            );
          },
        },
      });
    },
    createMutationOptions(queryKeys.getBlogArticles)
  );

  const deleteBlogArticleMutation = useMutation(
    [queryKeys.deleteArticle],
    async (id: string) => {
      return await toast.promise(articleService.deleteByUrl(id), {
        pending: "Deleting article",
        success: "Article deleted successfully 👌",
        error: "Failed to delete article 🤯",
      });
    },
    createMutationOptions(queryKeys.getBlogArticles)
  );

  const updateSitemapMutation = useMutation(
    [queryKeys.updateSitemap],
    async (updatedSitemap: ISitemapData) => {
      return await toast.promise(
        sitemapService.updateSitemapData(updatedSitemap),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    },
    createMutationOptions(queryKeys.getSitemapData)
  );

  const swapArticlesMutation = useMutation(
    [queryKeys.swapArticles],
    async (dataToUpdate: ISwapData) => {
      return await toast.promise(articleService.swapTwoElements(dataToUpdate), {
        pending: "Swapping articles",
        success: "Articles swapped successfully 👌",
        error: "Failed to swap articles 🤯",
      });
    },
    createMutationOptions(queryKeys.getBlogArticles)
  );

  return {
    postArticle: postArticleMutation.mutateAsync,
    updateArticle: updateArticleMutation.mutateAsync,
    deleteBlogArticle: deleteBlogArticleMutation.mutateAsync,
    updateSitemap: updateSitemapMutation.mutateAsync,
    swapArticles: swapArticlesMutation.mutateAsync,
  };
};
