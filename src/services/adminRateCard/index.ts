import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IRateCard, IService } from "../../types/Admin/AdminRateCard.types";

export class AdminRateCardService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getCards() {
    return this.httpService.get<IRateCard>(`api/rate-card`);
  }

  public updateTitle(title: string) {
    return this.httpService.put(`api/rate-card`, { title });
  }

  public createRateCardService(data: IService) {
    return this.httpService.post(`api/rate-card/service`, data);
  }

  public updateRateCardService(data: IService) {
    return this.httpService.put(`api/rate-card/${data._id}`, data);
  }

  public deleteRateCardService(id: string) {
    return this.httpService.delete(`api/rate-card/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const adminRateCardService = new AdminRateCardService(
  factory.createAuthHttpService()
);
