import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  margin-top: 140px;
  margin-bottom: 140px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 180px;

    &.cloud {
      margin-top: 235px;
      margin-bottom: 130px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 65px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  font-size: 3.33em;
  line-height: 1.4;
  text-transform: uppercase;

  @media (min-width: 1800px) {
    margin: 0 0 40px;

    &.cloud {
      font-size: 3.25em;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ServiceList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  @media ${themes.primary.media.maxServiceWeb} {
    justify-content: start;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media ${themes.primary.media.maxMobile} {
    gap: 36px;
    flex-direction: column;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 18px;
  }
`;
