import {
  IDataCareersResponse,
  IVacancies,
} from "../../types/Admin/Response.types";
import { IVacancyMail } from "../../types/Mail.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminCareersService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCareersPage() {
    return this.httpService.get<IDataCareersResponse>("api/career");
  }

  public deleteTicketAndVacancy(id: string) {
    return this.httpService.delete(`api/career/delete/${id}`);
  }

  public updateCareersPage(data: IDataCareersResponse) {
    return this.httpService.put("api/career", data);
  }

  public addTicketCareersPage(data: IVacancies) {
    return this.httpService.put("api/career", data);
  }

  public mailForm(data: IVacancyMail) {
    return this.httpService.post("api/career/mail", data);
  }

  public uploadCV(data: FormData) {
    return this.httpService.post("api/career/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}

const factory = new HttpServiceFactory();
export const adminCareersService = new AdminCareersService(
  factory.createAuthHttpService()
);
