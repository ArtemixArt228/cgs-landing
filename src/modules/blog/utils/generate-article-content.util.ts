import { cleanDecorativeHeadingTags } from "../../../utils/cleanDecorativeTextInTOC";

export const generateArticleContent = (htmlContent: string): string => {
  if (typeof DOMParser === "undefined") {
    return "<ul></ul>";
  }

  const cleanedHTML = cleanDecorativeHeadingTags(htmlContent);

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanedHTML, "text/html");

  const tocContainer = document.createElement("ul");

  const headers = doc.querySelectorAll("h2, h3, h4, h5, h6");

  headers.forEach((headerElement, key) => {
    const header = headerElement as HTMLElement;
    const headerText = header.innerText;

    const headerItem = document.createElement("li");
    headerItem.classList.add(...["content-list-item", "content-group"]);
    headerItem.innerHTML = `<a href="#${header.id}" title="${headerText}">${
      key + 1
    }. ${headerText}</a>`;
    tocContainer.appendChild(headerItem);

    const headerList = document.createElement("ul");
    headerItem.appendChild(headerList);
  });
  return tocContainer.outerHTML;
};
