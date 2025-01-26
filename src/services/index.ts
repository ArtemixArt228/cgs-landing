import axios from "axios";
import { EnhancedWithAuthHttpService } from "./httpAuth.service";
import { HttpService } from "./http.service";

export class HttpServiceFactory {
  createHttpService(): HttpService {
    return new HttpService(axios);
  }
  createAuthHttpService() {
    return new EnhancedWithAuthHttpService(this.createHttpService());
  }
}
