import * as Yup from "yup";
import { convertHtmlToText } from "../utils/convert-html-to-text";

export const htmlTextValidation = (
  blockName: string,
  blockNumber?: number,
  fieldName = "Text"
) => {
  const blockNameText = blockNumber ? `Block ${blockNumber}: ` : "";
  return Yup.string()
    .test(
      "has-text",
      `${blockNameText}${fieldName} for '${blockName}' must contain visible text.`,
      (value) => {
        if (!value) return false;
        const textContent = convertHtmlToText(value);
        return textContent.length > 0;
      }
    )
    .required(`${blockNameText}${fieldName} for '${blockName}' is required.`);
};
