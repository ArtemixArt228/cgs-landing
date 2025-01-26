import React, { useEffect } from "react";
import Image from "next/image";
import * as Styled from "../project-design-overview.styled";
import { getTextColor, loadFont } from "../../../utils";
import { fontList } from "../../../consts";
import { IDesignOverviewCard } from "../../../../../types/Admin/AdminPortfolio.types";
interface IProps {
  card?: IDesignOverviewCard;
  cardType: "font" | "color" | "accessibility" | "hidden";
}

export const DesignOverviewCard = ({ card, cardType }: IProps) => {
  const imageTextColor =
    cardType == "color" && card?.imageText
      ? getTextColor(card?.imageText)
      : undefined;
  const handleCopy = () => {
    card?.imageText && navigator.clipboard.writeText(card?.imageText);
  };
  const usedFont = fontList.find((font) =>
    card?.imageText?.toLowerCase().includes(font.name.toLowerCase())
  ) ?? {
    name: "NAMU",
    style: "sans-serif",
    url: "",
  };
  useEffect(() => {
    cardType == "font" &&
      card?.imageText &&
      usedFont.name !== "NAMU" &&
      loadFont(usedFont?.url);
  }, [card?.imageText, cardType, usedFont.name, usedFont?.url]);
  return (
    <Styled.CardWrapper
      style={{ visibility: cardType == "hidden" ? "hidden" : "visible" }}
    >
      <Styled.ImageWrapper
        color={cardType == "color" ? card?.imageText : undefined}
      >
        {cardType == "accessibility" ? (
          <Image
            src={card?.image?.url ?? ""}
            alt={"design-overview-" + cardType}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Styled.ImageText
            onClick={handleCopy}
            color={imageTextColor}
            style={{ fontFamily: `${usedFont?.name}, ${usedFont?.style}` }}
          >
            {card?.imageText}
          </Styled.ImageText>
        )}
      </Styled.ImageWrapper>
      <Styled.CardTextWrapper>
        <Styled.CardTitle>{card?.title}</Styled.CardTitle>
        <Styled.CardDescription>{card?.description}</Styled.CardDescription>
      </Styled.CardTextWrapper>
    </Styled.CardWrapper>
  );
};
