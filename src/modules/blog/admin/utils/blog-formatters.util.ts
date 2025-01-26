import { getTextFromHtml } from "../../../../utils/getTextFromHtml";

import { IArticle } from "../types";

import { MAX_META_DESCRIPTION, MAX_META_TITLE } from "../consts";

export const formatMetadata = (article: IArticle): IArticle => {
  return {
    ...article,
    meta: {
      ...article.meta,
      metaTitle:
        article.meta.metaTitle ||
        (article.title.length > MAX_META_TITLE
          ? article.title.substring(0, MAX_META_TITLE)
          : article.title),
      metaDescription:
        article.meta.metaDescription ||
        (getTextFromHtml(article.description).length > MAX_META_DESCRIPTION
          ? getTextFromHtml(article.description).substring(
              0,
              MAX_META_DESCRIPTION
            )
          : getTextFromHtml(article.description)),
    },
    publishedDate: formatPublishedDate(article.publishedDate),
  };
};

export const formatsDateWithTime = (inputDate?: string): string => {
  const date = inputDate ? new Date(inputDate) : new Date();
  const month = date.getMonth() + 1;

  const modifyDateOrTime = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  return `${modifyDateOrTime(date.getDate())}.${modifyDateOrTime(
    month
  )}.${date.getFullYear()} ${modifyDateOrTime(
    date.getHours()
  )}:${modifyDateOrTime(date.getMinutes())}`;
};

export const formatPublishedDate = (publishedDate?: string): string => {
  if (!publishedDate) return formatsDateWithTime();
  return publishedDate === "draft" ? "" : publishedDate;
};
