import { HttpServiceFactory } from "./index";
import { EnhancedWithAuthHttpService } from "./httpAuth.service";

export class validTokenService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public validToken() {
    return this.httpService.get("api/auth");
  }
}

const factory = new HttpServiceFactory();
export const validTokenGlobal = new validTokenService(
  factory.createAuthHttpService()
);
