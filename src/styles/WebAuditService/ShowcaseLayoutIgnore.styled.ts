import styled from "styled-components";
import themes from "../../utils/themes";

export const ShowcaseLayoutIgnore = styled.div`
  margin: 13.4em -4.25em 0 -4.25em;

  @media ${themes.primary.media.maxServiceMobile} {
    margin-top: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 6.54em -1.925em 0 -1.925em;
  }
`;

export const ShowcaseWithoutDataSpacing = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }
`;
