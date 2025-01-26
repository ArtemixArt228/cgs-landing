import styled from "styled-components";
import themes from "../../utils/themes";

export const NotFoundContainer = styled.article`
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  flex-wrap: no-wrap;
  height: 90vh;
  column-gap: 5vw;
  @media ${themes.primary.media.minPC} {
    column-gap: 6.5vw;
  }

  @media ${themes.primary.media.maxMobile} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;

    > div {
      width: 100%;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-left: 0px;
  }
`;

export const ImageWrapper = styled.div`
  text-align: right;
  width: 45%;
  @media ${themes.primary.media.maxMobile} {
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-family: ${themes.primary.font.family.pressStart};
  font-size: ${themes.primary.font.size.notFoundPageTitlePc};
  letter-spacing: 0.045em;
  line-height: 182%;
  text-transform: uppercase;
  text-shadow: -0.5px -0.5px 0 ${themes.primary.colors.primary},
    0.5px -0.5px 0 ${themes.primary.colors.primary},
    -0.5px 0.5px 0 ${themes.primary.colors.primary},
    0.5px 0.5px 0 ${themes.primary.colors.primary};
  margin-bottom: 50px;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.notFoundPageTitleTablet};
  }
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 90%;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 70%;
    margin-bottom: 50px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;

export const Description = styled.div`
  width: 55%;
  > a {
    text-transform: uppercase;
  }
`;
