import React, { Dispatch, SetStateAction } from "react";

import { IImage } from "./Admin.types";
import { IMetaBlock } from "./Response.types";
import { ITechnologies } from "./technologies.types";
import { Gender } from "../../consts";

export interface ITechnology {
  _id?: string;
  name: string;
  image: {
    url: string;
  };
  main: boolean;
}

export interface ICategory {
  name: string;
  description: string;
}

export interface IGeneral {
  title: string;
  aboutProject: string;
  country: string;
  industry: string;
  web_link: string;
  ios_link: string;
  android_link: string;
  NDA: boolean;
  tags: string[];
}

export interface IPlatform {
  ios: boolean;
  android: boolean;
  web: boolean;
}

export interface IProjectOverview {
  description: string;
  budget: string;
  releaseDate: number;
  timeframe: number;
  teamSize: number;
  platform: IPlatform;
  technologies: ITechnology[];
  showCaseTitle: string;
}

export interface IProblemAndSolutionItem {
  solutionImage: IImage;
  problemTitle: string;
  problemSubtitle: string;
  solutionDescription: string;
  _id?: string;
}
export interface IProblemAndSolution {
  description: string;
  problemAndSolution: IProblemAndSolutionItem[];
}

export interface IDiscoverInAction {
  actionImage: {
    image: {
      url: string;
    };
  };
  description: string;
}

export interface IConceptToCompletionItem {
  subtitle: string;
  text: string;
  icon: {
    image: {
      url: string;
    } | null;
  };

  _id?: string;
}

export interface IConceptToCompletion {
  description: string;
  item: IConceptToCompletionItem[];
}

export interface IFeature {
  featureImage: IImage;
  title: string;
  description: string;
  _id?: string;
}

export interface IFeaturesWeImplemented {
  features: IFeature[];
}
export interface IAiSolutionsToAchieveGoalItem extends IFeature {
  featureTitle: string;
}
export interface IAiSolutionsToAchieveGoal {
  includeBlock: boolean;
  title: string;
  solutions: IAiSolutionsToAchieveGoalItem[];
}

export interface IClientAboutUs {
  clientImage: IImage;
  portfolioLink?: string;
  name: string;
  company: string;
  gender: Gender;
  stars: number;
  linkedin: string;
  video: IImage;
  text: string;
}

export interface IImpactCreatedItem {
  amount: string;
  description: string;
  aditionalText: string;
  _id?: string;
}

export interface IImpactCreated {
  items: IImpactCreatedItem[];
}

export interface IDesignOverviewCard {
  _id?: string;
  image: { url?: string } | null;
  imageText?: string;
  title: string;
  description: string;
}
export interface IDesignOverviewSection {
  title: string;
  description: string;
  cards: IDesignOverviewCard[];
}
export interface IPortfolioReview {
  _id?: string;
  __v?: number;
  sort?: number;
  imageBanner: IImage;
  imageProjectBanner: IImage;
  categories: string[];
  general: IGeneral;
  aiSolutionsToAchieveGoal: IAiSolutionsToAchieveGoal;
  projectOverview: IProjectOverview;
  problemsAndSolutions: IProblemAndSolution;
  discoverInAction: IDiscoverInAction;
  conceptToCompletion: IConceptToCompletion;
  featuresWeImplemented: IFeaturesWeImplemented;
  clientAboutUs: IClientAboutUs;
  impactCreated: IImpactCreated;
  designOverview: {
    includeBlock: boolean;
    fontSection: IDesignOverviewSection;
    colorSection: IDesignOverviewSection;
    accessibilitySection: IDesignOverviewSection;
  };
  technologyNew: {
    name: string;
    image: {
      url: string;
    };
    main: boolean;
  };
}

export interface IPortfolioPageData {
  categories: ICategory[];
  industries: string[];
  industryNew: string;
  technologyNew: ITechnology;
  meta: IMetaBlock;
  cta: ICTAData;
  individualProjectPage: IIPPData;
  SubtitleBlock: { title: string };
}

export interface IPortfolioResponse {
  data?: IPortfolioPageData;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioResponse>;
}

export interface IPaginationProps {
  reviewsData: IPortfolioReviewsDataResponse | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollFunction: () => void;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaginationTriggered: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPortfolioReviewsDataResponse {
  reviews: IPortfolioReview[];
  currentPage: number;
  totalPages: number;
}

export interface IPortfolioReviewsResponse {
  data?: IPortfolioReviewsDataResponse;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
}

export interface IPortfolioProjectResponse {
  data?: IPortfolioReview;
  isLoading: boolean;
  isFetching: boolean;
}

export interface IAddAndEditProps {
  scrollFunc: () => void;
  current: number;
  isNewStatus: boolean;
  setIsNewStatus: Dispatch<SetStateAction<boolean>>;
  reviews: IPortfolioReview[] | undefined | void;
  technologies: ITechnologies | undefined | void;
}

export interface ICallToActionProps {
  initValues?: ICTAData;
}
export interface ICTAData {
  image: {
    url: string;
  } | null;
  subtitle: string;
  text: string;
  button: string;
  buttonLink: string;
}

export interface IIPPData {
  additionalProjects: string;
  cta: string;
  button: string;
  buttonLink: string;
}
