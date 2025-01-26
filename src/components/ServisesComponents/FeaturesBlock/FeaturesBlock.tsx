import React, { useState } from "react";

import * as Styled from "./FeaturesBlock.styled";
import * as StyledGeneral from "../../../styles/Services.styled";
import FeatureCard from "./FeatureCard";
import { useMediaQuery } from "@mui/material";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import { IServiceFeature } from "../../../types/Admin/AdminServices.types";
import FeatureDetailsModal from "./Modal";
import useContactFormRedirect from "../../../hooks/useContactFormRedirect";
import { convertHtmlToText } from "../../../utils/convert-html-to-text";
interface IProps {
  blockTitle?: string;
  cards?: IServiceFeature[];
  className?: string;
  buttonLink?: string;
  isAiChatbotPage?: boolean;
}
const FeaturesBlock: React.FC<IProps> = ({
  cards,
  className = "",
  isAiChatbotPage = false,
  blockTitle = "BEST CUSTOM FEATURES",
}) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  const openFeatureDetailsModal = () => {
    setIsCardModalOpen(true);
  };

  const closeFeatureDetailsModal = () => {
    setIsCardModalOpen(false);
    setModalInfo(null);
  };

  const [modalInfo, setModalInfo] = useState<IServiceFeature | null>(null);
  const { handleButtonClick } = useContactFormRedirect();
  const parsedTitleText = convertHtmlToText(blockTitle);
  return (
    <Styled.HeaderAndContentWrapper className={className}>
      {!isMobile && (
        <StyledGeneral.BlockHeader
          className={className}
          dangerouslySetInnerHTML={{
            __html: blockTitle,
          }}
        />
      )}
      {isMobile && (
        <MobileInfiniteText
          title={parsedTitleText}
          className={"services features " + className}
        />
      )}
      <Styled.FeatureBlockWrapper>
        {cards && (
          <>
            {cards.map((card) => {
              return (
                <FeatureCard
                  key={card._id}
                  card={card}
                  openModal={openFeatureDetailsModal}
                  setCardInfo={setModalInfo}
                  isAiChatbotPage={isAiChatbotPage}
                  className={className}
                />
              );
            })}
          </>
        )}
      </Styled.FeatureBlockWrapper>
      {!isAiChatbotPage && (
        <FeatureDetailsModal
          handleContactModalOpen={handleButtonClick}
          isModalOpen={isCardModalOpen}
          card={modalInfo}
          closeModal={closeFeatureDetailsModal}
        />
      )}
    </Styled.HeaderAndContentWrapper>
  );
};

export default FeaturesBlock;
