import { getTextFromHtml } from "./getTextFromHtml";
import {
  additionalEstimationFormQuestion,
  conditionsToAppearanceQuestion,
} from "../consts";
import { IFormData, Question } from "../types/EstimationForm.types";

export const notAnAdditionalQuestion = (question: string) => {
  return !additionalEstimationFormQuestion.some((item) => item === question);
};

export const removeAdditionalQuestionsCheckbox = (
  question: Question,
  formData: IFormData,
  index: number
) => {
  const clientQuestionAnswer = formData.clientAnswers?.find(
    (item) =>
      item.questionTitle === conditionsToAppearanceQuestion[index].question
  );
  const appearanceCondition = clientQuestionAnswer?.selectedOptions.some(
    (field) => field.text === conditionsToAppearanceQuestion[index].answer
  );

  const additionalQuestion = formData.clientAnswers.findIndex(
    (item) => item.questionTitle === additionalEstimationFormQuestion[index]
  );

  if (
    notAnAdditionalQuestion(getTextFromHtml(question.title)) &&
    !appearanceCondition &&
    additionalQuestion > -1
  ) {
    const filteredArray = formData.clientAnswers.filter(
      (answer) =>
        answer.questionTitle !== additionalEstimationFormQuestion[index]
    );
    formData.clientAnswers = filteredArray;
  }
};

export const removeAdditionalQuestionsRadio = (
  question: Question,
  formData: IFormData,
  index: number
) => {
  if (
    notAnAdditionalQuestion(getTextFromHtml(question.title)) &&
    formData.clientAnswers?.find(
      (item) =>
        item.questionTitle === conditionsToAppearanceQuestion[index].question
    )?.selectedOptions[0].text !==
      conditionsToAppearanceQuestion[index].answer &&
    formData.clientAnswers.findIndex(
      (item) => item.questionTitle === additionalEstimationFormQuestion[index]
    ) > -1
  ) {
    const filteredArray = formData.clientAnswers.filter(
      (answer) =>
        answer.questionTitle !== additionalEstimationFormQuestion[index]
    );
    formData.clientAnswers = filteredArray;
  }
};

export const conditionToShowQuestionsCheckbox = (
  question: Question,
  formData: IFormData,
  index: number
) =>
  additionalEstimationFormQuestion[index] === getTextFromHtml(question.title) &&
  formData.clientAnswers
    .find(
      (item) =>
        item.questionTitle === conditionsToAppearanceQuestion[index].question
    )
    ?.selectedOptions.some(
      (field) => field.text === conditionsToAppearanceQuestion[index].answer
    );

export const conditionToShowQuestionsRadio = (
  question: Question,
  formData: IFormData,
  index: number,
  exception = false
) => {
  if (!exception)
    return (
      additionalEstimationFormQuestion[index] ===
        getTextFromHtml(question.title) &&
      formData.clientAnswers[
        formData.clientAnswers.findIndex(
          (item) =>
            item.questionTitle.trim() ===
            conditionsToAppearanceQuestion[index].question
        )
      ]?.selectedOptions[0].text ===
        conditionsToAppearanceQuestion[index].answer
    );

  return (
    additionalEstimationFormQuestion[index] ===
      getTextFromHtml(question.title) &&
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[index].question
      )
    ]?.selectedOptions[0].text !== conditionsToAppearanceQuestion[index].answer
  );
};
