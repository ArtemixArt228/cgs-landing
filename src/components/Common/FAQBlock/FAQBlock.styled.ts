import styled from "styled-components";
import themes from "../../../utils/themes";

export const FaqContainer = styled.article`
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 0;
  margin-top: 0;

  a {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    margin: 0 -68px;
    &.services {
      margin: 0;
    }
  }
`;

export const FaqHeader = styled.h3`
  font-weight: 900;
  line-height: 140%;
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  padding-right: 95px;

  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    text-align: left;
    padding-right: 0;
  }

  @media screen and ${themes.primary.media.minBreakpoint1100} {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.27px;
  }
`;
