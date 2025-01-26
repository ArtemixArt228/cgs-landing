import { useMutation } from "@tanstack/react-query";
import { adminGlobalService } from "../services/adminHomePage";
import { IHttpConfig } from "../types/Admin";
import { chatService } from "../services/chat";

export const useFileUpload = (config: IHttpConfig) => {
  const uploadFile = useMutation(async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await chatService.uploadFile(formData, config);
    return response;
  });

  const deleteFile = useMutation((url: string) =>
    adminGlobalService.deleteFile(url)
  );

  return { uploadFile, deleteFile };
};
