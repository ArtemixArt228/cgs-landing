import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  position: relative;
  margin-top: -15px;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 0;
    margin-top: 23px;
  }

  @media (max-width: 1055px) and (min-width: 768px) {
    margin-top: 45px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 40px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 0;
    margin-top: 45px;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 100%;
  margin: 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.32em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const Description = styled.p`
  width: 80%;
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  line-height: 24px;
  margin-bottom: 1.3em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.43em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 24px;
    margin-bottom: 0.8em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 1em;
    font-size: 20px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  column-gap: 52px;
  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 52px;
    justify-content: center;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 10px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const AuditBox = styled.div`
  width: 48%;
  display: flex;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 870px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0 -6px;
    width: 105%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 101%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 105%;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  padding-bottom: 0;
  border: 1.60133px solid ${themes.primary.colors.primary};
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-bottom: 0;
    padding-top: 15px;
    border: 3px solid ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0;
    border: 1.60133px solid ${themes.primary.colors.primary};
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  height: 101px;
  position: relative;
  z-index: 2;
  background: ${themes.primary.colors.blogBackground};
  padding-inline: 45px 5px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 151px;
    &.mobileAudit {
      height: 138px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-left: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: auto;
    padding-left: 16px;
    padding-block: 9px;
    gap: 15px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-left: 10px;
    padding-block: 19.5px;
    gap: 0;
  }
`;

export const CheckMarkWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 36px;
  flex: 0 0 auto;

  @media ${themes.primary.media.minPCFullHD} {
    height: 56px;
    width: 54px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    height: 44px;
    width: 44px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 54px;
    width: 54px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 25px;
    height: 26px;
  }
`;

export const ListText = styled.div`
  font-size: 1.375em;
  margin-left: 39px;
  line-height: 26px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.tertiary};
    line-height: 32px;
    &.mobileAudit {
      font-size: 1.25em;
    }
  }

  @media (max-width: 1350px) {
    margin-left: 19px;
    font-size: 1.2em;

    &.mobileAudit {
      font-size: 1.25em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.95em;
    padding-right: 30px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-right: 65px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    margin-left: 13px;
    max-width: 85%;
    line-height: 19px;
    padding-right: 20px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 16px !important;
  }
`;

export const ItemBottomLine = styled.div`
  position: absolute;
  width: 90%;
  border-bottom: 2px solid ${themes.primary.colors.comment};
  left: 34px;
  bottom: 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 80%;
    left: 56px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 89%;
    left: 17.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 95%;
    left: 10px;
  }
`;

export const Shadow = styled.div`
  width: 1px;
  border-style: solid;
  border-color: transparent transparent transparent
    ${themes.primary.colors.primary};
  border-width: 6px 6px 6px 11px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 810px;
    &.mobileAudit {
      height: 690px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 1063px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 750px;
  }

  @media (max-width: 565px) {
    height: 786px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.mobileAudit {
      height: 700px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.mobileAudit {
      height: 727.5px;
    }
    &.webAudit {
      height: 783px;
    }
  }

  @media (max-width: 360px) {
    height: 886px;
  }
`;

export const MobileListContainer = styled.div`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: block;
  }
`;
