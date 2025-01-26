import { HttpServiceFactory } from "../..";
import { IServiceMobileAudit } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesMobileAuditService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getMobileAuditServicePage() {
    return this.httpService.get<IServiceMobileAudit>("api/service/mobileAudit");
  }

  public updateMobileAuditServicePage(data: IServiceMobileAudit) {
    return this.httpService.put("api/service/mobileAudit", data);
  }
}

const factory = new HttpServiceFactory();
export const adminMobileAuditService = new AdminServicesMobileAuditService(
  factory.createAuthHttpService()
);
