import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 7.8em;
  margin-bottom: 9.67em;
  h2 {
    line-height: 132%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 11.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;
    padding-top: 28px;
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 352px;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 39.5em;
    margin-top: 20px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    height: 242.5px;
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotate(2.06deg);
  position: absolute;
  top: 70px;

  @media ${themes.primary.media.maxMobile} {
    transform: rotate(-11.06deg);
    top: -10px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 376px;
    height: 258px;
  }
`;
