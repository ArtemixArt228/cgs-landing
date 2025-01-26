import { IDataVacancyResponse } from "./Response.types";

export interface IImageBlock {
  image: { url: string };
  title?: string;
}

export interface VacancyProps {
  data: IDataVacancyResponse | undefined;
  isLoading: boolean;
}
