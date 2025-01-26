import { Dispatch, SetStateAction } from "react";

export interface Option {
  text: string;
  optionKey: string;
}

export interface Question {
  questionKey: string;
  title: string;
  isRequired: boolean;
  isSplitColumns: boolean;
  isAbilityToAttachFile: boolean;
  isHiddenText: boolean;
  hiddenText: string;
  optionsType: string;
  options: Option[];
  conditionsForAppearance?: any;
}

export interface Page {
  _id: string;
  pageNumber: string;
  pollTableId: string;
  title: string;
  buttonName: string;
  questions: Question[];
  __v: number;
}

export interface EstimationField {
  name: string;
  attachFile?: boolean;
  index?: number;
  questionKey: string;
  title: string;
  split?: boolean;
  options: Option[];
  currentPage: number;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  formData?: IFormData;
  setAttachFiles?: Dispatch<SetStateAction<IFormFileData[]>>;
  attachFilesArr?: IFormFileData[];
  touched: boolean;
  required: boolean;
  optionsType: string;
  optional?: boolean;
}

export interface EstimationData {
  pageCount: number;
  pageNumber: number;
  page: Page;
}

export interface SelectedOption {
  text: string;
}

export interface ClientAnswer {
  questionKey: string;
  pageIndex: number;
  required: boolean;
  questionTitle: string;
  optionsType: string;
  selectedOptions: SelectedOption[];
}
export interface IFormData {
  formTitle: string;
  clientName: string;
  clientEmail: string;
  clientAnswers: ClientAnswer[];
}

export interface ISendData {
  formTitle: string;
  clientName: string;
  clientEmail: string;
  clientAnswers: ClientAnswer[];
  _id: string;
  attachedFiles: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IFormFileData {
  index: string;

  file: File;
}
