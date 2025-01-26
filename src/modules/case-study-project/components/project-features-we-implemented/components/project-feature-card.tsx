import React, { useState, useRef, useEffect } from "react";
import * as Styled from "../project-features-we-implemented.styled";
import { useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import { useWindowDimension } from "../../../../../hooks/useWindowDimension";
import { ICaseStudyModalData } from "../../../../../types/CaseStudy";
import ArrowStroke from "../../../../../components/svg/ArrowStroke";
import { IFeature } from "../../../../../types/Admin/AdminPortfolio.types";

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
  if (maxChars > text.length) {
    return text.length;
  }
  maxChars -= 13;
  while (text[maxChars] != " ") {
    maxChars--;
    if (maxChars < 0) {
      break;
    }
  }
  if (maxChars < 0) {
    return 0;
  }
  return maxChars;
};

interface IProps {
  setModalData: React.Dispatch<ICaseStudyModalData>;
  setIsModalOpen: React.Dispatch<boolean>;
  feature: IFeature;
}

export const FeatureCard = ({
  setModalData,
  setIsModalOpen,
  feature,
}: IProps) => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1800px)");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [visibleText, setVisibleText] = useState<string>("");
  const { width } = useWindowDimension();

  const fullText = feature.description;

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const containerWidth = element.clientWidth;

      const maxChars = calculateMaxChars(
        containerWidth,
        isTablet ? 4 * 32 : 4 * 24,
        isTablet ? 20 : 16,
        isTablet ? 32 : 24,
        fullText
      );
      if (fullText.length > maxChars) {
        setVisibleText(fullText.substring(0, maxChars) + "...");
      } else {
        setVisibleText(fullText);
      }

      setIsOverflowing(fullText.length > maxChars);
    }
  }, [fullText, width, isTablet]);

  return (
    <Styled.FeatureCardWrapper
      onClick={() => {
        if (isOverflowing) {
          setModalData({
            imageUrl: feature.featureImage.image!.url,
            title: feature.title,
            description: feature.description,
          });
          setIsModalOpen(true);
        }
      }}
    >
      <Image
        src={feature.featureImage.image!.url!}
        style={{
          width: "100%",
          borderRadius: isLargeDesktop ? 21.43 : 16,
          height: "auto",
        }}
        priority
        width={1000}
        height={1000}
        alt={"Feature image"}
      />
      <Styled.TextContainer>
        <Styled.FeatureBlockTitle>
          {feature.title}
          <div style={{ marginLeft: isLargeDesktop ? 23 : 15 }}>
            <ArrowStroke />
          </div>
        </Styled.FeatureBlockTitle>
        <Styled.FeatureBlockDescription ref={descriptionRef}>
          {visibleText}
          {isOverflowing && (
            <Styled.LoadMoreButtonInline>
              Learn more
            </Styled.LoadMoreButtonInline>
          )}
        </Styled.FeatureBlockDescription>
      </Styled.TextContainer>
    </Styled.FeatureCardWrapper>
  );
};
