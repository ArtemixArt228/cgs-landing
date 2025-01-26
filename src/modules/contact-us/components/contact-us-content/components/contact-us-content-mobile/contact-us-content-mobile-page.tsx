import React from "react";

import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";
import { MobileContent } from ".";
import { modalContent } from "../../../../consts/content.const";

interface IProps {
  controller: UseContactFormModalReturn;
}

export const MobilePage = ({ controller }: IProps) => {
  const { currentIndex, calendlyLink, pageData } = controller;
  return (
    <MobileContent
      stepTitle={pageData[modalContent[currentIndex].block].stepTitle}
      stepIcon={modalContent[currentIndex].imageActive}
      stepText={pageData[modalContent[currentIndex].block].stepDescription}
      currentIndex={currentIndex}
      totalSteps={modalContent.length}
      controller={controller}
      showStep
    >
      {React.createElement(modalContent[currentIndex].component, {
        setStep: controller.setCurrentIndex,
        controller,
        calendlyWidgetUrl: calendlyLink,
      })}
    </MobileContent>
  );
};
