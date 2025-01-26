import React, { useEffect, useRef, useState } from "react";
import { useWindowDimension } from "../../../../../hooks/useWindowDimension";
import * as Styled from "../project-problems-and-solutions.styled";
import { useMediaQuery } from "@mui/material";
const calculateMaxChars = (
  blockWidth: number,
  blockHeight: number,
  fontSize: number,
  lineHeight: number,
  text: string
) => {
  const avgCharWidth = fontSize * 0.6;
  const charsPerLine = Math.floor(blockWidth / avgCharWidth);
  const linesPerBlock = Math.floor(blockHeight / lineHeight);
  let maxChars = charsPerLine * linesPerBlock;
  const fullTextLength = text.length;
  if (maxChars > fullTextLength) {
    return fullTextLength;
  }
  maxChars -= 33;
  if (maxChars < 0) {
    return 0;
  }
  return maxChars;
};
interface IProps {
  text: string;
  setIsTruncated: React.Dispatch<boolean>;
  lineCountDesktop?: number;
  lineCountMobile?: number;
  className?: string;
}
export const TruncatedTextWithLearnMore = ({
  text,
  setIsTruncated,
  lineCountDesktop = 8,
  lineCountMobile = 8,
  className = "",
}: IProps) => {
  const is4K = useMediaQuery("(min-width:1800px)");
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [visibleText, setVisibleText] = useState<string>(text);
  const { width } = useWindowDimension();
  const fullText = text;
  const fontSize = is4K ? 20 : 16;
  const lineHeight = is4K ? 32 : 24;
  const lineCount = isMobile ? lineCountMobile : lineCountDesktop;
  useEffect(() => {
    const element = descriptionRef.current;
    const tempElement = hiddenRef.current;
    if (element && tempElement) {
      const measure = () => {
        tempElement.style.visibility = "hidden";
        tempElement.style.display = "block";
        const contentHeight = tempElement.clientHeight;
        const containerHeight = lineCount * lineHeight;
        const containerWidth = element.clientWidth;
        const maxChars = calculateMaxChars(
          containerWidth,
          containerHeight,
          fontSize,
          lineHeight,
          fullText
        );
        if (contentHeight > containerHeight) {
          setVisibleText(fullText.substring(0, maxChars) + "...");
        }
        setIsOverflowing(contentHeight > containerHeight);

        tempElement.style.display = "none";
      };
      const frameId = requestAnimationFrame(measure);

      return () => cancelAnimationFrame(frameId);
    }
  }, [fontSize, fullText, lineCount, lineHeight, setIsTruncated, width]);

  useEffect(() => {
    if (isOverflowing) setIsTruncated(true);
  }, [isOverflowing, setIsTruncated]);
  return (
    <>
      <Styled.SolutionText ref={descriptionRef} className={className}>
        <span className="solution">Solution: </span>
        {visibleText}
        {isOverflowing && (
          <Styled.SolutionLearnMore className={className}>
            Learn more
          </Styled.SolutionLearnMore>
        )}
      </Styled.SolutionText>
      <Styled.SolutionText ref={hiddenRef}>
        <span className="solution">Solution: </span>
        {fullText}
      </Styled.SolutionText>
    </>
  );
};
