import { HttpServiceFactory } from "../..";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { ICloudService } from "../../../types/Admin/Response.types";

class AdminServiceCloudSolution {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCloudSolutionPage() {
    return this.httpService.get<ICloudService>("api/service/cloud");
  }

  public updateCloudSolutionPage(data: ICloudService) {
    return this.httpService.put("api/service/cloud", data);
  }
}

const factory = new HttpServiceFactory();

const adminCloudService = new AdminServiceCloudSolution(
  factory.createAuthHttpService()
);

export { AdminServiceCloudSolution, adminCloudService };
