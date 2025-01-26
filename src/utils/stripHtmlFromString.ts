export const stripHtmlFromString = (str: string) => {
  return str.replace(/<[^>]+>/g, "");
};
