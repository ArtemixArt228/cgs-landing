import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  overflow-clip-margin: 51px;
  font-size: 1rem;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.5em;
  margin: 0;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.35em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ShowCaseAlign = styled.div`
  @media ${themes.primary.media.maxPCFullHD} {
    margin-bottom: -5em;
  }
  @media (max-width: 1055px) {
    margin-bottom: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: -12px;
  }
`;

export const TeamMembersAlign = styled.div`
  margin-top: 0em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 0em;
    margin-bottom: -2.5em;
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
