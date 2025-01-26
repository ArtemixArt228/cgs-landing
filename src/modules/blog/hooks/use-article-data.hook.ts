import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

import { blogService } from "../services";

import { IArticlePageData } from "../types";

import { queryKeys } from "../../../consts/queryKeys";

export const useArticleData = (url: string) => {
  const { data, isLoading }: UseQueryResult<IArticlePageData> = useQuery(
    [queryKeys.getBlogArticle],
    () => blogService.getArticleByUrl(url),
    {
      enabled: !!url,
    }
  );

  const { mutateAsync: updateViews } = useMutation(
    [queryKeys.updateViews],
    (id: string) => blogService.updateViewById(id)
  );

  // Automatically update views when article loads
  useQuery(
    [queryKeys.updateViews, data?.article?._id],
    () => (data?.article?._id ? updateViews(data.article._id) : null),
    {
      enabled: !!data?.article?._id,
      // Only run once per article
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return { ...data, isLoading };
};
