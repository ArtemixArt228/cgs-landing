import { IMetaBlock } from "./Response.types";

export interface IFaqResponse {
  data: IFaqData | undefined;
  isLoading: boolean;
  refetch: () => Promise<IFaqResponse>;
}

export interface IQuestion {
  id: string;
  question: string;
  text: string;
  image: { url: string } | null;
}

export interface IFaqData {
  meta: IMetaBlock;
  questions: IQuestion[];
}

export interface IQuestionComponent {
  question: IQuestion;
  handleChange: (e?: string | React.ChangeEvent<any>) => void;
  questionName: string;
  questionText: string;
  addQuestion: (index: number) => void;
  deleteQuestion: (index: number) => void;
  index: number;
}
