import { IStepOptions } from "../types/Admin/Response.types";
import { getNested } from "./getNestedObjectByKeys";

export const count = (
  options: IStepOptions[],
  answers: string | string[],
  keys: string[]
) =>
  options
    .map((option) => {
      if (typeof answers === "string") {
        return option.label === answers && getNested(option, ...keys)
          ? getNested(option, ...keys)
          : 0;
      }
      return answers
        .map((answer) =>
          option.label === answer && getNested(option, ...keys)
            ? getNested(option, ...keys)
            : 0
        )
        .reduce((acc, curr) => (acc || 0) + (curr || 0), 0);
    })
    .reduce((acc, curr) => (acc || 0) + (curr || 0), 0);
