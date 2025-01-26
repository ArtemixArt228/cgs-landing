import styled from "styled-components";
import themes from "../../../../utils/themes";

export const SeeMoreProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;
  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 56px;
    margin-bottom: 48px;
  }
  @media ${themes.primary.media.min4K} {
    gap: 72px;
  }
`;
export const SeeMoreProjectsTitle = styled.h3`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 4.3em;
  line-height: 116.6%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
  color: ${themes.primary.colors.primary};
  text-align: center;
  @media ${themes.primary.media.maxMobile} {
    text-align: left;
    font-size: 24px;
    line-height: 27.98px;
    width: 359px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    text-align: left;
    font-size: 24px;
    line-height: 27.98px;
    width: 140px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 56px;
    letter-spacing: normal;
    text-wrap: nowrap;
    width: 538px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 741px;
    font-size: 52px;
    line-height: 60.63px;
    letter-spacing: 0.04em;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 969px;
    font-size: 68px;
    line-height: 81.6px;
  }
`;

export const SeeMoreProjectsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    gap: 10px;
    margin: 0 -16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 10px;
    margin: 0 -40px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 10px;
    margin: 0;
  }
  @media ${themes.primary.media.minWidth2200} {
    margin: 0;
    overflow: hidden;
  }
`;

export const SeeMoreProjectsArrow = styled.div`
  width: 100%;
  svg {
    width: 100%;
  }
  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(98px, 98px + (100vw - 550px) * ((197 - 98) / (768 - 550)), 197px)
    );
    align-self: flex-start;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: calc(
      clamp(108px, 108px + (100vw - 375px) * ((147 - 108) / (550 - 375)), 147px)
    );
    align-self: flex-start;
  }

  @media ${themes.primary.media.min768Mobile} {
    position: relative;
    height: 60px;
    width: 39px;
    left: -13%;
    svg {
      position: absolute;
      top: 35%;
      scale: 9;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 728px;
    left: -4%;
    svg {
      scale: 1.2;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 728px;
    left: -5%;
    svg {
      scale: 1.4;
    }
  }
  @media ${themes.primary.media.minWidth2200} {
    width: 728px;
    svg {
      scale: 1.5;
    }
  }
  &.second {
    svg {
      transform: rotate(180deg);
    }
    @media ${themes.primary.media.maxMobile} {
      align-self: flex-end;
    }

    @media ${themes.primary.media.min768Mobile} {
      position: relative;
      height: 60px;
      width: 39px;
      left: 13%;
      svg {
        position: absolute;
        top: 35%;
        scale: 9;
      }
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      width: 728px;
      left: 4%;
      svg {
        scale: 1.2;
      }
    }
    @media ${themes.primary.media.minPCFullHD} {
      width: 728px;
      left: 5%;
      svg {
        scale: 1.4;
      }
    }
    @media ${themes.primary.media.minWidth2200} {
      width: 728px;
      svg {
        scale: 1.5;
      }
    }
  }
`;
