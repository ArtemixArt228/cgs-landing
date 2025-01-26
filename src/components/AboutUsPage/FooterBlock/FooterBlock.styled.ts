import styled, { keyframes } from "styled-components";
import themes from "../../../utils/themes";

const firstTextAnimation = keyframes`
 0% { transform: translateY(0); }
 100% {transform: translateY(-50%); }
`;

export const FooterSection = styled.section`
  position: relative;
  width: 100vw;
  margin-top: 120px;
  margin-left: calc(
    -1 * clamp(51px, 51px + (100vw - 1440px) * ((68 - 51) / (1920 - 1440)), 68px)
  );
  background-color: rgba(143, 142, 147, 0.15);

  @media ${themes.primary.media.maxMobile} {
    margin-left: calc(
      -1 * clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
    );
    margin-top: 90px;
  }
`;

export const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 0
    calc(
      clamp(51px, 51px + (100vw - 1440px) * ((68 - 51) / (1920 - 1440)), 68px)
    );
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0
      calc(
        clamp(20px, 20px + (100vw - 375px) * ((48 - 20) / (768 - 375)), 48px)
      )
      0
      calc(
        clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
      );
  }
`;

export const Title = styled.div`
  display: flex;
  margin: 0;
  margin-top: calc(
    clamp(43px, 43px + (100vw - 1440px) * ((57 - 43) / (1920 - 1440)), 57px)
  );
  margin-bottom: calc(
    clamp(38px, 38px + (100vw - 1440px) * ((50 - 38) / (1920 - 1440)), 50px)
  );
  width: 100%;
  font-size: 3.33em;
  font-style: normal;
  font-weight: 900;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 1800px;

  & > p {
    display: inline-block;
    width: 100%;
    margin: 0;
  }

  &.animationPlay .animatedTextBlock {
    animation: ${firstTextAnimation} 0.45s cubic-bezier(0.47, 1.64, 0.41, 0.8)
      0.05s none;
  }

  &.animationPlay .animatedTextWrapper:nth-of-type(odd) .animatedTextBlock {
    animation: ${firstTextAnimation} 0.45s cubic-bezier(0.47, 1.64, 0.41, 0.8)
      3s none;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 43px;
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    font-size: calc(
      clamp(40px, 40px + (100vw - 1440px) * ((52 - 40) / (1920 - 1440)), 52px)
    );
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(22px, 22px + (100vw - 375px) * ((40 - 22) / (768 - 375)), 40px)
    );
    line-height: 140%;
    margin-block: calc(
      clamp(28px, 28px + (100vw - 375px) * ((40 - 28) / (768 - 375)), 40px)
    );
    letter-spacing: calc(
      clamp(-0.5px, -0.5px + (100vw - 375px) * ((1 + 0.5) / (768 - 375)), 1px)
    );
  }
`;

export const RightArrowWrapper = styled.span`
  display: inline-flex;
  align-self: right;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 0.8em;
  vertical-align: middle;
  width: 14vw;
  margin: 0;
  @media ${themes.primary.media.maxPCFullHD} {
    width: 18vw;
  }
  @media (max-width: 1400px) {
    width: 12vw;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 4vw;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
  }
  @media ${themes.primary.media.maxMobile} {
    width: 15vw;
    height: calc(
      clamp(11px, 11px + (100vw - 375px) * ((18 - 11) / (768 - 375)), 18px)
    );
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 60px;
    margin-right: 3px;
  }
`;

export const LeftArrowWrapper = styled.span`
  display: inline-flex;
  flex-grow: 1;
  justify-content: center;
  align-self: left;
  position: relative;
  width: calc(
    clamp(
      415px,
      415px + (100vw - 1920px) * ((500 - 410) / (2560 - 1920)),
      500px
    )
  );
  margin: 0;
  height: 0.8em;
  vertical-align: middle;

  @media ${themes.primary.media.maxLaptopL} {
    width: calc(
      clamp(
        390px,
        390px + (100vw - 1440px) * ((415 - 390) / (1920 - 1440)),
        415px
      )
    );
  }

  @media (max-width: 1800px) {
    width: 25.5vw;
  }
  @media (max-width: 1435px) {
    width: 12vw;
  }
  @media (max-width: 1400px) {
    width: 18vw;
  }
  @media (max-width: 1335px) {
    width: 3vw;
  }
  @media (max-width: 1235px) {
    display: none;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    display: inline-flex;
    width: 22vw;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 12vw;
  }
  @media (max-width: 781px) {
    display: none;
  }
  @media ${themes.primary.media.maxMobile} {
    display: inline-flex;
    width: 22vw;
    height: calc(
      clamp(11px, 11px + (100vw - 375px) * ((18 - 11) / (768 - 375)), 18px)
    );
  }
  @media (max-width: 730px) {
    width: 4vw;
  }
  @media (max-width: 667px) {
    display: none;
  }
  @media (max-width: 652px) {
    display: inline-flex;
    width: 22vw;
  }
  @media (max-width: 552px) {
    width: 8vw;
  }
  @media (min-width: 445px) and (max-width: 492px) {
    display: none;
  }
  @media (max-width: 444px) {
    display: inline-flex;
    width: 76px;
  }
  @media (max-width: 350px) {
    display: none;
  }
`;

export const AnimatedTextWrapper = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  color: black;
  border: 1px solid black;
  padding-inline: 4px;
  cursor: pointer;
  vertical-align: top;

  .animatedTextBlock {
    display: inline-grid;
    position: absolute;
    top: 0;
    left: 4px;
    transform: translateY(0);
    transition: 0.45s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    transition-delay: 0.05s;
  }

  &:hover {
    .animatedTextBlock {
      transform: translateY(-50%);
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    vertical-align: -23%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(22px, 22px + (100vw - 375px) * ((40 - 22) / (768 - 375)), 40px)
    );
    line-height: 120%;
    vertical-align: -20%;
    padding-right: 2px;
  }
`;

export const AnimatedText = styled.span`
  width: 100%;
  &.transparentText {
    color: rgba(0, 0, 0, 0);
  }
  &.firstText {
  }
  &.secondText {
  }
`;

export const AnimatedTextBlock = styled.span`
  position: absolute;
  top: 0;
  left: 4px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: calc(
    clamp(
      151px,
      151px + (100vw - 1440px) * ((201 - 151) / (1920 - 1440)),
      201px
    )
  );

  & > a {
    @media ${themes.primary.media.maxMobile} {
      height: 52px;
      width: 188px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    flex-wrap: wrap;
    margin-bottom: calc(
      clamp(118px, 118px + (100vw - 375px) * ((277 - 118) / (768 - 375)), 277px)
    );
  }

  @media (max-width: 527px) {
    gap: 18px;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: calc(
    -1 * clamp(105px, 105px + (100vw - 1440px) * ((141 - 105) / (1920 - 1440)), 141px)
  );
  right: 60px;
  height: calc(
    clamp(
      357px,
      357px + (100vw - 1440px) * ((476 - 357) / (1920 - 1440)),
      476px
    )
  );
  width: calc(
    clamp(
      376px,
      376px + (100vw - 1440px) * ((502 - 376) / (1920 - 1440)),
      502px
    )
  );

  @media ${themes.primary.media.maxTabletPortrait} {
    bottom: -83px;
    width: 288px;
    height: 258px;
  }

  @media ${themes.primary.media.maxMobile} {
    right: -11px;
    width: calc(
      clamp(118px, 118px + (100vw - 375px) * ((381 - 118) / (768 - 375)), 381px)
    );
    height: calc(
      clamp(178px, 178px + (100vw - 375px) * ((361 - 178) / (768 - 375)), 361px)
    );
    bottom: calc(
      -1 * clamp(51px, 51px + (100vw - 375px) * ((104 - 51) / (768 - 375)), 104px)
    );
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: translateY(0);
    right: -11px;
    width: 188px;
    height: 178px;
  }
`;
