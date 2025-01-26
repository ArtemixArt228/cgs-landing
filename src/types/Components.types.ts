import React from "react";
import { IImage } from "./Admin/Admin.types";

export interface ILoaderProps {
  active?: boolean;
  children?: React.ReactNode;
  text?: string;
  isContentLoader?: boolean;
  className?: string;
  isPortrait?: boolean;
}

export interface IPaginationBar {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollFunction: () => void;
}

export interface ITestimonial {
  _id?: string;
  slideTitle: string;
  stars: number;
  name: string;
  company: string;
  videoUrl: string;
  linkedin: string;
  tiktok: string;
  slideBanner: IImage;
  text: string;
  link: string;
}

export interface ITestimonialsSlideProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subtitle: string;
  name: string;
  text: string;
  linkedin: string;
  tiktok: string;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  slideNum: number;
  testimonialImg: string;
  stars: number;
  className?: string;
}

export interface IMobileLine {
  grad1?: string;
  grad2?: string;
  ind: number;
}
