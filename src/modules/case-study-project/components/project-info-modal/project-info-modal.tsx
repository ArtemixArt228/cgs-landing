import React from "react";
import * as Styled from "./project-info-modal.styled";
import close from "/public/Portfolio/ExitIcon.svg";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { ICaseStudyModalData } from "../../../../types/CaseStudy";
import { useScrollLock } from "../../../../hooks/useScrollLock";
import { ProblemAndSolutionAITag } from "..";

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalData?: ICaseStudyModalData;
  isSolutionModal?: boolean;
  className?: string;
}

export const CaseStudyModal: React.FC<IModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  modalData,
  isSolutionModal = false,
}) => {
  const isMobile = useMediaQuery("(max-width:767px)");

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseButtonClick();
    }
  };
  useScrollLock(isModalOpen, [".header"]);
  return (
    <Styled.ModalOutlayer
      onClick={handleContainerClick}
      isModalOpen={isModalOpen}
    >
      <Styled.ModalContent>
        <Styled.CloseButton onClick={handleCloseButtonClick}>
          <Image src={close} alt="close form" layout="fill" />
        </Styled.CloseButton>
        <Styled.DataContainer>
          {!isMobile && (
            <Styled.ImageContainer>
              <Image
                alt="Problem&Solution image"
                src={modalData?.imageUrl ?? ""}
                height={368}
                width={368}
                objectFit="contain"
                priority
                unoptimized
              />
            </Styled.ImageContainer>
          )}
          <Styled.TextAndTagContainer>
            {isSolutionModal && modalData?.subtitle && (
              <ProblemAndSolutionAITag
                problemSubtitle={modalData?.subtitle}
                className="modal"
                isModal
              />
            )}
            <Styled.TextContainer>
              <Styled.Title>{modalData?.title}</Styled.Title>
              <Styled.Description>
                {isSolutionModal && <span className="header">Solution: </span>}
                <span>{modalData?.description}</span>
              </Styled.Description>
            </Styled.TextContainer>
          </Styled.TextAndTagContainer>
        </Styled.DataContainer>
        <Styled.HoverBlock>
          <Styled.HoverBlackBlock />
        </Styled.HoverBlock>
      </Styled.ModalContent>
    </Styled.ModalOutlayer>
  );
};
