import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

import {
  ITechnologies,
  ITechnology,
} from "../../types/Admin/technologies.types";

export class TechnologiesService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getTechnologies() {
    return this.httpService.get<ITechnologies>("api/technologies");
  }

  public addTechnology(technologyElem: ITechnology) {
    return this.httpService.post(`api/technologies`, {
      technology: technologyElem,
    });
  }
  public removeTechnology(id: string) {
    return this.httpService.delete(`api/technologies/technology/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const technologiesService = new TechnologiesService(
  factory.createAuthHttpService()
);
