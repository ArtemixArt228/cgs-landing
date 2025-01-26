import { useMediaQuery } from "@mui/system";
import React from "react";
import DesktopModal from "./DesktopModal";
import { IServiceFeature } from "../../../../types/Admin/AdminServices.types";
import MobileModal from "./MobileModal";

interface IProps {
  isModalOpen: boolean;
  closeModal: () => void;
  card: IServiceFeature | null;
  handleContactModalOpen: () => void;
}

const Modal = ({
  isModalOpen,
  closeModal,
  card,
  handleContactModalOpen,
}: IProps) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  if (isModalOpen) {
    return isDesktop ? (
      <DesktopModal
        card={card}
        closeModal={closeModal}
        handleContactModalOpen={handleContactModalOpen}
      />
    ) : (
      <MobileModal
        card={card}
        closeModal={closeModal}
        handleContactModalOpen={handleContactModalOpen}
      />
    );
  }

  return null;
};

export default Modal;
