import { IHttpConfig } from "../../types/Admin";
import {
  IAssistantMessageResponse,
  IAssistantChat,
  IUserMessage,
} from "../../types/ai-assistant.types";
import { IAiAssistantData } from "../../types/services/ai-chatbot.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AssistantService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public startNewChat(config?: IHttpConfig): Promise<IAssistantChat | void> {
    return this.httpService.get("api/assistant/start", config);
  }
  public sendMessageToChat(
    data: IUserMessage,
    config?: IHttpConfig
  ): Promise<IAssistantMessageResponse | void> {
    return this.httpService.post("api/assistant/chat", data, config);
  }

  public async streamMessageToChat(
    data: IUserMessage,
    onMessage: (message: string) => void,
    onOpen: () => void,
    onClose?: () => void,
    onError?: (error?: unknown) => void
  ) {
    const { threadId, message } = data;
    const url = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/assistant/chat?threadId=${encodeURIComponent(
      threadId
    )}&message=${encodeURIComponent(message)}`;
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "text/event-stream",
        },
      });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }
      onOpen();
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let done = false;
        while (!done) {
          const { value, done: streamDone } = await reader.read();
          done = streamDone;
          const chunk = decoder.decode(value, { stream: true });
          onMessage(chunk);
        }
        onClose && onClose();
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  }

  public getAssistantData() {
    return this.httpService.get<IAiAssistantData>("api/assistant/info");
  }

  public getAssistantConfigData() {
    return this.httpService.get<IAiAssistantData>("api/assistant/config");
  }

  public updateAssistantConfigData(data: IAiAssistantData) {
    return this.httpService.put("api/assistant/config", data);
  }
}

const factory = new HttpServiceFactory();
export const assistantService = new AssistantService(
  factory.createAuthHttpService()
);
