import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Wrapper = styled.div`
  margin-top: 11em;

  @media ${themes.primary.media.minPC} {
    margin-top: 18em;
  }

  @media (max-width: 1051px) {
    margin-top: 30em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 4em;
  }
`;

export const Dot = styled.img`
  background: #f1efed;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    width: 14px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 65%;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    width: 14px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 65%;
  }

  @media (max-width: 650px) {
    width: 12px;
    border: 4px solid #f1efed;
    left: 6px;
    position: absolute;
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 0 -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;

  @media (min-width: 993px) {
    display: none;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-left: -51px;
    font-size: 40px;
    height: auto;
  }
`;

export const Content = styled.div`
  @media (max-width: 992px) {
    display: flex;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding-top: 70px;
  }

  @media (max-width: 475px) {
    display: grid;
    grid-template-columns: 1fr 7fr;
  }
`;

export const NumberItems = styled.div`
  position: relative;
  width: 25%;

  & > p {
    font-family: ${themes.primary.font.family.namu};
    font-size: 2.667em;
    font-weight: ${themes.primary.font.weight.heavy};
    position: absolute;
    margin-top: 0;
    left: 45px;
    top: -24.5px;
  }

  img {
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }

  @media ${themes.primary.media.minPC} {
    & > p {
      top: -34px;
      left: 60px;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 100%;

    & > p {
      left: 59px;
      top: -42.5px;
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  column-gap: 16px;

  @media screen and ${themes.primary.media.onlyTabletPortrait} {
    flex-direction: column;
    gap: 41px;

    & + div {
      p {
        position: relative;
        margin: 0 0 0 0.7em;
        bottom: 0.1em;
      }
    }
  }

  @media (max-width: 768px) {
    width: 50px;

    & + div {
      p {
        margin: 0 0 0 8px;
      }
    }
  }

  @media (max-width: 475px) {
    margin-left: -23px;
    & + div {
      p {
        font-size: 14px;
        margin-left: 16px;
      }
    }
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;

  @media screen and ${themes.primary.media.onlyTabletPortrait} {
    flex-direction: row;
  }

  @media (max-width: 475px) {
    img:first-child {
      width: 22px;
    }

    img:last-of-type {
      width: 4px;
    }
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;

  @media ${themes.primary.media.minPC} {
    .yellowCircle {
      width: 62px;
      height: 62px;
    }

    .dot {
      width: 14px;
      height: 14px;
    }

    gap: 5px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    width: 200px;
  }
`;

export const AfterBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 16px;
  column-gap: 8px;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const BeforeBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  width: 50%;

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }
`;

export const AfterBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  width: 50%;

  &.long {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;

    &.long {
      width: 2px;
      height: 105px;
    }
  }

  @media (max-width: 768px) {
    width: 1px;
    height: 24px;
    margin: 3px 0;
  }
`;

export const ContentItems = styled.div`
  width: 100%;

  @media screen and ${themes.primary.media.onlyTabletPortrait} {
    display: flex;
    margin-bottom: auto;
    top: 2px;
    gap: 43px;
    flex-direction: column;
    position: relative;
    left: -20px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;

  @media ${themes.primary.media.minPC} {
    margin-top: 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 6px;
    margin-left: -20px;
  }

  @media (max-width: 475px) {
    margin-top: -5px;
  }
`;

export const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 900;
  line-height: 160%;

  @media ${themes.primary.media.minPC} {
    font-size: 22px;
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    font-size: 30px;
    line-height: normal;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const Text = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 20px;
  overflow-wrap: break-word;
  p {
    padding: 0;
    margin: 8px 0 0;
  }

  & span {
    position: relative;
    top: 7px;
    font-size: 16px;
  }

  @media screen and ${themes.primary.media.minPC} {
    line-height: 160%;
    font-size: 32px;

    & span {
      font-size: 22px;
    }
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    line-height: 160%;
    font-size: 32px;

    & span {
      position: relative;
      top: auto;
      font-size: 22px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;

    & span {
      position: relative;
      top: -11px;
      font-size: 14px;
    }
  }
`;

export const MobileContent = styled.div`
  margin-top: 16px;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  column-gap: 11px;
  position: relative;
  height: 88px;
`;

export const NumberMobileItem = styled.div`
  height: 100%;
  border: 1px solid ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextMobileItem = styled.div`
  display: flex;
  margin-top: 18px;
  margin-bottom: auto;
  top: 2px;
  gap: 9px;
  flex-direction: column;
  position: relative;
`;

export const MobileNumber = styled.div`
  font-family: NAMU, sans-serif;
  font-size: 2.667em;
  font-weight: 900;
  position: relative;
  bottom: 0.1em;

  @media screen and ${themes.primary.media.maxMobile} {
    font-size: 14px;
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 20px;
  }
`;

export const Circle = styled.img`
  width: 46px;

  @media ${themes.primary.media.maxMobile} {
    width: 22px;
  }
`;

export const SmallCircle = styled.img`
  background: #f1efed;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    width: 14px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 71%;
    left: 4px;

    &.last {
      top: auto;
      bottom: -9px;
    }
  }

  @media screen and ${themes.primary.media.maxMobile} {
    width: 14px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 68%;
    left: 5px;

    &.last {
      top: auto;
      bottom: -9px;
    }
  }

  @media (max-width: 650px) {
    width: 12px;
    border: 4px solid #f1efed;
    left: 6px;
    position: absolute;
  }
`;

export const MobileLine = styled.img`
  height: 49px;
  left: 0;
  position: relative;
  top: 3px;
  width: 3px;
`;
