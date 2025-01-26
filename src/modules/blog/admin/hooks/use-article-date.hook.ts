import { useMemo } from "react";

import { IArticle } from "../types";

export const useArticleDate = (article: IArticle) => {
  return useMemo(() => {
    const formatDate = (date: Date) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    if (article.updatedOn) {
      const date = new Date(article.updatedOn);
      return {
        label: "Updated on ",
        value: formatDate(date),
      };
    }

    if (article.date) {
      const date = new Date(article.date);
      return {
        label: "",
        value: formatDate(date),
      };
    }

    return null;
  }, [article.updatedOn, article.date]);
};
