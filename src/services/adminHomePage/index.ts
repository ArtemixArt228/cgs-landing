import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IHomePageResponse } from "../../types/Admin/AdminHomePage.types";

export class AdminHomePageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFullPage(): Promise<IHomePageResponse | void> {
    return this.httpService.get<IHomePageResponse>("api/form");
  }
  public updateFullPage(data: IHomePageResponse) {
    return this.httpService.put("api/form", data);
  }
  public uploadImage(data: any): Promise<{ url: string } | void> {
    return this.httpService.post("api/upload", data);
  }
  public deleteImage(url: string) {
    return this.httpService.delete("api/upload", { data: { url } });
  }
  public uploadFile(data: FormData): Promise<{ url: string } | void> {
    return this.httpService.post("api/upload/file", data);
  }
  public deleteFile(url: string) {
    return this.httpService.delete("api/upload/file", { data: { url } });
  }
}

const factory = new HttpServiceFactory();
export const adminGlobalService = new AdminHomePageService(
  factory.createAuthHttpService()
);
