import { IMetaBlock } from "./Response.types";
import { IImage } from "./Admin.types";

export interface IEmail {
  popup: string;
  email: string;
}

export interface IMessenger extends IImage {
  name: string;
  link: string;
}

export interface ISocial extends IImage {
  link: string;
}

export interface IAbout extends IImage {
  link: string;
}

export interface IContactPageData {
  header: {
    lastModified?: string;
    title: string;
    placeholders: {
      name: string;
      email: string;
      service: string;
    };
    button: {
      name: string;
      calendly: string;
    };
  };
  emails: {
    lastModified?: string;
    subtitle: string;
    email: IEmail[];
  };
  messengers: {
    lastModified?: string;
    subtitle: string;
    messenger: IMessenger[];
  };
  socials: {
    lastModified?: string;
    subtitle: string;
    social: ISocial[];
  };
  abouts: {
    lastModified?: string;
    subtitle: string;
    about: IAbout[];
  };
  location: {
    lastModified?: string;
    map: IImage;
    pointer: IImage;
    address: string;
  };
  meta: IMetaBlock;
}

export interface IContactResponse {
  data: IContactPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<IContactResponse>;
}
