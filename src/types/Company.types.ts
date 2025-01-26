import React, { MouseEvent, RefObject } from "react";

import {
  IDataCareersResponse,
  IMetaBlock,
  ITicket,
} from "./Admin/Response.types";

export interface IQuestion {
  id: string;
  question: string;
  image: { url: string } | null;
  text: string;
}

export interface IQuestionData {
  questions: IQuestion[];
  meta: IMetaBlock;
}
export interface IFaqData {
  questions: IQuestion[];
}

export interface ITicketModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  ref: React.RefObject<HTMLDivElement>;
}

export interface ICareersDropdown {
  setFilter: (tag: string) => void;
  filter: string | null;
  positions: string[];
  dropdownName: string;
  isHeader?: boolean;
  isTag?: boolean;
  type?: "button" | "submit";
  setEnable?: (val: boolean) => void;
  className?: string;
}

export interface IFieldProps {
  name: string;
  label: string;
  handleChange: any;
  type?: string;
}

export interface IField2Props {
  name: string;
  label: string;
  type?: string;
}

export interface FormProps {
  positions: string[];
  data?: IDataCareersResponse;
  ourRef: RefObject<HTMLDivElement>;
}

export interface FormState {
  name: string;
  contact: string;
  cvlink: string;
  position: string;
  cvfile: File | string;
}

export interface ICareersForm {
  positions: string[];
  data?: IDataCareersResponse;
  ourRef: RefObject<HTMLDivElement>;
}

export interface ITicketProps {
  ticket: ITicket;
  scrollTo?: () => void;
  className?: string;
  isAdminPanel?: boolean;
}

export interface IQuestionProps {
  title: string;
  image: { url: string } | null;
  content: string;
  isHomepage?: boolean;
  className?: string;
}
