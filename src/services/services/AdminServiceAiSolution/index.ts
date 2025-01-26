import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { HttpServiceFactory } from "../../index";
import { IServiceAi } from "../../../types/Admin/AdminServices.types";

export class AdminServicesAiService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAiServicePage() {
    return this.httpService.get<IServiceAi>("api/service/ai");
  }

  public updateAiServicePage(data: IServiceAi) {
    return this.httpService.put("api/service/ai", data);
  }
}

const factory = new HttpServiceFactory();
export const adminAiService = new AdminServicesAiService(
  factory.createAuthHttpService()
);
