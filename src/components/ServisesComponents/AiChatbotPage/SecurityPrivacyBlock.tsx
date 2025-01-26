import React, { FC } from "react";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "./AiChatbotPage.styled";
import Image from "next/image";
import ArrowStroke from "../../svg/ArrowStroke";
import * as StyledSolution from "../../../components/ServisesComponents/FeaturesBlock/FeaturesBlock.styled";
import Shapes from "../../../../public/Services/shapes.svg";
import { ISecurityPrivacyBlock } from "../../../types/services/ai-chatbot.types";
import { convertHtmlToText } from "../../../utils/convert-html-to-text";

interface ISecurityPrivacyProps {
  isMobile: boolean;
  isDesktop: boolean;
  data: ISecurityPrivacyBlock;
}

const SecurityPrivacyBlock: FC<ISecurityPrivacyProps> = ({
  isMobile,
  data,
  isDesktop,
}) => {
  const { title, items } = data;
  const parsedTitleText = convertHtmlToText(title);
  return (
    <Styled.HeaderAndCardsWrapper className="security-privacy-cards">
      {isMobile ? (
        <MobileInfiniteText title={parsedTitleText} className="services" />
      ) : (
        <Styled.SecurityPrivacyTitleWrap>
          {isDesktop && (
            <Image src={Shapes} alt="geometrical shapes" width={400} />
          )}
          <Styled.AiChatbotPageTitle
            className="security-privacy-title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {isDesktop && (
            <Image
              src={Shapes}
              alt="geometrical shapes"
              width={400}
              style={{ transform: "rotate(180deg)" }}
            />
          )}
        </Styled.SecurityPrivacyTitleWrap>
      )}
      <Styled.CardsWrapper className="security-privacy-cards">
        {items.map((card) => {
          return (
            <Styled.CardItemWrapper
              key={card._id}
              className="security-privacy-card"
              style={{ flexDirection: "column" }}
            >
              <Styled.SecurityPrivacyTextAndImage>
                <Styled.ImageThumb className="security-img-thumb">
                  <Image
                    src={card.image?.url ?? ""}
                    alt={card.title}
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                    unoptimized
                  />
                </Styled.ImageThumb>
                <Styled.CardInfoWrapper className="security-privacy-card">
                  <Styled.SecurityPrivacyTextWrap>
                    <Styled.CardTitle className="security-privacy-card-title">
                      {card.title}
                    </Styled.CardTitle>
                    <Styled.AiChatbotPageText className="security-privacy-card-text">
                      {card.subtitle}
                    </Styled.AiChatbotPageText>
                  </Styled.SecurityPrivacyTextWrap>
                </Styled.CardInfoWrapper>
              </Styled.SecurityPrivacyTextAndImage>
              <div style={{ display: "flex", width: "100%" }}>
                <StyledSolution.SolutionLearnMore
                  href={card.link}
                  target="_blank"
                  isSecurityPrivacyBlock={true}
                >
                  {card.linkText}
                  <span className="arrow">
                    <ArrowStroke />
                  </span>
                </StyledSolution.SolutionLearnMore>
              </div>
            </Styled.CardItemWrapper>
          );
        })}
      </Styled.CardsWrapper>
    </Styled.HeaderAndCardsWrapper>
  );
};

export default SecurityPrivacyBlock;
