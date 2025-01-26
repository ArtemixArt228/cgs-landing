import { useQueryClient, useMutation } from "@tanstack/react-query";

import { blogAdminService } from "../services";

import { IBlogPageData } from "../../types";

import { queryKeys } from "../../../../consts/queryKeys";

export const useHandleTags = () => {
  const queryClient = useQueryClient();

  // Retrieve existing blog page data from the cache
  const data = queryClient.getQueryData<IBlogPageData>([queryKeys.getBlogPage]);

  // Define the mutation for updating the blog page data
  const { mutateAsync: updateBlogPageData } = useMutation(
    [queryKeys.updateBlogPage],
    (dataToUpdate: IBlogPageData) =>
      blogAdminService.updateBlogPageData(dataToUpdate),
    {
      // On success, invalidate the query to refetch updated data
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKeys.getBlogPage]);
      },
    }
  );

  return { data, updateBlogPageData };
};
