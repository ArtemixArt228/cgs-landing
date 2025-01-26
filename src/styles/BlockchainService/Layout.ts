import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1rem;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 0.8rem;
  }

  @media ${themes.primary.media.maxMobile} {
    overflow-clip-margin: 0px;
  }
`;

export const SlideContainer = styled.div`
  height: 680px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1055px) {
    margin-inline: 0;
    height: 800px;
  }
`;
