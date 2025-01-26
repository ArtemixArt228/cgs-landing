import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4rem;
  }

  @media ${themes.primary.media.maxMobile} {
    overflow: visible;
    margin-bottom: 7.8125em;

    &.webDev {
      margin-bottom: 0;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    overflow: visible;
    margin-bottom: 64px;

    &.webDev {
      margin-bottom: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.6rem;
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
