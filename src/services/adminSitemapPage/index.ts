import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { ISitemapData } from "../../types/Admin/Response.types";

export class AdminSitemapService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getSitemapData() {
    return this.httpService.get<ISitemapData>("api/sitemap");
  }

  public updateSitemapData(data: ISitemapData) {
    return this.httpService.put("api/sitemap", data);
  }
}

const factory = new HttpServiceFactory();
export const adminSitemapService = new AdminSitemapService(
  factory.createAuthHttpService()
);
