/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFaqBlock } from "../Services.types";
import { IImage } from "../services/ai-chatbot.types";
import { IMetaBlock } from "./Response.types";

export interface IServiceFeature {
  _id?: string;
  title: string;
  subtitle: string;
  imageWeb: { image: { url: string } | null };
  imageTablet?: { image: { url: string } | null };
  imageMobile?: { image: { url: string } | null };
  descriptionModal?: string;
  imageModal?: { image: { url: string } | null };
  image?: IImage;
}

export interface IServiceBlockItem {
  _id?: string;
  text: string;
  subtitle: string;
  icon: { image: { url: string } };
}

export interface ITechnologyBlockItem {
  _id?: string;
  title: string;
  image: { url: string } | null;
}

export interface IPricingBlock {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: { url: string } | null;
}

export interface ISuccessCase {
  _id?: string;
  amount: string;
  amountDescription: string;
  additionalText: string;
  link: string;
  logo: { image: { url: string } | null };
  image: { url: string } | null;
}

export interface IUpcomingProduct {
  _id?: string;
  title: string;
  text: string;
  videoLink: string;
  image: { url: string } | null;
}

export interface IServiceAi {
  _id?: string;
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string } | null;
  };
  featuresBlock: {
    features: IServiceFeature[];
  };
  howToMakeStartupProfitable: {
    title: string;
    text: string;
    videoLink: string;
    button: string;
    buttonLink: string;
    image: { url: string } | null;
  };
  servicesBlock: {
    title: string;
    services: IServiceBlockItem[];
  };
  technologiesBlock: {
    title: string;
    text: string;
    image: { url: string } | null;
    technologies: ITechnologyBlockItem[];
  };
  upcomingProducts: {
    title: string;
    products: IUpcomingProduct[];
  };
  successCasesBlock: {
    title: string;
    footer: {
      amount: string;
      amountDescription: string;
      additionalText: string;
    };
    successCases: ISuccessCase[];
  };
  pricingBlock: IPricingBlock;
  faqBlock: IFaqBlock;
  meta?: IMetaBlock;
}

export interface IServicePage extends IServiceAi {}
