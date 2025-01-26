import { urlPattern, urlWithTextPattern } from "../consts";

const containsLink = (text: string) => {
  return text.match(urlPattern);
};

export const makeLinksClickable = (text: string) => {
  const links = containsLink(text);
  if (links) {
    links.forEach((link) => {
      const formattedLink =
        '<a href="' + link + '" target="_blank">' + link + "</a>";
      text = text.replace(link, formattedLink);
    });
  }
  return text;
};

export const makeAllChatLinksClickable = (text: string) => {
  const textWithLinks = text.replace(
    urlWithTextPattern,
    (match, p1, p2, p3) => {
      if (p1) {
        const linkText = p2;
        const link = p3;
        return `<a href="${link}" target="_blank" rel="noreferrer">${linkText}</a>`;
      } else {
        return `<a href="${match}" target="_blank" rel="noreferrer">${match}</a>`;
      }
    }
  );
  return textWithLinks;
};
