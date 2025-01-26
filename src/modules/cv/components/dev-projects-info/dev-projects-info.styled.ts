import styled from "styled-components";
import themes from "../../../../utils/themes";

export const SectionContainer = styled.div`
  margin-block: 100px;
  @media ${themes.primary.media.minMobile} {
    margin-block: 140px;
    margin-top: 100px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-block: 180px;
    margin-top: 140px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.cv-projects-container {
      margin-bottom: 80px;
    }
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 0 -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;
  @media screen and ${themes.primary.media.minMobile} {
    font-size: 40px;
    line-height: 1.4;
    background: transparent;
    border: none;
    text-align: left;
    margin-left: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 54px;
    height: auto;
  }
`;
