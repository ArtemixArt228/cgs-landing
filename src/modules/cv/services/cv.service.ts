import { EnhancedWithAuthHttpService } from "../../../services/httpAuth.service";
import { HttpServiceFactory } from "../../../services";

import { ICvPageData, CvData, ICvFilters } from "../types";

export class CvService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getCvPage() {
    return this.httpService.get<ICvPageData>("api/devs-info");
  }

  public getPaginatedAndFilteredCvs(
    filters: ICvFilters,
    page: number,
    limit: number
  ) {
    return this.httpService.get<CvData[]>(
      `api/devs-info/cvs?category=${filters.category}&search=${filters.search}&page=${page}&limit=${limit}`
    );
  }

  public getCvById(id: string) {
    return this.httpService.get<CvData[]>(`api/devs-info/cv/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const cvService = new CvService(factory.createAuthHttpService());
