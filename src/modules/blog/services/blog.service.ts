import { HttpServiceFactory } from "../../../services";
import { EnhancedWithAuthHttpService } from "../../../services/httpAuth.service";

import {
  IArticlePageData,
  IArticlesData,
  IBlogFilters,
  IBlogPageData,
} from "../types";

export class BlogService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getBlogPageData() {
    return this.httpService.get<IBlogPageData>("api/blog");
  }

  public getArticleByUrl(url: string) {
    return this.httpService.get<IArticlePageData>(`api/blog/article/${url}`);
  }

  public getPaginatedAndFilteredReviews(
    filters: IBlogFilters,
    page: number,
    limit: number
  ) {
    const validSortBy = decodeURIComponent(filters.sortBy)
      .toLowerCase()
      .replace(/\s+/g, "_");

    return this.httpService.get<IArticlesData>(
      `api/blog/articles?tags=${filters.tags}&search=${filters.search}&sortBy=${validSortBy}&page=${page}&limit=${limit}`
    ) as Promise<IArticlesData>;
  }

  public updateViewById(id: string) {
    return this.httpService.put(`api/blog/article/view/${id}`, { id });
  }
}

const factory = new HttpServiceFactory();
export const blogService = new BlogService(factory.createAuthHttpService());
