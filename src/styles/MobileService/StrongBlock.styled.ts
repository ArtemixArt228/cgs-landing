import styled, { css } from "styled-components";
import { IIcon } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { float } from "../Animations.styled";

export const StrongContainer = styled.section`
  margin-top: 138px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 11em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 8em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 3.5em;

    h2 {
      width: 105%;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 17px -0.25em 0 -2.6em;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 2em 0 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    row-gap: 1.5rem;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0.64em 0 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    row-gap: 1rem;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 1.1em;

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
  }
`;

export const BlockImage = styled.img<IIcon>`
  padding-left: 27px;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 0;

    &#android {
      width: 7.85em;
      height: 7.15em;
    }
    &#ios {
      width: 7.2em;
      height: 7.85em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-left: 0;
    &#android {
      width: 7.85em;
      height: 7.15em;
    }
    &#ios {
      width: 5.2em;
      height: 6.85em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-left: 0;
    &#android {
      width: 6.85em;
      height: 6.15em;
    }
    &#ios {
      width: 5.2em;
      height: 6.85em;
    }
  }
`;

export const Block = styled.div`
  display: flex;

  &:nth-child(2) {
    margin-right: 1.7%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    gap: 32px;
    max-width: 600px;
    margin: 0 auto;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    &:nth-child(2) {
      margin-right: 0;
    }
  }
`;

export const BlockTextContainer = styled.div`
  margin-left: 2.8em;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
`;

export const BlockTitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 15px;
  text-decoration-thickness: 1.39388px;
  margin-top: 1rem;
  font-size: ${themes.primary.font.size.secondary};

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.6em;
    text-underline-offset: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0.15em;
    font-size: 2em;
    text-underline-offset: 17.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 0.875rem;
    margin-bottom: 1.4rem;
    white-space: nowrap;
    font-size: 1.125rem;
    text-underline-offset: 10px;
  }

  @media (max-width: 370px) {
    font-size: 0.9rem;
  }
`;

export const BlockText = styled.p`
  font-size: 1.65em;
  line-height: 160%;
  width: 84%;
  margin-bottom: 10px;
  margin-top: 30px;

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
    font-size: 1rem;
    margin-top: 16px;
  }
`;
