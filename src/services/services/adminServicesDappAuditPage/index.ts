import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { HttpServiceFactory } from "../../index";
import { IServiceDappAudit } from "../../../types/Admin/Response.types";

export class AdminServicesDappAuditService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getDappAuditServicePage() {
    return this.httpService.get<IServiceDappAudit>("api/service/dappAudit");
  }

  public updateDappAuditServicePage(data: IServiceDappAudit) {
    return this.httpService.put("api/service/dappAudit", data);
  }
}

const factory = new HttpServiceFactory();
export const adminDappAuditService = new AdminServicesDappAuditService(
  factory.createAuthHttpService()
);
