import { Dispatch, SetStateAction } from "react";

import { IArticle, IAuthor } from "../admin";

import { IMetaBlock } from "../../../types/Admin/Response.types";

export interface IBlogPageData {
  title: string;
  subscribeBlock: {
    title: string;
    subtitle: string;
    fieldLabel: string;
    buttonText: string;
    additionalText: string;
    thankYouMessage: string;
  };
  emailContent: {
    subject: string;
    previewText: string;
    generalTitle: string;
    buttonText: string;
    copyrightText: string;
    baseLinkUrl: string;
  };
  tags: string[];
  possibleTags: string[];
  sortOptions: string[];
  mainArticle: string;
  mainArticleId: string;
  meta: IMetaBlock;
}

export interface IArticlesData {
  reviews?: IArticle[];
  currentPage: number;
  totalPages: number;
  mainArticle: IArticle | null;
}

export interface IBlogFilters {
  tags: string[];
  search: string;
  sortBy: string;
}

export interface IArticlePageData {
  article: IArticle;
  readMoreArticles: IArticle[];
}

export interface IBlogItem {
  article: IArticle;
}

export interface IArticleAuthor {
  author?: IAuthor;
  date?: string;
  update?: string;
  time?: number;
  views?: number;
  isTablet?: boolean;
}

export interface IArticleReadMore {
  readMore: IArticle[];
}

export interface IArticleReadMoreProps {
  article: IArticle;
}

export interface IArticleTags {
  tags?: string[];
}

export interface IBlogTags {
  isNewTicket: boolean;
  ticket: number;
  infoIndex: number;
  setInfo: Dispatch<SetStateAction<number>>;
  info: number;
}
