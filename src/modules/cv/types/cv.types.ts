import React from "react";

import { IMetaBlock } from "../../../types/Admin/Response.types";
import { ITechnology } from "../../../types/Admin/technologies.types";

export interface ICvCta {
  title: string;
  buttonText: string;
  buttonLink: string;
}

export interface ICvPageData {
  title: string;
  categories: string[];
  roles: string[];
  cta: ICvCta;
  meta: IMetaBlock;
}

export interface ICvResponse {
  data: ICvPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<ICvResponse>;
}

interface CvCard {
  subtitle: string;
  stack: string[];
}

export interface CvLink {
  text: string;
  url: string;
}

export interface CvProject {
  projectName: string;
  role: string;
  date: string;
  startDate?: Date;
  endDate?: Date;
  summary: string;
  achievements: string[];
  links?: CvLink[];
  technology: ITechnology[];
}

export interface CvData {
  _id?: string;
  image: { url: string } | null;
  category: string;
  personal: {
    name: string;
    summary: string;
    role: string;
  };
  info: {
    title: string;
    content: {
      subtitle: string;
      text: string;
    }[];
  };
  skills: {
    title: string;
    card: CvCard[];
  };
  projects: {
    title: string;
    project: CvProject[];
  };
}

export interface ICvDataResponse {
  cvs: CvData[];
  currentPage: number;
  totalPages: number;
}

export interface IPaginationProps {
  cvData: ICvDataResponse | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollFunction: () => void;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPaginationTriggered: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICvFilters {
  search: string;
  category: string;
}
