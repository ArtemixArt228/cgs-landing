import React from "react";
import * as Styled from "./Modal.styled";
import * as HeroStyled from "../../HeroSection/HeroSection.styled";
import Image from "next/future/image";
import { ArrowContainer } from "../../../../styles/HomePage/General.styled";
import closeButton from "./svg/closeButton.svg";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceFeature } from "../../../../types/Admin/AdminServices.types";

interface IProps {
  closeModal: () => void;
  card: IServiceFeature | null;
  handleContactModalOpen: () => void;
}

export const MobileModal = ({
  closeModal,
  card,
  handleContactModalOpen,
}: IProps) => {
  const openEstimation = () => {
    closeModal();
    handleContactModalOpen();
  };

  return (
    <Styled.ModalLayout onClick={closeModal}>
      <Styled.MobileContentWrapper onClick={(e) => e.stopPropagation()}>
        <Styled.CloseWrapper onClick={closeModal}>
          <Image src={closeButton} alt={"Close button"} />
        </Styled.CloseWrapper>
        <Styled.ImageWrapper>
          <img
            src={card?.imageModal?.image?.url}
            alt={"Modal image"}
            style={{
              maxWidth: "100%",
              maxHeight: 460,
            }}
          />
        </Styled.ImageWrapper>
        <Styled.Title>{card?.title}</Styled.Title>
        <Styled.Description>{card?.descriptionModal}</Styled.Description>

        <HeroStyled.HeroSectionBtn
          style={{ marginRight: "auto" }}
          onClick={openEstimation}
        >
          Get Estimation
          <ArrowContainer className="heroSection">
            <ButtonArrow />
          </ArrowContainer>
        </HeroStyled.HeroSectionBtn>
      </Styled.MobileContentWrapper>
    </Styled.ModalLayout>
  );
};

export default MobileModal;
