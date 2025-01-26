import { IHttpConfig } from "../../types/Admin";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class EmailSubscribeService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public subscribe(
    email: string,
    config?: IHttpConfig
  ): Promise<{ url: string } | void> {
    return this.httpService.post("api/email-subscribers", { email }, config);
  }
}

const factory = new HttpServiceFactory();
export const emailSubscribeService = new EmailSubscribeService(
  factory.createAuthHttpService()
);
