import React, { FC, useEffect, useRef } from "react";
import parse from "html-react-parser";

import * as Styles from "./article-description.styled";

interface IDescription {
  content: string;
}

export const ArticleDescription: FC<IDescription> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRefs = useRef<Record<string, HTMLElement | null>>({});
  useEffect(() => {
    const headers = document.querySelectorAll("h2, h3, h4, h5, h6");
    headers.forEach((header) => {
      const htmlHeader = header as HTMLElement;
      if (htmlHeader.id) {
        headerRefs.current[htmlHeader.id] = htmlHeader;
      }
    });
  }, [content]);
  return (
    <Styles.Wrapper>
      <Styles.Description ref={containerRef} className="common-headings">
        {parse(content)}
      </Styles.Description>
    </Styles.Wrapper>
  );
};
