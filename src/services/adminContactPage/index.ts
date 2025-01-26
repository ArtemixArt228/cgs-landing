import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IContactPageData } from "../../types/Admin/AdminContact.types";

export class AdminContactService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getContactPage() {
    return this.httpService.get<IContactPageData>("api/contact");
  }

  public updateContactPage(data: IContactPageData) {
    return this.httpService.put("api/contact", data);
  }
}

const factory = new HttpServiceFactory();
export const adminContactService = new AdminContactService(
  factory.createAuthHttpService()
);
