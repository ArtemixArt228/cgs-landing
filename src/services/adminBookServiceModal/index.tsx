import { IBookHeroModalData, IBookModalData } from "../../types/Mail.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export class AdminBookService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public mailForm(data: IBookModalData) {
    return this.httpService.post("api/calendly/book-call", data);
  }

  public mailHeroForm(data: IBookHeroModalData) {
    return this.httpService.post("api/calendly/hero-book-call", data);
  }

  public createCalendlyPipedriveLead(
    name: string,
    email: string,
    phone?: string,
    description?: string,
    utmParams?: UTMParams,
    files?: File[]
  ): Promise<{ id: string }> {
    const formData = new FormData();

    files?.forEach((file) => {
      formData.append("file", file);
    });

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || "");
    formData.append("description", description || "");
    formData.append("utmParams", JSON.stringify(utmParams));

    return this.httpService.post("api/calendly/pipedrive-calendly", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }) as Promise<{ id: string }>;
  }

  public updateCalendlyPipedriveLead(
    id: string,
    introCallStartTime: string,
    introCallEndTime: string
  ): Promise<{ activity_id: string }> {
    return this.httpService.put("api/calendly/pipedrive-calendly", {
      id,
      introCallStartTime,
      introCallEndTime,
    }) as Promise<{ activity_id: string }>;
  }

  public cancelCalendly(id: string, eventId: string, activityId: string) {
    return this.httpService.put("api/calendly/cancel-call", {
      id,
      eventId,
      activityId,
    });
  }

  public setReminders(email?: string, phone?: string, callTime?: string) {
    return this.httpService.post("api/calendly/create-reminders", {
      email,
      phone,
      callTime,
    });
  }
}

const factory = new HttpServiceFactory();
export const adminBookService = new AdminBookService(
  factory.createAuthHttpService()
);
