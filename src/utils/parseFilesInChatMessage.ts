import { ICustomFile } from "../types/SupportChat.types";

export const parseFilesInChatMessage = (
  custom_json?: string | object
): ICustomFile[] => {
  const parsed =
    typeof custom_json == "string" && custom_json
      ? JSON.parse(custom_json)
      : typeof custom_json == "object"
      ? custom_json
      : {};
  return parsed.files ?? [];
};
