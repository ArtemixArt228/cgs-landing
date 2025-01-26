import { useQuery } from "@tanstack/react-query";

import { blogAdminService } from "../services";
import { adminSitemapService } from "../../../../services/adminSitemapPage";

import { queryKeys } from "../../../../consts/queryKeys";

export const useBlogData = () => {
  const { data, isLoading, refetch } = useQuery([queryKeys.getBlogPage], () =>
    blogAdminService.getBlogPageData()
  );

  const { data: articles } = useQuery([queryKeys.getBlogArticles], () =>
    blogAdminService.getArticles()
  );

  const { data: sitemap } = useQuery([queryKeys.getSitemapData], () =>
    adminSitemapService.getSitemapData()
  );

  return {
    blogData: data,
    articles,
    sitemap,
    isLoading,
    refetch,
  };
};
