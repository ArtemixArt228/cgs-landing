import { cleanDecorativeHeadingTags } from "../../../utils/cleanDecorativeTextInTOC";

const svgIcon = `
<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1V16C1 17.6569 2.34315 19 4 19H9" stroke="#8F8E93" stroke-linecap="round"/>
</svg>
`;

export const generateArticleContentTable = (htmlContent: string): string => {
  if (typeof DOMParser === "undefined") {
    return "<ul></ul>";
  }

  const cleanedHTML = cleanDecorativeHeadingTags(htmlContent);

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanedHTML, "text/html");

  const tocContainer = document.createElement("ul");
  let h2Counter = 0;
  let h3Counter = 0;
  let h4Counter = 0;
  let h5Counter = 0;
  let h6Counter = 0;

  const headers = doc.querySelectorAll("h2, h3, h4, h5, h6");
  let lastH3List: HTMLElement | null = null;
  let lastH4List: HTMLElement | null = null;
  let lastH5List: HTMLElement | null = null;
  let lastH6List: HTMLElement | null = null;

  headers.forEach((headerElement) => {
    const header = headerElement as HTMLElement;
    const headerText = header.innerText;

    if (header.tagName === "H2") {
      h2Counter++;
      h3Counter = 0;

      const h2Item = document.createElement("li");
      h2Item.classList.add(...["content-list-item", "content-group"]);
      h2Item.innerHTML = `<a href="#${header.id}" title="${headerText}">${h2Counter}. ${headerText}</a>`;
      tocContainer.appendChild(h2Item);

      const h3List = document.createElement("ul");
      h2Item.appendChild(h3List);

      lastH3List = h3List;
    } else if (header.tagName === "H3") {
      h3Counter++;

      const h3Item = document.createElement("li");
      h3Item.classList.add("content-list-item");
      h3Item.innerHTML = `<a href="#${header.id}" title="${headerText}">${svgIcon} ${h2Counter}.${h3Counter}. ${headerText}</a>`;
      lastH3List?.appendChild(h3Item);

      const h4List = document.createElement("ul");
      h3Item.appendChild(h4List);

      lastH4List = h4List;
    } else if (header.tagName === "H4") {
      h4Counter++;

      const h4Item = document.createElement("li");
      h4Item.classList.add("content-list-item");
      h4Item.innerHTML = `<a href="#${header.id}" title="${headerText}">${svgIcon} ${h2Counter}.${h3Counter}.${h4Counter}. ${headerText}</a>`;
      lastH4List?.appendChild(h4Item);

      const h5List = document.createElement("ul");
      h4Item.appendChild(h5List);

      lastH5List = h5List;
    } else if (header.tagName === "H5") {
      h5Counter++;

      const h5Item = document.createElement("li");
      h5Item.classList.add("content-list-item");
      h5Item.innerHTML = `<a href="#${header.id}" title="${headerText}">${svgIcon} ${h2Counter}.${h3Counter}.${h4Counter}.${h5Counter}. ${headerText}</a>`;
      lastH5List?.appendChild(h5Item);

      const h6List = document.createElement("ul");
      h5Item.appendChild(h6List);

      lastH6List = h6List;
    } else if (header.tagName === "H6") {
      h6Counter++;

      const h6Item = document.createElement("li");
      h6Item.classList.add("content-list-item");
      h6Item.innerHTML = `<a href="#${header.id}" title="${headerText}">${svgIcon} ${h2Counter}.${h3Counter}.${h4Counter}.${h5Counter}.${h6Counter}. ${headerText}</a>`;
      lastH6List?.appendChild(h6Item);
    }
  });
  return tocContainer.outerHTML;
};
