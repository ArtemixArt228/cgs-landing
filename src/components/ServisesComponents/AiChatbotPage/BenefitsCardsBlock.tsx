import React, { FC } from "react";
import * as Styled from "./AiChatbotPage.styled";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import Image from "next/image";
import TitleArrow from "/public/Services/title-arrow.svg";
import { IBlockWithCards } from "../../../types/services/ai-chatbot.types";
import { convertHtmlToText } from "../../../utils/convert-html-to-text";

interface IBenefitsCardsProps {
  isMobile: boolean;
  isDesktop: boolean;
  data: IBlockWithCards;
}

const BenefitsCardsBlock: FC<IBenefitsCardsProps> = ({
  isMobile,
  isDesktop,
  data,
}) => {
  const { title, items } = data;
  const parsedTitleText = convertHtmlToText(title);
  return (
    <Styled.HeaderAndCardsWrapper className="benefits">
      {isMobile ? (
        <MobileInfiniteText title={parsedTitleText} className="services" />
      ) : (
        <Styled.TextArrowWrap className="benefits-title">
          <Styled.BenefitArrow>
            <Image
              src={TitleArrow}
              alt="arrow"
              layout="fill"
              objectFit="cover"
            />
          </Styled.BenefitArrow>
          <Styled.AiChatbotPageTitle
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {isDesktop && (
            <Styled.BenefitArrow>
              <Image
                src={TitleArrow}
                alt="arrow"
                layout="fill"
                objectFit="cover"
                style={{ transform: "rotate(180deg)" }}
              />
            </Styled.BenefitArrow>
          )}
        </Styled.TextArrowWrap>
      )}
      <Styled.CardsWrapper className="benefits">
        <Styled.CardsContainer>
          {items.map((card, index) => {
            return (
              <Styled.CardItemWrapper
                key={card.title + index}
                className={`benefits-card-wrap ${
                  "cards" +
                  (items.length == 1
                    ? "1"
                    : items.length % 3 == 0 || items.length % 2 == 1
                    ? "3"
                    : "2")
                }`}
              >
                <Styled.ImageContainer>
                  <Styled.ImageWrapper>
                    <Image
                      src={card.image?.url ?? ""}
                      alt={"AI Chatbot Benefit icon"}
                      layout="fill"
                    />
                  </Styled.ImageWrapper>
                </Styled.ImageContainer>
                <Styled.BenefitCardTextWrapper>
                  <Styled.CardTitle
                    title={card.title}
                    className="benefits-card-title"
                    dangerouslySetInnerHTML={{
                      __html: card.title,
                    }}
                  />
                  <Styled.AiChatbotPageText className="best-features-text">
                    {card.subtitle}
                  </Styled.AiChatbotPageText>
                </Styled.BenefitCardTextWrapper>
              </Styled.CardItemWrapper>
            );
          })}
        </Styled.CardsContainer>
      </Styled.CardsWrapper>
    </Styled.HeaderAndCardsWrapper>
  );
};

export default BenefitsCardsBlock;
