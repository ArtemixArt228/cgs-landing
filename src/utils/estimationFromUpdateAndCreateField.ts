import { IFormData } from "../types/EstimationForm.types";
import { ChangeEvent } from "react";
import { getTextFromHtml } from "./getTextFromHtml";

export const updateField = (
  prevState: IFormData,
  indexOfAnswer: number,
  e: ChangeEvent<HTMLInputElement>
) => {
  return prevState.clientAnswers.map((clientAnswer, index) => {
    return index === indexOfAnswer
      ? {
          ...clientAnswer,
          selectedOptions: [{ text: e.target.value }],
        }
      : clientAnswer;
  });
};

export const createField = (
  prevState: IFormData,
  indexOfAnswer: number,
  e: ChangeEvent<HTMLInputElement>,
  title: string,
  questionKey: string,
  currentPage: number,
  required: boolean,
  optionsType: string
) => {
  return [
    ...prevState.clientAnswers,
    {
      questionTitle: getTextFromHtml(title),
      questionKey: questionKey,
      pageIndex: currentPage as number,
      required: required,
      optionsType: optionsType,
      selectedOptions: [{ text: e.target.value }],
    },
  ];
};
