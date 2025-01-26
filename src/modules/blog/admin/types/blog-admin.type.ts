import { RefObject } from "react";

import {
  IMetaBlock,
  ISitemapData,
} from "../../../../types/Admin/Response.types";

export interface IAuthor {
  name: string;
  specialization: string;
  image: { url: string } | null;
}

export interface IArticle {
  _id: string;
  url: string;
  image: { url: string } | null;
  emailImage: { image: { url: string } | null };
  title: string;
  description: string;
  author: IAuthor;
  updatedOn: string;
  date: string;
  publishedDate: string;
  minutesToRead: number;
  views: number;
  content: string;
  tags: string[];
  disabled: boolean;
  draft: boolean;
  meta: IMetaBlock;
}

export interface IArticleManagementFormProps {
  article: number;
  articles: IArticle[];
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  sitemap?: ISitemapData | void;
  scrollHandler: () => void;
}

export interface IArticleAddAndEdit {
  possibleTags: string[];
  isNewArticle: boolean;
}

export interface IArticles {
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  article: number;
  isNewArticle: boolean;
  data?: IArticle[];
  disabled?: boolean;
  sitemap?: ISitemapData | void;
  scrollRef: RefObject<HTMLDivElement>;
}

export interface IBlogItemProps {
  item: IArticle;
  i: number;
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  article: number;
  isNewArticle: boolean;
  data?: IArticle[];
  disabled?: boolean;
  sitemap?: ISitemapData | void;
}
