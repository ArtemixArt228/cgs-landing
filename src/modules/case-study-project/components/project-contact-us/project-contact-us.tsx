import React from "react";

import * as Styled from "./project-contact-us.styled";
import { IIPPData } from "../../../../types/Admin/AdminPortfolio.types";
import { GetEstimationButton } from "../../../contact-us/components";

interface IProps {
  pageData: IIPPData | undefined;
}

export const ContactUs = ({ pageData }: IProps) => {
  return (
    <Styled.ContactUsWrapper>
      <Styled.ContactUsText>{pageData?.cta}</Styled.ContactUsText>
      <Styled.ContacyUsButtonContainer>
        <GetEstimationButton
          buttonLink={pageData?.buttonLink}
          buttonText={pageData?.button}
          buttonClassName="review"
          arrowClassName="painBlock"
          id="portfolio-contact"
        />
      </Styled.ContacyUsButtonContainer>
    </Styled.ContactUsWrapper>
  );
};
