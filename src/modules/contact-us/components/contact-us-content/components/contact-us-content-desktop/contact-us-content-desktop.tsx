import React from "react";
import { useMediaQuery } from "@mui/system";

import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";

import * as StyledModal from "./contact-us-content-desktop.styled";
import close from "/public/ContactForm/close.svg";
import themes from "../../../../../../utils/themes";
import { modalContent } from "../../../../consts/content.const";
import { Step } from "../../../contact-us-step";

interface IProps {
  controller: UseContactFormModalReturn;
}

export const DesktopContent = ({ controller }: IProps) => {
  const { currentIndex, setCurrentIndex, calendlyLink, pageData } = controller;
  const isBigScreen = useMediaQuery(themes.primary.media.min4K);

  return (
    <StyledModal.DesktopModalLayout className={controller.mainClassName}>
      <StyledModal.ContentWrapper className={controller.mainClassName}>
        <StyledModal.FormBlock
          step={currentIndex}
          className={controller.mainClassName}
        >
          {React.createElement(modalContent[currentIndex].component, {
            setStep: setCurrentIndex,
            controller,
            calendlyWidgetUrl: calendlyLink,
          })}
          <StyledModal.ContactEmail
            step={currentIndex}
            className={controller.mainClassName}
          >
            Your data is protected by our{" "}
            <StyledModal.EmailLink
              className={controller.mainClassName}
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </StyledModal.EmailLink>{" "}
            and{" "}
            <StyledModal.EmailLink
              className={controller.mainClassName}
              href="https://gdpr-info.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDPR standards.
            </StyledModal.EmailLink>
          </StyledModal.ContactEmail>
        </StyledModal.FormBlock>
        <StyledModal.InfoBlock className={controller.mainClassName}>
          <StyledModal.InfoContent className={controller.mainClassName}>
            <StyledModal.CloseButtonWrapper
              className={controller.mainClassName}
            >
              <StyledModal.CloseButton
                className={controller.mainClassName}
                onClick={controller.handleCloseContactUsForm}
                src={close}
                width={isBigScreen ? 17 : 12}
                height={isBigScreen ? 17 : 12}
                alt={"Close modal"}
              />
            </StyledModal.CloseButtonWrapper>
            <StyledModal.InfoTitle
              className={controller.mainClassName}
              dangerouslySetInnerHTML={{
                __html: pageData.generalStepsTitle,
              }}
            />
            {modalContent.map((stepData) => (
              <Step
                key={stepData.block}
                index={stepData.step}
                title={pageData[stepData.block].stepTitle}
                description={pageData[stepData.block].stepDescription}
                image={stepData.image}
                imageActive={stepData.imageActive}
                currentIndex={currentIndex}
                showLine={stepData.step < modalContent.length - 1}
                controller={controller}
              />
            ))}
          </StyledModal.InfoContent>
          <StyledModal.ContactEmail
            step={currentIndex}
            className={`${controller.mainClassName} email`}
          >
            Or contact us via email{" "}
            <StyledModal.EmailLink
              href="mailto:contact@cgsteam.io"
              className={controller.mainClassName}
            >
              contact@cgsteam.io
            </StyledModal.EmailLink>
          </StyledModal.ContactEmail>
        </StyledModal.InfoBlock>
      </StyledModal.ContentWrapper>
    </StyledModal.DesktopModalLayout>
  );
};
