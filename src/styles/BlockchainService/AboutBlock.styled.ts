import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    width: 100%;
    overflow-x: visible;

    background-position: bottom center;
    background-size: contain;

    & img {
      width: 120%;
    }

    position: relative;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -10%;
      left: -10%;
    }
  }
`;

export const ImageWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const MobileImageWrapper = styled.div`
  display: none;
  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
    height: 225px;
    margin-bottom: 1.5em;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;

  padding: 1.875em 0 3.35em;
  max-width: 12em;
  margin-top: 3px;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    margin-bottom: 1.4em;
    font-size: 1.5em;
    line-height: 132%;
    display: none;
  }
`;
