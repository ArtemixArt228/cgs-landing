import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ContactUsWrapper = styled.div`
  background-image: url("/contact-us-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    margin-top: -42px;
    gap: 32px;
    padding: 20px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: -46px;
    gap: 32px;
    padding: 32px 16px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: -68px;
    gap: 32px;
    padding: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: -79px;
    gap: 40px;
    padding: 40px;
  }
`;

export const ContacyUsButtonContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
`;

export const ContactUsText = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  max-width: 668px;
  @media ${themes.primary.media.maxMobile} {
    line-height: 32.16px;
    font-size: 24px;
  }
  @media ${themes.primary.media.min768Mobile} {
    line-height: 54.4px;
    font-size: 34px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    line-height: 54.4px;
    font-size: 34px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 70.4px;
    font-size: 44px;
    max-width: 890px;
  }
`;
