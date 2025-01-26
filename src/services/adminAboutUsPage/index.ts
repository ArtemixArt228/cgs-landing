import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IAbout } from "../../types/Admin/Response.types";

export class AdminAboutUsService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAboutUsPage() {
    return this.httpService.get<IAbout>("api/about");
  }

  public updateAboutUsPage(data: IAbout) {
    return this.httpService.put("api/about", data);
  }
}

const factory = new HttpServiceFactory();
export const adminAboutUsService = new AdminAboutUsService(
  factory.createAuthHttpService()
);
