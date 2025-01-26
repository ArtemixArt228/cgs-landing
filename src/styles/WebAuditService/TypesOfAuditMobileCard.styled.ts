import styled from "styled-components";
import themes from "../../utils/themes";

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 2.3em;

  @media ${themes.primary.media.maxTabletPortrait} {
    gap: 0.5em;
  }
  @media ${themes.primary.media.maxMobile} {
    gap: 9px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 6px;
  }
`;

export const TypeTitle = styled.div`
  font-size: 2em;
  line-height: 160%;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.maxTabletPortrait} {
    text-transform: uppercase;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 40px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 20px;
  }
`;

export const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  @media ${themes.primary.media.maxMobile} {
    gap: 27.5px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 13px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  @media ${themes.primary.media.maxMobile} {
    width: 64px;
    height: 94px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 54px;
    height: 59px;
  }
`;

export const TypeText = styled.p`
  font-size: 1rem;
  line-height: 160%;
  max-width: 100%;
  white-space: pre-line;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
  }
`;
