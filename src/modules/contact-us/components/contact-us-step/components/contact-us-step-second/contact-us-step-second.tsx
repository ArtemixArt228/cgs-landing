import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { useMediaQuery } from "@mui/material";
import Image from "next/future/image";

import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";

import * as Styled from "./contact-us-step-second.styled";
import * as StepStyled from "../../contact-us-step.styled";

import { recoverLink } from "../../../../../../utils/recoverLink";
import themes from "../../../../../../utils/themes";

import loader from "/public/showMoreLoader.svg";

interface IProps {
  calendlyWidgetUrl?: string;
  controller: UseContactFormModalReturn;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const SecondStepForm = ({ controller }: IProps) => {
  const [isWidgetLoading, setIsWidgetLoading] = useState(true);

  const isDesktop = useMediaQuery(themes.primary.media.minLaptop);

  const { email = "", name = "", description = "", phone = "" } = controller!;
  const { generalFormTitle, text } = controller.pageData.bookCallStep;

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsWidgetLoading(false), 1500);
    };

    const widgetFrame = document.querySelector("iframe");

    if (widgetFrame) {
      widgetFrame.addEventListener("load", handleLoad);
    }

    return () => {
      if (widgetFrame) {
        widgetFrame.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <>
      <StepStyled.FirstFormTitle
        className={controller.mainClassName}
        dangerouslySetInnerHTML={{
          __html: generalFormTitle,
        }}
      />
      <StepStyled.FirstFormDescription
        className={controller.mainClassName}
        step={1}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      {isWidgetLoading && (
        <Styled.RotatingDiv
          className={"formLoader " + controller.mainClassName}
        >
          <Image src={loader} alt="Loading..." />
        </Styled.RotatingDiv>
      )}
      <Styled.CalendlyWidget className={controller.mainClassName}>
        <InlineWidget
          styles={{
            height: "100%",
            minHeight: !isDesktop ? 407 : undefined,
            overflowY: "visible",
            width: "100%",
            paddingLeft: !isDesktop ? 15 : undefined,
            marginBottom: !isDesktop ? 16 : undefined,
            paddingRight: !isDesktop ? 15 : undefined,
            zIndex: isWidgetLoading ? "-100" : "1",
          }}
          prefill={{
            email,
            name,
            smsReminderNumber: `+${phone}`,
            customAnswers: {
              a1: description,
            },
          }}
          pageSettings={{
            hideGdprBanner: true,
          }}
          url={recoverLink(controller.calendlyLink)}
        />
      </Styled.CalendlyWidget>
    </>
  );
};
