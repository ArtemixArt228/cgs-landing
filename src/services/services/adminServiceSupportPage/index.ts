import { HttpServiceFactory } from "../..";
import { IServiceSupport } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesSupportService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getSupportServicePage() {
    return this.httpService.get<IServiceSupport>("api/service/support");
  }

  public updateSupportServicePage(data: IServiceSupport) {
    return this.httpService.put("api/service/support", data);
  }
}

const factory = new HttpServiceFactory();
export const adminSupportService = new AdminServicesSupportService(
  factory.createAuthHttpService()
);
