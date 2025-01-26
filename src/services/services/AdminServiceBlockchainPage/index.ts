import { HttpServiceFactory } from "../..";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { IBlockchainService } from "../../../types/Admin/Response.types";

class AdminServiceBlockchainDevelopment {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getBlockchainDevelopmentPage() {
    return this.httpService.get<IBlockchainService>("api/service/crypto");
  }

  public updateBlockchainDevelopmentPage(data: IBlockchainService) {
    return this.httpService.put("api/service/crypto", data);
  }
}

const factory = new HttpServiceFactory();

const adminBlockchainService = new AdminServiceBlockchainDevelopment(
  factory.createAuthHttpService()
);

export { adminBlockchainService, AdminServiceBlockchainDevelopment };
