import React from "react";
import Image from "next/image";

import * as Styled from "./case-studies-call-to-action.styled";
import { ICallToActionProps } from "../../../../types/Admin/AdminPortfolio.types";
import { ActionButton } from "../../../../components/ActionButton/ActionButton";

export const CTABlock = ({ initValues }: ICallToActionProps) => {
  return (
    <Styled.CTACont>
      <Styled.CTATextAndButtonContainer>
        <Styled.CTAHeading>{initValues?.subtitle}</Styled.CTAHeading>
        <Styled.CTAText>{initValues?.text}</Styled.CTAText>
        <Styled.ButtonWrapper>
          <ActionButton
            buttonText={initValues?.button}
            className="portfolio-cta"
          />
        </Styled.ButtonWrapper>
      </Styled.CTATextAndButtonContainer>

      <Styled.BlockMainIcon>
        <Image
          src={initValues?.image ? initValues?.image.url : ""}
          alt="Call to action image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.BlockMainIcon>
    </Styled.CTACont>
  );
};
