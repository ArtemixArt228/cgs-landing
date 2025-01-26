export const addIdsToHeaders = (
  htmlContent: string
): { html: string; headerIds: string[] } => {
  const headerIds: string[] = [];
  if (typeof DOMParser === "undefined") {
    return { html: htmlContent, headerIds };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  let h2Counter = 0;
  let h3Counter = 0;
  let h4Counter = 0;
  let h5Counter = 0;
  let h6Counter = 0;

  const headers = doc.querySelectorAll("h2, h3, h4, h5, h6");

  headers.forEach((header) => {
    if (header.tagName === "H2") {
      h2Counter++;
      h3Counter = 0;
      header.id = `h2-${h2Counter}`;
    } else if (header.tagName === "H3") {
      h3Counter++;
      header.id = `h2-${h2Counter}-h3-${h3Counter}`;
    } else if (header.tagName === "H4") {
      h4Counter++;
      header.id = `h2-${h2Counter}-h3-${h3Counter}-h4-${h4Counter}`;
    } else if (header.tagName === "H5") {
      h5Counter++;
      header.id = `h2-${h2Counter}-h3-${h3Counter}-h4-${h4Counter}-h5-${h5Counter}`;
    } else if (header.tagName === "H6") {
      h6Counter++;
      header.id = `h2-${h2Counter}-h3-${h3Counter}-h4-${h4Counter}-h5-${h5Counter}-h6-${h6Counter}`;
    }
    headerIds.push(header.id);
  });

  return { html: doc.body.innerHTML, headerIds };
};
