import React from "react";

import * as Styled from "./Modal.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { ArrowContainer } from "../../../../styles/HomePage/General.styled";
import closeButton from "./svg/closeButton.svg";
import Image from "next/image";
import { IServiceFeature } from "../../../../types/Admin/AdminServices.types";

interface IProps {
  closeModal: () => void;
  card: IServiceFeature | null;
  handleContactModalOpen: () => void;
}

const DesktopModal = ({ closeModal, card, handleContactModalOpen }: IProps) => {
  const openEstimation = () => {
    closeModal();
    handleContactModalOpen();
  };

  return (
    <Styled.ModalLayout onClick={closeModal}>
      <Styled.DescktopContentWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styled.ModalSide className="left-side">
          <Styled.Title>{card?.title}</Styled.Title>
          <Styled.Description>{card?.descriptionModal}</Styled.Description>

          <Styled.BtnContainer
            style={{
              marginRight: "auto",
            }}
            onClick={openEstimation}
          >
            Get Estimation
            <ArrowContainer className="heroSection">
              <ButtonArrow />
            </ArrowContainer>
          </Styled.BtnContainer>
        </Styled.ModalSide>

        <Styled.ModalSide className={"right-side"}>
          <div style={{ position: "absolute", top: 35, right: 35 }}>
            <Styled.CloseWrapper onClick={closeModal}>
              <Image src={closeButton} alt={"Close button"} />
            </Styled.CloseWrapper>
          </div>
          <img
            src={card?.imageModal?.image?.url}
            alt={"Modal image"}
            style={{
              maxWidth: "100%",
              maxHeight: 460,
            }}
          />
        </Styled.ModalSide>
      </Styled.DescktopContentWrapper>
    </Styled.ModalLayout>
  );
};

export default DesktopModal;
