import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { HttpServiceFactory } from "../../index";
import { IAIChatbotPageData } from "../../../types/services/ai-chatbot.types";

export class AdminServicesAiChatbotService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAiChatbotServicePage() {
    return this.httpService.get<IAIChatbotPageData>("api/service/ai-chatbot");
  }

  public updateAiChatbotServicePage(data: IAIChatbotPageData) {
    return this.httpService.put("api/service/ai-chatbot", data);
  }
}

const factory = new HttpServiceFactory();
export const adminAiChatbotService = new AdminServicesAiChatbotService(
  factory.createAuthHttpService()
);
