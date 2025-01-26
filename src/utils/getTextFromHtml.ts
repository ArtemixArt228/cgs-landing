export const getTextFromHtml = (str: string): string => {
  if (typeof window === "undefined") {
    // Node.js environment (SSR)
    return str.replace(/<[^>]*>/g, "").trim();
  } else {
    // Browser environment
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }
};
