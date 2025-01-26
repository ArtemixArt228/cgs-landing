import React, { Dispatch, SetStateAction } from "react";
import {
  EstimateModalBlackBlock,
  EstimateModalBlock,
  EstimateModalButton,
  EstimateModalContainer,
  EstimateModalCross,
  EstimateModalShadowContainer,
  EstimateModalWrapper,
} from "../../styles/EstimationForm.styled";
import Image from "next/image";
import cross from "../../../public/closeBtn.svg";

const EstimationFailModal = ({
  link,
  setOpenFailedModal,
}: {
  link: string;
  setOpenFailedModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <EstimateModalWrapper>
      <EstimateModalShadowContainer>
        <EstimateModalContainer>
          <EstimateModalCross onClick={() => setOpenFailedModal(false)}>
            <Image src={cross} alt="cross" />
          </EstimateModalCross>
          We’re already doing your project’s estimation. You need a few minutes
          to finish the form.
          <br />
          <br />
          Want to lose progress?
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "50px",
              gap: "20px",
            }}
          >
            <EstimateModalButton white href={link}>
              Quit
            </EstimateModalButton>
            <EstimateModalButton onClick={() => setOpenFailedModal(false)}>
              Continue
            </EstimateModalButton>
          </div>
          <EstimateModalBlock>
            <EstimateModalBlackBlock />
          </EstimateModalBlock>
        </EstimateModalContainer>
      </EstimateModalShadowContainer>
    </EstimateModalWrapper>
  );
};

export default EstimationFailModal;
