import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 7.1em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 8.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.75em;
    display: flex;
    flex-direction: column;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0.3em;
  }
`;

export const TextContent = styled.div``;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: -2.5em;
  right: 1.25em;
  width: 597px;
  height: 524px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 50%;
    height: 127%;
    bottom: -4.5em;
    right: -1em;
  }

  @media (max-width: 1370px) {
    width: 40%;
    bottom: -5.5em;
    height: 424px;
  }

  @media (max-width: 1050px) {
    right: 0em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 400px;
    height: 350px;
    bottom: 15%;
  }

  @media (max-width: 890px) {
    width: 300px;
    height: 250px;
    bottom: 30%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    right: 15vw;
    width: 124%;
    height: 97.1vw;
  }
`;
