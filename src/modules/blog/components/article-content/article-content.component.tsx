import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";

import * as Styled from "./article-content.styled";

import { generateArticleContent } from "../../utils";

import Arrow from "/public/BlogDecorations/ContentsArrow.svg";

interface IArticleContent {
  content: string;
  activeSection?: string | null;
  setActiveSection?: (id: string) => void;
}

export const ArticleContent: FC<IArticleContent> = ({
  content,
  activeSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width:1440px)");

  const htmlContent = generateArticleContent(content);
  const handleTOCClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest("a");
    if (target) {
      e.preventDefault();
      const targetId = target.getAttribute("href")?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 150;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    if (activeSection) {
      const links =
        document.querySelectorAll<HTMLElement>(".article-content a");

      links.forEach((link) => {
        if (link.getAttribute("href") === `#${activeSection}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }, [activeSection]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Styled.ContentWrapper
      className={htmlContent === "<ul></ul>" ? "hidden-content" : ""}
    >
      <Styled.ContentDropDownWrapper onClick={handleDropDown}>
        <Styled.ContentsText>Contents</Styled.ContentsText>
        {!isDesktop && (
          <Image
            width={15}
            height={7}
            src={Arrow.src}
            alt="Arrow"
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          />
        )}
      </Styled.ContentDropDownWrapper>
      <Styled.DropDownContainer className={isDesktop || isOpen ? "open" : ""}>
        <Styled.HeadingsContainer
          className="article-content"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") {
              handleTOCClick(e);
            }
          }}
        >
          {parse(htmlContent)}
        </Styled.HeadingsContainer>
      </Styled.DropDownContainer>
    </Styled.ContentWrapper>
  );
};
