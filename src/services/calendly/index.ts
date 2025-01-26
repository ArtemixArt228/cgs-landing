import axios from "axios";
import { HttpServiceFactory } from "../index";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";

export class CalendlyService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getGoogleMeetEventUri(calendlyUri: string) {
    return axios.get(calendlyUri, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CALENDLY_TOKEN}`,
      },
    });
  }
}

const factory = new HttpServiceFactory();
export const calendlyService = new CalendlyService(
  factory.createAuthHttpService()
);
