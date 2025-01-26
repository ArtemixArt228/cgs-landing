import { EnhancedWithAuthHttpService } from "../../../../services/httpAuth.service";
import { HttpServiceFactory } from "../../../../services";

import {
  ISwapCvProjectsData,
  ISwapData,
} from "../../../../types/Admin/Response.types";
import { CvData, ICvPageData } from "../../types";

export class CvAdminService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getCvPage() {
    return this.httpService.get<ICvPageData>("api/devs-info");
  }

  public updateCvPage(data: ICvPageData) {
    return this.httpService.put("api/devs-info", data);
  }

  public getCv() {
    return this.httpService.get<CvData[]>("api/devs-info/cv");
  }

  public getCvById(id: string) {
    return this.httpService.get<CvData[]>(`api/devs-info/cv/${id}`);
  }

  public postCv(cv: CvData) {
    return this.httpService.post(`api/devs-info/cv`, cv);
  }

  public updateById(updatedCv: CvData) {
    return this.httpService.put(`api/devs-info/cv/${updatedCv._id}`, updatedCv);
  }

  public deleteById(id: string) {
    return this.httpService.delete(`api/devs-info/cv/${id}`);
  }

  public swapCvs(swapData: ISwapData) {
    return this.httpService.put(`api/devs-info/swap`, swapData);
  }

  public swapCvProjects(swapData: ISwapCvProjectsData) {
    return this.httpService.put(`api/devs-info/swap-projects`, swapData);
  }
}

const factory = new HttpServiceFactory();
export const cvAdminService = new CvAdminService(
  factory.createAuthHttpService()
);
