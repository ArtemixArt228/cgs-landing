import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 135%;
  text-transform: uppercase;
  width: 100%;
  padding: 0;
  margin: 0;
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      white-space: nowrap;
    }

    &.tech {
      display: inline-block;
    }
  }
  p {
    margin: 0;
    padding: 0;
  }

  span {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 26px;
    line-height: 31.2px;
    & span {
      &.blue {
        width: 40.805vw;
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 53.6px;
    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 52px;
    line-height: 74px;
    letter-spacing: -0.3px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 60px;
    line-height: 98.67px;
    letter-spacing: -0.4px;
  }
`;
export const ArrowWrapper = styled.span`
  display: inline-block;
  margin-left: auto;
  font-size: 0.4em;
  width: 15vw;
  height: 1em;
  position: relative;
  margin-right: 22px;
  margin-bottom: 12px;

  @media ${themes.primary.media.maxMobile} {
    width: 10vw;
    margin-left: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;
