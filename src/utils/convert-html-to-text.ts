export const convertHtmlToText = (html: string) =>
  html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
