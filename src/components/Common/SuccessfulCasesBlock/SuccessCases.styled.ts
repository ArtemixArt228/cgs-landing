import styled from "styled-components";
import themes from "../../../utils/themes";

export const SuccessWrapper = styled.section`
  width: 100%;
  @media ${themes.primary.media.min768Mobile} {
    &.homepage {
      margin-top: -5px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    gap: 32px;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }

  @media ${themes.primary.media.onlyLaptopL} {
    gap: 56px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 74px;
  }

  &.homepage {
    @media ${themes.primary.media.maxMobile} {
      gap: 32px;
    }

    @media ${themes.primary.media.min768Mobile} {
      gap: 10px;
    }

    @media ${themes.primary.media.onlyLaptopL} {
      gap: 10px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      gap: 16px;
    }
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px 32px;

  @media screen and ${themes.primary.media.maxBreakpoint1100} {
    gap: 32px;
  }

  @media screen and ${themes.primary.media.minTablet} {
    gap: 32px;
  }

  @media screen and ${themes.primary.media.minLaptop} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;

    & > a {
      flex: 0 0 calc(50% - 18px);
    }
  }

  @media ${themes.primary.media.min1440} {
    gap: 32px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    gap: 42px;

    & > a {
      flex: 0 0 calc(50% - 22px);
    }
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    width: auto;
    margin: 0 -68px;

    &.services {
      margin: 0;
    }
  }
`;

export const BlackButtonWrapper = styled.div`
  width: 100%;
  margin-top: 78px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 54px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 38px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 78px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 104px;
  }
`;
