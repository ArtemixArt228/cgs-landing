import { IPortfolioReview } from "./Admin/AdminPortfolio.types";

export interface ICaseStudyModalData {
  title: string;
  description: string;
  subtitle?: string;
  imageUrl: string;
}

export interface IBlockProps {
  project: IPortfolioReview | undefined;
  isMobile?: boolean;
  isDesktop?: boolean;
  isSmallDesktop?: boolean;
}

export interface IAiSolutionsListItemProps {
  modalData: ICaseStudyModalData | null;
  setModalData(object: ICaseStudyModalData): void;
  setIsModalOpen(value: boolean): void;
  itemCounter: number;
  className: string;
  icon: string;
  altText: string;
  title: string;
  description: string;
  iconSize: number;
}
