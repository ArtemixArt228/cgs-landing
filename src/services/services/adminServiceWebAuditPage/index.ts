import { HttpServiceFactory } from "../..";
import { IServiceWebAudit } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesWebAuditService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getWebAuditServicePage() {
    return this.httpService.get<IServiceWebAudit>("api/service/webAudit");
  }

  public updateWebAuditServicePage(data: IServiceWebAudit) {
    return this.httpService.put("api/service/webAudit", data);
  }
}

const factory = new HttpServiceFactory();
export const adminWebAuditService = new AdminServicesWebAuditService(
  factory.createAuthHttpService()
);
