import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IEstimationFormPages,
  IUpdatePageBody,
} from "../../types/Admin/AdminEstimationForm.types";
import {
  EstimationData,
  IFormData,
  ISendData,
} from "../../types/EstimationForm.types";

export class AdminEstimationFormService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getPageData(page: string): Promise<void | EstimationData> {
    return this.httpService.get<EstimationData>(
      `api/poll-table/estimation/form/${page}`
    );
  }

  public createEstimationData(formData: IFormData): Promise<ISendData | void> {
    return this.httpService.post(`api/poll-table/submit`, formData);
  }

  public updateEstimationFormTitle(title: string) {
    return this.httpService.put(`api/poll-table/title`, { title });
  }

  public sendEstimationFormEmail(estimationEmail: FormData) {
    return this.httpService.post(
      `api/poll-table/upload-files`,
      estimationEmail,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  }

  public getPages() {
    return this.httpService.get<IEstimationFormPages>(
      `api/poll-table/estimation/form`
    );
  }
  public updatePageData(data: IUpdatePageBody) {
    return this.httpService.put(`api/poll-table/page`, data);
  }
}

const factory = new HttpServiceFactory();
export const adminEstimationFormService = new AdminEstimationFormService(
  factory.createAuthHttpService()
);
