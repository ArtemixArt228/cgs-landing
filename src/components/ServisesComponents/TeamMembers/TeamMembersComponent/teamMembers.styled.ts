import styled from "styled-components";
import themes from "../../../../utils/themes";

interface LastItem {
  lastItem: boolean;
}

interface ScrollBar {
  top: number;
}

export const Wrapper = styled.div`
  margin-top: 11.7em;
  margin-bottom: 11.7em;
  display: flex;
  justify-content: space-between;

  &.mobileDev {
    margin-top: 7.2em;
    margin-bottom: 13.75em;
  }

  &.webAudit {
    margin-top: 11.3em;
    margin-bottom: 8.3em;
  }
  &.dappAuditTeam,
  &.webDev {
    margin-top: 0;
  }

  &.blockchainTeam {
    margin-top: 12.85em;
    margin-bottom: 13.6em;
  }

  &.supportTeam {
    margin-top: 15em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.mobileDev {
      margin-top: 21em;
      margin-bottom: 15.8em;
    }
    &.blockchainTeam {
      margin-top: 14.85em;
      margin-bottom: 16.6em;
    }
    &.webDev {
      margin-top: 6.55em;
      margin-bottom: 12.5em;
    }
  }

  @media (min-width: 1920px) {
    &.supportTeam {
      margin-top: 23.3em;
    }
  }

  @media (max-width: 1055px) {
    &.supportTeam {
      margin-top: 27em;
    }
    &.webDev,
    &.dappAuditTeam {
      margin-top: 8.55em;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    display: block;

    &.blockchainTeam,
    &.webAudit {
      margin-top: 0px;
    }

    &.mobileDev {
      margin-top: 0px;
      margin-bottom: 10.55em;
    }

    &.supportTeam {
      margin-top: 0;
      margin-bottom: 7.7em;
    }

    &.blockchainTeam {
      margin-bottom: 114px;
    }

    &.webDev {
      margin-bottom: 7.7em;
    }
  }

  @media (max-width: 400px) {
    margin-bottom: 8.5em;

    &.mobileDev {
      margin-bottom: 10.5em;
    }
    &.webAudit {
      margin-bottom: 106px;
    }
  }

  @media (max-width: 376px) {
    &.supportTeam {
      margin-bottom: 8.9em;
    }
  }
`;

export const TextContainer = styled.div`
  width: 50vw;
  top: 0;
  position: sticky;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.supportTeam {
      margin-left: 1px;
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 3.4em;
  margin: 0;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  line-height: 56px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  @media (min-width: 1800px) {
    font-size: 3.25em;
    margin-bottom: 0.7em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  &.blockchainTeam {
    margin-top: 7.7em;
  }
  &.supportTeam {
    margin-top: 2.27em;
  }

  @media (max-width: 768px) {
    &.dappAuditTeam {
      margin-top: 25px;
    }
    &.webDev {
      margin-top: 10em;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.5em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 28px;
  padding-right: 20px;

  @media (min-width: 1800px) {
    line-height: 160%;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }

  @media (max-width: 475px) {
    font-size: 18px;
  }
`;

export const ScrollList = styled.div`
  width: 45vw;
  height: 184px;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  overscroll-behavior: none;
  direction: rtl;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8f8e93;
    border-radius: 5px;
  }

  @media (min-width: 1800px) {
    width: 42.87vw;
    height: 225px;
  }

  @media (max-width: 1370px) {
    width: 44vw;
  }

  @media (max-width: 992px) {
    width: 42vw;
  }

  @media (max-width: 768px) {
    margin-top: 28px;
    width: 97.5%;
    padding-left: 0;
    height: 180px;
    overflow: scroll;
    direction: ltr;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 475px) {
    margin-top: 20px;
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 400px) {
    height: 150px;
    width: 105%;
  }
  @media (max-width: 376px) {
    &.supportTeam {
      margin-top: 23px;
      margin-left: -7px;
      height: 150px;
      width: 110%;
    }
  }
`;

export const ScrollContainer = styled.div`
  margin-top: 5px;
  direction: ltr;

  @media (max-width: 2560px) {
    margin-top: 9px;
    width: 95%;
  }

  @media (max-width: 1440px) {
    margin-top: 5px;
    width: 44.3em;
    margin-right: 60px;
  }

  @media (max-width: 1370px) {
    width: 90%;
    margin-right: 40px;
  }

  @media (max-width: 1350px) {
    width: 95%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    width: 97%;
  }

  @media (max-width: 766px) {
    width: 93%;
  }

  @media (max-width: 475px) {
    width: 92%;
    margin-top: 3px;
  }
`;

export const ScrollItem = styled.div<LastItem>`
  font-size: 1.667em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 32px;
  border-top: 1px solid rgb(192, 191, 192);
  padding: 11px 0 9px 14px;
  border-bottom: ${({ lastItem }) =>
    lastItem ? "1px solid rgb(192, 191, 192)" : "none"};

  @media (min-width: 1800px) {
    padding: 14px 16px 15px;
    font-size: 24px;
  }

  @media ${themes.primary.media.maxLaptop} {
    &.supportTeam {
      padding: 11px 0 8px 25px;
    }
  }

  @media (max-width: 768px) {
    padding: 11px 0 7.5px 14px;
  }

  @media (max-width: 400px) {
    padding: 10px 0 8px 10px;
    font-size: 16px;
    line-height: 25.6px;
  }

  @media (max-width: 376px) {
    &.supportTeam {
      padding: 12px 0px 8px 8px;
    }
  }
`;

export const ScrollbarContainer = styled.div<{ isNeeded: boolean }>`
  width: 6px;
  border-radius: 5px;
  background-color: #d9d9d9;
  margin-right: 32px;
  overflow: hidden;
  display: ${({ isNeeded }) => (isNeeded ? "initial" : "none")};

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 8px;
    margin-top: 27px;
    height: 184px;
  }

  @media (max-width: 766px) {
    height: 185px;
  }

  @media (max-width: 475px) {
    margin-top: 17px;
    margin-right: 20px;
    height: 185px;
  }

  @media (max-width: 400px) {
    margin-right: 5px;
    height: 155px;
  }

  @media (max-width: 376px) {
    &.supportTeam {
      margin: 0;
    }
  }
`;

export const Scrollbar = styled.div<ScrollBar>`
  position: absolute;
  top: 0;
  transform: translateY(${(props) => props.top}px);
  height: 30%;
  width: 6px;
  border-radius: 5px;
  background-color: #8f8e93;
`;
