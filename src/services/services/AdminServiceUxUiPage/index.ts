import { HttpServiceFactory } from "../..";
import { IUxUiInterface } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServiceUxUiService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getUxUiServicePage() {
    return this.httpService.get<IUxUiInterface>("api/service/uxui");
  }

  public updateUxUiServicePage(data: IUxUiInterface) {
    return this.httpService.put("api/service/uxui", data);
  }
}

const factory = new HttpServiceFactory();
export const adminUxUiService = new AdminServiceUxUiService(
  factory.createAuthHttpService()
);
