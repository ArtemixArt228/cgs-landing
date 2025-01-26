import { IHttpConfig } from "../../types/Admin";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class ChatService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public uploadFile(
    data: FormData,
    config?: IHttpConfig
  ): Promise<{ url: string } | void> {
    return this.httpService.post("api/chat/upload-file", data, config);
  }
}

const factory = new HttpServiceFactory();
export const chatService = new ChatService(factory.createAuthHttpService());
