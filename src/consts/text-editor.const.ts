import SetOptions from "suneditor-react/dist/types/SetOptions";

export const BASIC_OPTIONS: SetOptions = {
  minHeight: "170px",
  font: ["NAMU", "NAMU-1600", "NAMU-1750", "NAMU-1850", "Open Sans"],
  defaultStyle: "font-family: NAMU;",
  linkRelDefault: {
    default: undefined,
    check_new_window: "nofollow noopener",
  },
  iframe: false,
  buttonList: [
    [
      "formatBlock",
      "font",
      "fontSize",
      "fontColor",
      "align",
      "paragraphStyle",
      "blockquote",
    ],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["list"],
    ["link", "image", "video"],
    ["codeView"],
  ],
};
export const TITLE_EDITOR_OPTIONS: SetOptions = {
  minHeight: "170px",
  font: ["NAMU", "NAMU-1600", "NAMU-1750", "NAMU-1850", "Open Sans"],
  defaultStyle: "font-family: NAMU;",
  linkRelDefault: {
    default: undefined,
    check_new_window: "nofollow noopener",
  },
  iframe: false,
  buttonList: [
    ["formatBlock", "font", "fontSize", "fontColor", "align", "paragraphStyle"],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["list"],
    ["link"],
    ["codeView"],
  ],
};
