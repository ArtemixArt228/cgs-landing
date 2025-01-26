import { HttpServiceFactory } from "../..";
import { IServiceDb } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesDbService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getDbServicePage() {
    return this.httpService.get<IServiceDb>("api/service/db");
  }

  public updateDbServicePage(data: IServiceDb) {
    return this.httpService.put("api/service/db", data);
  }
}

const factory = new HttpServiceFactory();
export const adminDbService = new AdminServicesDbService(
  factory.createAuthHttpService()
);
