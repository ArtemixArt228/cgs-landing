import React from "react";
import Image from "next/image";
import * as Styled from "./FeaturesBlock.styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IServiceFeature } from "../../../types/Admin/AdminServices.types";
import ArrowStroke from "../../svg/ArrowStroke";

interface IFeatureCard {
  card: IServiceFeature;
  className?: string;
  openModal: () => void;
  setCardInfo: React.Dispatch<IServiceFeature | null>;
  isAiChatbotPage?: boolean;
}

const FeatureCard: React.FC<IFeatureCard> = ({
  card,
  className,
  openModal,
  setCardInfo,
  isAiChatbotPage,
}) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:991px)");
  const open = () => {
    setCardInfo(card);
    openModal();
  };
  const currentImage =
    isAiChatbotPage && card.image
      ? card.image?.url
      : isMobile
      ? card.imageMobile?.image?.url
      : isTablet
      ? card.imageTablet?.image?.url
      : card.imageWeb?.image?.url;

  return (
    <Styled.FeatureItemContainer className={className} onClick={open}>
      <Styled.FeatureItemTextContainer className={className}>
        <Styled.FeatureTitleAndDescription className={className}>
          <Styled.Title className={className} title={card.title}>
            {card.title}
          </Styled.Title>
          <Styled.Description className={className}>
            {card.subtitle}
          </Styled.Description>
        </Styled.FeatureTitleAndDescription>
        {!isAiChatbotPage && (
          <Styled.SolutionLearnMore>
            Learn more
            <span className="arrow">
              <ArrowStroke />
            </span>
          </Styled.SolutionLearnMore>
        )}
      </Styled.FeatureItemTextContainer>
      <Styled.FeatureItemImageWrapper>
        <Styled.FeatureItemImageContainer className={className}>
          {!isMobile ? (
            <Image
              alt="Feature card"
              src={currentImage ?? "/Services/feature-card-background.svg"}
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              unoptimized
            />
          ) : (
            <img
              src={currentImage ?? "/Services/feature-card-background.svg"}
              alt="Feature card"
            />
          )}
        </Styled.FeatureItemImageContainer>
      </Styled.FeatureItemImageWrapper>
    </Styled.FeatureItemContainer>
  );
};

export default FeatureCard;
