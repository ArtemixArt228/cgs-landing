import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IPrivacyPage } from "../../types/Admin/Response.types";

export class AdminPrivacyService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPolicyPage() {
    return this.httpService.get<IPrivacyPage>("api/privacy");
  }

  public updatePolicyPage(data: IPrivacyPage) {
    return this.httpService.put("api/privacy", data);
  }
}

const factory = new HttpServiceFactory();
export const adminPrivacyService = new AdminPrivacyService(
  factory.createAuthHttpService()
);
