import styled from "styled-components";
import themes from "../../utils/themes";

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: ${themes.primary.colors.lightGreyBorder};
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  cursor: pointer;
  & iframe {
    border: 0;
    border-radius: 10px;
  }
`;

export const GradientBlock = styled.div`
  background: linear-gradient(97.17deg, #d0d5f5 4.53%, #5869dd 93.36%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
  transform: rotate(-45deg);
  @media ${themes.primary.media.maxMobile} {
    height: 18.09px;
    font-size: 8.52px;
    line-height: 10.49px;
    right: -23px;
    bottom: 27px;
    width: 121px;
  }
  @media ${themes.primary.media.min768Mobile} {
    height: 30.49px;
    font-size: 16px;
    line-height: 18.95px;
    right: -74px;
    bottom: 50px;
    width: 288px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    font-size: 16.68px;
    line-height: 20.53px;
    height: 35.41px;
    right: -68px;
    bottom: 71px;
    width: 308px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 22.24px;
    line-height: 27.37px;
    height: 47.21px;
    right: -76px;
    bottom: 89px;
    width: 380px;
  }
`;

export const PlayIcon = styled.div`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    width: 42px;
    height: 42px;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 62px;
    height: 62px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    width: 51.32px;
    height: 51.32px;
  }
  @media ${themes.primary.media.min4K} {
    width: 68.42px;
    height: 68.42px;
  }
`;
