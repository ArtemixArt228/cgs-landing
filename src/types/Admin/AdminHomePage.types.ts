import { ITestimonial } from "../Components.types";
import { IFooterBlock, IMetaBlock } from "./Response.types";
import { ISuccessCase } from "./AdminServices.types";
import { IFaqBlock } from "../Services.types";

export interface IHomeData {
  data: IHomePageResponse | undefined;
}

export interface IHighDemandBlock {
  text: string;
  textContact: string;
  link: string;
  image: {
    url: string;
  } | null;
}

export interface IHeroSectionBlock {
  title: string;
  subtitle: string;
  button: string;
  buttonLink: string;
  whatsAppLink: string;
  telegramLink: string;
  image: { url: string } | null;
}

export interface ITestimonialsBlock {
  title: string;
  testimonials: ITestimonial[];
}

export interface IBadgesBlock {
  badges: {
    image: { url: string } | null;
    link: string;
  }[];
}

export interface ILogosBlock {
  images: { url: string }[];
}

export interface IWhyDoesItHappenBlock {
  title: string;
  subtitle: string;
  reasons: {
    title: string;
    image: {
      url: string;
    };
  }[];
}

export interface IHowDoWeSolveItBlock {
  title: string;
  solutions: {
    subtitle: string;
    text: string;
  }[];
}

export interface ITheMostSuccessfulCasesBlock {
  title: string;
  successCases: ISuccessCase[];
  footer: {
    amount: string;
    amountDescription: string;
    additionalText: string;
  };
}

export interface ICalendlyPopupBlock {
  title: string;
  description: string;
  buttonText: string;
}

export interface IHomePageResponse {
  HighDemandBlock: IHighDemandBlock;
  HeroSectionBlock: IHeroSectionBlock;
  TestimonialsBlock: ITestimonialsBlock;
  WhyDoesItHappenBlock: IWhyDoesItHappenBlock;
  HowDoWeSolveItBlock: IHowDoWeSolveItBlock;
  TheMostSuccessfulCasesBlock: ITheMostSuccessfulCasesBlock;
  BadgesBlock: IBadgesBlock;
  LogosBlock: ILogosBlock;
  FaqBlock: IFaqBlock;
  FooterBlock: IFooterBlock;
  EditInformationBlock: any;

  CalendlyPopupBlock: ICalendlyPopupBlock;
  meta: IMetaBlock;
}
