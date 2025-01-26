import { HttpServiceFactory } from "../..";
import { IServicePage } from "../../../types/Admin/AdminServices.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesWebService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getWebServicePage() {
    return this.httpService.get<IServicePage>("api/service/web");
  }

  public updateWebServicePage(data: IServicePage) {
    return this.httpService.put("api/service/web", data);
  }
}

const factory = new HttpServiceFactory();
export const adminWebService = new AdminServicesWebService(
  factory.createAuthHttpService()
);
