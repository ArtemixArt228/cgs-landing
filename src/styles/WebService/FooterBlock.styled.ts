import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: grid;
  justify-content: space-between;
  padding-bottom: 0;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 8px;
    flex-direction: column;

    ::before {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      top: -18px;
      left: -10%;
    }

    a {
      font-size: 1em;
    }

    h2 {
      line-height: 132%;
    }
  }

  @media ${themes.primary.media.min1440} {
    padding-bottom: 9em;
  }

  @media ${themes.primary.media.min4K} {
    padding-bottom: 6.5em;
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 8px 0 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 8px 0 0;
  }
`;

export const TextContent = styled.div``;

export const ImageWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 247px;
    height: 257px;
    top: 1.2em;
    justify-self: flex-end;
    width: calc(
      clamp(247px, 247px + (100vw - 375px) * ((511 - 247) / (768 - 375)), 511px)
    );
    height: calc(
      clamp(257px, 257px + (100vw - 375px) * ((580 - 257) / (768 - 375)), 580px)
    );
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 511px;
    height: 580px;
    top: 24px;
    right: -0.9em;
    position: relative;
    justify-self: flex-end;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    position: absolute;
    top: -4em;
    right: -1em;
    width: 421px;
    height: 550px;
  }
  @media ${themes.primary.media.min4K} {
    object-fit: contain;
    position: absolute;
    right: -1em;
    top: -3em;
    width: 564px;
    height: 715px;
  }
`;
