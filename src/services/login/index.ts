import { IAdmin } from "../../types/Admin/Admin.types";
import { IResponse } from "../../types/Admin";
import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../index";

export class ExampleService {
  constructor(private httpService: HttpService) {}
  public adminAuth(data: IAdmin) {
    return this.httpService.post<IResponse, IAdmin>("api/auth", data);
  }
}

const factory = new HttpServiceFactory();
export const authService = new ExampleService(factory.createHttpService());
