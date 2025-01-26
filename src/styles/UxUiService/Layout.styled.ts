import styled from "styled-components";
import themes from "../../utils/themes";

export const LayoutLocal = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  overflow: visible;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    overflow: hidden;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 3.425em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 0 1.925em;
  }
`;

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

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: -1.5em;
  }

  h2,
  h3 {
    font-weight: inherit;
  }
`;

export const TeamMembersAlign = styled.div`
  margin-top: -10.32em;
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: -5.9em;
  }
  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: -8em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: 9.25em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 4.75em;
  }
`;
