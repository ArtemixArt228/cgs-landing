import React from "react";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "./AiChatbotPage.styled";
import BlockRectangles from "../../TitleWithRects/BlockRectangles";
import { IBlockWithCards } from "../../../types/services/ai-chatbot.types";
import { convertHtmlToText } from "../../../utils/convert-html-to-text";
import ConceptToCompletionBlock from "../../Common/ConceptToCompletionBlock";
interface IImplementationProcessProps {
  isMobile: boolean;
  isDesktop: boolean;
  data: IBlockWithCards;
}

const ImplementationProcessBlock = ({
  isMobile,
  data,
}: IImplementationProcessProps) => {
  const { title, items } = data;
  const parsedTitleText = convertHtmlToText(title);
  return (
    <Styled.HeaderAndCardsWrapper className="implementation-process-cards-wrapper">
      {isMobile ? (
        <MobileInfiniteText title={parsedTitleText} className="services" />
      ) : (
        <Styled.AiChatbotPageTitle className="impl-process-title">
          <BlockRectangles className="impl-process-rect" />
          <div
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </Styled.AiChatbotPageTitle>
      )}

      <ConceptToCompletionBlock
        className="services"
        items={items.map((i) => ({
          subtitle: i.title,
          text: i.subtitle,
          icon: { image: i.image ?? null },
          _id: i._id,
        }))}
      />
    </Styled.HeaderAndCardsWrapper>
  );
};

export default ImplementationProcessBlock;
