import React, { ReactNode } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/system";

import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";

import * as Styled from "./contact-us-content-mobile.styled";
import themes from "../../../../../../utils/themes";

interface IProps {
  stepIcon?: string;
  stepTitle?: string;
  stepText?: string;
  currentIndex: number;
  totalSteps?: number;
  showStep?: boolean;
  children: ReactNode;
  controller: UseContactFormModalReturn;
}

export const MobileContent = ({
  stepIcon,
  stepTitle,
  stepText,
  currentIndex,
  totalSteps,
  controller,
  showStep = true,
  children,
}: IProps) => {
  const isTablet = useMediaQuery(themes.primary.media.min768Mobile);
  const { pageData, mainClassName, isCancelModalOpen } = controller;
  return (
    <Styled.Content
      className={mainClassName}
      isCancelModalOpen={isCancelModalOpen}
    >
      {showStep && stepIcon && (
        <Styled.Step className={mainClassName}>
          <Styled.InfoHeader
            className={mainClassName}
            dangerouslySetInnerHTML={{
              __html: pageData.generalStepsTitle,
            }}
          />
          <Styled.StepContent className={mainClassName}>
            <div style={{ minWidth: isTablet ? 60 : 52 }}>
              <Image src={stepIcon} alt={"Step"} />
            </div>
            <div>
              <span>
                <Styled.StepName className={mainClassName}>
                  {stepTitle + " (Step "}
                </Styled.StepName>
                <Styled.StepNumber className={mainClassName}>{`${
                  currentIndex + 1
                }/${totalSteps}`}</Styled.StepNumber>
                <Styled.StepName>)</Styled.StepName>
              </span>
              <Styled.StepDescription className={mainClassName}>
                {stepText}
              </Styled.StepDescription>
            </div>
          </Styled.StepContent>
        </Styled.Step>
      )}
      {children}
      {showStep && (
        <Styled.ContactEmail
          stepNumber={currentIndex}
          className={`email ${mainClassName}`}
        >
          Or contact us via email
          <Styled.EmailLink
            href="mailto:contact@cgsteam.io"
            className={mainClassName}
          >
            {" "}
            contact@cgsteam.io
          </Styled.EmailLink>
        </Styled.ContactEmail>
      )}
      <Styled.Policy
        className={mainClassName}
        isCancelModalOpen={isCancelModalOpen}
      >
        <Styled.ContactEmail
          stepNumber={currentIndex}
          className={mainClassName + " policy"}
        >
          {" Your data is protected by our "}
          <Styled.EmailLink
            className={mainClassName}
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Styled.EmailLink>
          {" and "}
          <Styled.EmailLink
            className={mainClassName}
            href="https://gdpr-info.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GDPR standards.
          </Styled.EmailLink>
        </Styled.ContactEmail>
      </Styled.Policy>
    </Styled.Content>
  );
};
