import {
  IEstimationFormPages,
  IMenuOption,
} from "../types/Admin/AdminEstimationForm.types";

export const questionValidation = (
  currentPage: number,
  pageValue: IMenuOption,
  currentQuestion: number,
  pages: IEstimationFormPages
) => {
  if (!pageValue) {
    return null;
  }

  if (currentPage === pageValue.index) {
    return pages.pages[pageValue.index].questions
      .slice(0, currentQuestion)
      .map((el, i) => {
        return {
          title: `Question ${i + 1}`,
          id: el.questionKey ?? "",
          index: i,
        };
      });
  }
  return pages.pages[pageValue.index].questions.map((el, i) => {
    return {
      title: `Question ${i + 1}`,
      id: el.questionKey ?? "",
      index: i,
    };
  });
};

export const pagesValidation = (
  currentQuestion: number,
  pages: IEstimationFormPages,
  currentPage: number
) => {
  if (currentQuestion === 0) {
    return pages.pages.slice(0, currentPage).map((el, i) => {
      return {
        title: `Page ${i + 1}`,
        id: el._id,
        index: i,
      };
    });
  }
  return pages.pages.slice(0, currentPage + 1).map((el, i) => {
    return {
      title: `Page ${i + 1}`,
      id: el._id,
      index: i,
    };
  });
};
