import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IContactPageData } from "../../types/Admin/AdminContact.types";

interface IHistoryData {
  d: object[];
  t: string;
  o: string;
}

export class AdminHistoryService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getHistory(path: string) {
    return this.httpService.get<IHistoryData[]>(`api/history/${path}`);
  }

  public getSectionHistory(path: string) {
    return this.httpService.get<IContactPageData[]>(`api/history/${path}`);
  }
}

const factory = new HttpServiceFactory();
export const adminHistoryService = new AdminHistoryService(
  factory.createAuthHttpService()
);
