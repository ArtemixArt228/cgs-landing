import * as htmlparser2 from "htmlparser2";
import * as domUtils from "domutils";
import * as DomSerializer from "dom-serializer";

export const splitBracketsAdvanced = (
  htmlString: string,
  isMobile: boolean
) => {
  let stringWithBr = isMobile
    ? htmlString.replace(/[|]/g, "")
    : htmlString.replace(/[\^]/g, "");

  stringWithBr = stringWithBr.replace(/[\^|]/g, "<br>");

  const targetStyle = "color: rgb(88, 105, 221);";

  const dom = htmlparser2.parseDocument(stringWithBr);

  const nodeToReplace = domUtils.findOne(
    (e) => e.attribs?.style?.includes(targetStyle),
    dom.children
  );

  if (
    nodeToReplace &&
    domUtils.existsOne((e) => e.name === "br", nodeToReplace.children)
  ) {
    const spanStringArray = nodeToReplace.children.map((e) =>
      e.type === "text"
        ? `<span style='color: rgb(88, 105, 221);'>${(e as any).data}</span>`
        : `<br>`
    );

    const spanElementsArray = htmlparser2.parseDocument(
      spanStringArray.join(" ")
    ).children;

    spanElementsArray.map((e) => {
      domUtils.prepend(nodeToReplace, e);
    });

    domUtils.removeElement(nodeToReplace);

    return DomSerializer.default(dom);
  } else {
    return stringWithBr;
  }
};
