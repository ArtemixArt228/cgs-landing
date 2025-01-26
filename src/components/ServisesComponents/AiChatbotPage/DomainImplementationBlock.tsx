import React, { FC } from "react";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "./AiChatbotPage.styled";
import Image from "next/image";
import ArrowStroke from "../../svg/ArrowStroke";
import { IBlockWithCards } from "../../../types/services/ai-chatbot.types";
import { convertHtmlToText } from "../../../utils/convert-html-to-text";

interface IDomainImplementationProps {
  isMobile: boolean;
  data: IBlockWithCards;
}

const DomainImplementationBlock: FC<IDomainImplementationProps> = ({
  isMobile,
  data,
}) => {
  const { title, items } = data;
  const parsedTitleText = convertHtmlToText(title);
  return (
    <Styled.HeaderAndCardsWrapper className="domain-implementation-cards">
      {isMobile ? (
        <MobileInfiniteText title={parsedTitleText} className="services" />
      ) : (
        <Styled.AiChatbotPageTitle
          className="domain-impl-title"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      )}
      <Styled.CardsWrapper className="domain-implementation-cards">
        {items.map((card, index) => {
          return (
            <Styled.CardItemWrapper
              className={`domain-implementation-card ${"cards" + items.length}`}
              key={index}
            >
              <Styled.DomainImplTitleWrapper>
                <Styled.DomainImage>
                  <Image
                    src={card.image?.url ?? ""}
                    alt={card.title}
                    layout="fill"
                  />
                </Styled.DomainImage>

                <Styled.DomainImplTitle>{card.title}</Styled.DomainImplTitle>
              </Styled.DomainImplTitleWrapper>
              <Styled.LineDivider className="domain-implementation-divider" />
              <Styled.AiChatbotPageText className="domain-impl-text">
                {card.subtitle}
              </Styled.AiChatbotPageText>
              <Styled.IconArrowThumb className="no-select domain-icon-arrow">
                <ArrowStroke />
              </Styled.IconArrowThumb>
            </Styled.CardItemWrapper>
          );
        })}
      </Styled.CardsWrapper>
    </Styled.HeaderAndCardsWrapper>
  );
};

export default DomainImplementationBlock;
