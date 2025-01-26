import styled from "styled-components";
import themes from "../../utils/themes";

export const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  @media ${themes.primary.media.minPC} {
    width: 130px;
    height: 130px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 90px;
    height: 90px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 75px;
    height: 75px;
  }
`;

export const TypeTitle = styled.div`
  margin-top: 0.742em;
  font-size: 2.7em;
  color: ${themes.primary.colors.darkBlue};
  line-height: 160%;
  text-transform: capitalize;

  @media ${themes.primary.media.minPC} {
    font-size: 2.7em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2.3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.7em;
  }
`;
