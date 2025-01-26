import { IHttpClient, IHttpConfig } from "../types/Admin";
import { storeKeys } from "../consts";
import { HttpService } from "./http.service";

export class EnhancedWithAuthHttpService implements IHttpClient {
  constructor(private httpService: HttpService) {}

  public get<R>(url: string, config: IHttpConfig = {}): Promise<R | void> {
    return this.httpService.get<R>(url, this.attachAuthHeader(config));
  }
  public post<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {}
  ): Promise<R | void> {
    return this.httpService.post<R, D>(
      url,
      data,
      this.attachAuthHeader(config)
    );
  }
  public put<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {}
  ): Promise<R | void> {
    return this.httpService.put<R, D>(url, data, this.attachAuthHeader(config));
  }
  public patch<R, D>(
    url: string,
    data: D,
    config: IHttpConfig = {}
  ): Promise<R | void> {
    return this.httpService.patch<R, D>(
      url,
      data,
      this.attachAuthHeader(config)
    );
  }
  public delete<R>(url: string, config: IHttpConfig = {}): Promise<R | void> {
    return this.httpService.delete<R>(url, this.attachAuthHeader(config));
  }
  private attachAuthHeader(config: IHttpConfig): IHttpConfig {
    return {
      ...config,
      headers: { ...config.headers, ...this.populateTokenToHeaderConfig() },
    };
  }

  private populateTokenToHeaderConfig(): object {
    return (
      (typeof window !== "undefined" && {
        Authorization: `Bearer ${localStorage.getItem(storeKeys.token)}`,
      }) || { Authorization: null }
    );
  }
}
