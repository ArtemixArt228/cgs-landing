import styled from "styled-components";
import themes from "../../../../utils/themes";

export const CTACont = styled.div`
  position: relative;
  font-family: "NAMU", sans-serif;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 68px;
    flex-direction: row;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 87px;
  }
`;
export const CTATextAndButtonContainer = styled.div`
  max-width: 100%;
  @media ${themes.primary.media.minBreakpoint1100} {
    max-width: 55%;
  }
`;
export const CTAHeading = styled.div`
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  margin-bottom: 15px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 53.6px;
    margin-bottom: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 64.32px;
    margin-bottom: 22px;
  }
`;

export const CTAText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 64px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 32px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 32px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-bottom: 48px;
    font-size: 20px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 42.67px;
    margin-bottom: 64px;
  }
`;

export const BlockMainIcon = styled.div`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 30px;
    right: 4%;
    align-self: flex-end;
    width: 317px;
    height: 218px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 0;
    top: -41px;
    right: 8%;
    align-self: flex-end;
    width: 412px;
    height: 284px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    position: absolute;
    top: -150px;
    right: 7%;
    transform: translateY(50%);
    width: 412px;
    height: 284px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    position: absolute;
    top: -200px;
    right: 7%;
    transform: translateY(50%);
    width: 551px;
    height: 379px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
