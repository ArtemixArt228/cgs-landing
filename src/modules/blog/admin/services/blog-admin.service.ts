import { HttpServiceFactory } from "../../../../services";
import { EnhancedWithAuthHttpService } from "../../../../services/httpAuth.service";

import { IArticle } from "../types";
import { ISwapData } from "../../../../types/Admin/Response.types";
import { IArticlePageData, IBlogPageData } from "../../types";

export class BlogAdminService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getBlogPageData() {
    return this.httpService.get<IBlogPageData>("api/blog");
  }

  public updateBlogPageData(data: IBlogPageData) {
    return this.httpService.put("api/blog", data);
  }

  public getArticles() {
    return this.httpService.get<IArticle[]>("api/blog/article");
  }

  public getArticleByUrl(url: string) {
    return this.httpService.get<IArticlePageData>(`api/blog/article/${url}`);
  }

  public postArticle(article: IArticle) {
    return this.httpService.post(`api/blog/article`, article);
  }

  public updateById(updatedArticle: IArticle) {
    return this.httpService.put(
      `api/blog/article/${updatedArticle._id}`,
      updatedArticle
    );
  }

  public deleteByUrl(url: string) {
    return this.httpService.delete(`api/blog/article/${url}`);
  }

  public swapTwoElements(swapData: ISwapData) {
    return this.httpService.put(`api/blog/swap`, swapData);
  }
}

const factory = new HttpServiceFactory();
export const blogAdminService = new BlogAdminService(
  factory.createAuthHttpService()
);
