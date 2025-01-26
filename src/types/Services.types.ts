import {
  IServiceBlockItem,
  ITechnologyBlockItem,
} from "./Admin/AdminServices.types";

export interface IShowCaseProps {
  projects?: string[];
}

export interface IServicesClassnameProps {
  className?: string;
}

export interface IServicesShowcaseProps {
  withoutShowcase?: boolean;
}

export interface IHeaderFooterServicesProps {
  title: string;
  text?: string;
  btnText: string;
  btnLink: string;
  className?: string;
}

export interface ILinedText {
  text: string;
  position: "top" | "bottom";
  wrapperHeight: number;
  ind: number;
  isScrolled: boolean;
}

export interface IHeroSectionProps {
  title: string;
  text: string;
  button: string;
  buttonLink: string;
  image: { url: string } | null;
}

export interface ITechSectionProps {
  title: string;
  text: string;
  image: {
    url: string;
  } | null;
  technologies: ITechnologyBlockItem[];
}

export interface IOurServicesSectionProps {
  title: string;
  services: IServiceBlockItem[];
}

export interface IHowToMakeStartupSectionProps {
  title: string;
  text: string;
  videoLink: string;
  button: string;
  buttonLink: string;
  image: {
    url: string;
  } | null;
}
export interface IFaqBlock {
  countOfQuestions: number;
}
