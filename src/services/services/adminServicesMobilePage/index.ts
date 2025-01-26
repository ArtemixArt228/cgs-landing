import { HttpServiceFactory } from "../..";
import { IServicePage } from "../../../types/Admin/AdminServices.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesMobileService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getMobileServicePage() {
    return this.httpService.get<IServicePage>("api/service/mobile");
  }

  public updateMobileServicePage(data: IServicePage) {
    return this.httpService.put("api/service/mobile", data);
  }
}

const factory = new HttpServiceFactory();
export const adminMobileService = new AdminServicesMobileService(
  factory.createAuthHttpService()
);
