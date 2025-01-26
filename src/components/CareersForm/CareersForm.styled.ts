import themes from "./../../utils/themes";
import styled, { css } from "styled-components";

export const FormTitle = styled.h1`
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.normal};
  text-align: center;
  margin-bottom: 4rem;
`;

export const FormWrapper = styled.section`
  display: flex;
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
  }
`;

interface IFormImage {
  image?: { url: string };
}

export const FormImage = styled("div")<IFormImage>`
  background-image: ${({ image }) => (image ? css`url(${image.url})` : null)};
  width: 35.063rem;
  height: 38.188rem;
  background-repeat: space;

  @media ${themes.primary.media.maxLaptop} {
    margin-left: 4.125rem;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 0;
    width: 26rem;
    height: 29rem;
    background-repeat: round;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 17rem;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 25.125rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 16.625rem;
    height: 20.313rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const FormContainter = styled.div`
  width: 446px;
  height: 417px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 590px;
    height: 555px;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 675px;
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 361px;
    width: 335px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 295px;
  }
`;
