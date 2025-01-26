import { HttpServiceFactory } from "../..";
import { IDomain, IService } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServices {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAllServices() {
    return this.httpService.get<IService[]>("api/service/");
  }
  public getAllDomains() {
    return this.httpService.get<IDomain[]>("api/service/domains");
  }
  public addDomain(domain: IDomain) {
    return this.httpService.post("api/service/domains", { domain });
  }
  public removeDomain(id: string) {
    return this.httpService.delete(`api/service/domains/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const adminServices = new AdminServices(factory.createAuthHttpService());
