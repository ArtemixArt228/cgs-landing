import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  margin-top: 10.65em;
  margin-bottom: 14.5em;
  padding: 0 4.25em;
  width: 100vw;
  height: 14em;
  margin-left: -4.25em;
  display: flex;
  align-items: flex-start;

  @media ${themes.primary.media.minPCFullHD} {
    &.itSupport {
      margin-bottom: 12em;
    }
  }

  @media (min-width: 1200px) and ${themes.primary.media.maxLaptop} {
    &.itSupport {
      margin-top: 10.6em;
      margin-bottom: 13.5em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    height: 330px;
  }

  /* @media (max-width: 1050px) {
    margin-top: -6em;
  } */

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    height: auto;
    margin-left: -1.925em;
    padding: 0 1.925em;
    margin-bottom: 90px;
    &.itSupport {
      margin-bottom: 10em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      margin-bottom: 89px;
    }
  }
`;

export const Title = styled.h2`
  display: inline-block;
  margin: 0;
  margin-left: -1.276em;
  width: 36.7vw;
  padding: 0.25em 0 0.72em 1.276em;
  font-size: 3.33em;
  line-height: 1.4;
  text-transform: uppercase;

  background: linear-gradient(
    353.75deg,
    rgb(236, 234, 232) -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    rgb(236, 234, 232) 127.64%
  );
  border-right: 1px solid #8f8e93;

  @media ${themes.primary.media.minPCFullHD} {
    &.itSupport {
      font-size: 3.25em;
      padding: 0.72em 0 0.72em 1.276em;
    }
    font-size: 3.25em;
  }

  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      padding-top: 0.7em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 30px;
    width: 100%;
    border: none;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RelativePositioner = styled.div`
  position: relative;
  width: 65%;
  padding-top: 10px;

  @media ${themes.primary.media.minPCFullHD} {
    &.itSupport {
      margin-top: -1rem;
      margin-left: 1rem;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      padding-top: 0;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 10px;
  }
`;

export const ListsWrapper = styled.div`
  width: 100%;
  display: flex;
  @media ${themes.primary.media.maxTabletLandScape} {
    justify-content: flex-start;
  }
  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const ServiceList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  list-style: none;
  width: 50%;

  @media ${themes.primary.media.minPCFullHD} {
    &.itSupport {
      & > li {
        margin-bottom: 16px;
        & > div {
          & > div {
            & > p {
              font-size: 1.75rem;
            }
          }
        }
      }
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      & > li {
        & > div {
          & > div {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    gap: 0;
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 13px;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      gap: 8px;
    }
  }
`;

export const MobileTitle = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
