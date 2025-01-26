import { IMetaBlock } from "./Response.types";

export interface IContactUsPageData {
  calendlyLink: string;
  generalStepsTitle: string;
  provideContactDetailsStep: {
    stepTitle: string;
    stepDescription: string;
    generalFormTitle: string;
    text: string;
    buttonText: string;
    mobileText: string;
  };
  bookCallStep: {
    stepTitle: string;
    stepDescription: string;
    generalFormTitle: string;
    text: string;
  };
  callDetailsStep: {
    stepTitle: string;
    stepDescription: string;
    generalFormTitle: string;
    buttonText: string;
  };
  cancelWindow: {
    title: string;
    description: string;
    buttonText: string;
  };
  meta: IMetaBlock;
}

export interface IContactUsResponse {
  data: IContactUsPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<IContactUsResponse>;
}
