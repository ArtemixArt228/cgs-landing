import styled from "styled-components";
import themes from "../../../../utils/themes";
import Image from "next/future/image";

export const ClientName = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 32.16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 34px;
    line-height: 40.8px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 44px;
    line-height: 54px;
  }
`;

export const Stars = styled.div`
  display: flex;
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minBreakpoint1100} {
  }
`;

export const ClientImage = styled.img`
  border-radius: 16px;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: auto;
    max-height: 292px;
  }
  @media ${themes.primary.media.min768Mobile} {
    min-height: 292px;
    max-width: 520px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    min-height: 390px;
    max-width: 694px;
  }
`;

export const Star = styled(Image)`
  width: 34px;
  height: 34px;

  @media ${themes.primary.media.maxMobile} {
    width: 24px;
    height: 24px;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 34px;
    height: 34px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 44px;
    height: 44px;
  }
`;

export const ClientDescription = styled.div`
  color: #8f8e93;
  margin-top: 6px;
  font-family: ${themes.primary.font.family.namu};
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19.2px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 28.8px;
    margin-top: 8px;
  }
`;

export const ClientSpeech = styled.div`
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    font-size: 16px;
    line-height: 25.6px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 16px;
    font-size: 20px;
    line-height: 32px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 20px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 26.67px;
    font-size: 24px;
    line-height: 38.4px;
  }
`;

export const LinkedIn = styled.div`
  cursor: pointer;
  font-family: ${themes.primary.font.family.namu};
  color: black;
  display: flex;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
    gap: 8px;
    margin-top: 16px;
    font-size: 16px;
    line-height: 19.2px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 8px;
    margin-top: 16px;
    font-size: 18px;
    line-height: 21.6px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 28.8px;
    margin-top: 27px;
    gap: 14px;
    & img {
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

export const NameAndStars = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
    justify-content: flex-start;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 34px;
  }
`;

export const ClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
    align-items: flex-start;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    margin-top: 32px;
  }
`;

export const ClientInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
