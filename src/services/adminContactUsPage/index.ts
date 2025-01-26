import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IContactUsPageData } from "../../types/Admin/AdminContactUs.types";

export class AdminContactUsService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getContactUsPage() {
    return this.httpService.get<IContactUsPageData>("api/contact-us");
  }

  public updateContactUsPage(data: IContactUsPageData) {
    return this.httpService.put("api/contact-us", data);
  }
}

const factory = new HttpServiceFactory();
export const adminContactUsService = new AdminContactUsService(
  factory.createAuthHttpService()
);
