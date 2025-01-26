import styled from "styled-components";
import themes from "../../utils/themes";

import { fadeIn } from "../../styles/Animations.styled";

export const Layout = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 100vh;
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
        clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
      );
  }
`;

export const HeroAboutContainer = styled.div`
  width: 100%;
  height: 26.4vw;
  position: relative;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
    transform: scale(1.2) translateY(-30px);

    @media ${themes.primary.media.maxTabletLandScape} {
      transform: scale(1.2) translateY(-15px);
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      transform: scale(2.2) translateX(-65px) translateY(-15px);
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(198px, 198px + (100vw - 375px) * ((400 - 198) / (768 - 375)), 400px)
    );
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  *::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }
`;

export const VideoFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-image: linear-gradient(
    0deg,
    rgba(180, 149, 127, 0.17) 0%,
    rgba(180, 149, 127, 0.17) 100%
  );

  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(198px, 198px + (100vw - 375px) * ((400 - 198) / (768 - 375)), 400px)
    );
  }
`;

export const HeroHeaderText = styled.h1`
  margin: 0;
  margin-top: calc(
    clamp(45px, 45px + (100vw - 1440px) * ((60 - 45) / (1920 - 1440)), 60px)
  );

  padding: 0;
  color: ${themes.primary.colors.grey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 6.66em;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease-in;

  @media ${themes.primary.media.onlyLaptopL} {
    font-size: calc(
      clamp(80px, 80px + (100vw - 1440px) * ((100 - 80) / (1920 - 1440)), 100px)
    );
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: calc(
      clamp(42px, 42px + (100vw - 769px) * ((80 - 42) / (1200 - 769)), 80px)
    );
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: calc(
      clamp(28px, 28px + (100vw - 375px) * ((56 - 28) / (768 - 375)), 56px)
    );
    font-size: calc(
      clamp(32px, 32px + (100vw - 375px) * ((66 - 32) / (768 - 375)), 66px)
    );
  }
`;

export const HeadlinesContainer = styled.div`
  display: flex;
  margin-top: calc(
    clamp(45px, 45px + (100vw - 1440px) * ((60 - 45) / (1920 - 1440)), 60px)
  );

  gap: 66px;

  @media ${themes.primary.media.onlyLaptopL} {
    gap: calc(
      clamp(66px, 66px + (100vw - 1440px) * ((88 - 66) / (1920 - 1440)), 88px)
    );
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 0;
  }
`;

export const HeadlineContainer = styled.div`
  width: 46.12%;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: 90px;
  }
`;

export const NumbersContainer = styled.div`
  box-sizing: border-box;
  margin-top: calc(
    clamp(
      120px,
      120px + (100vw - 1440px) * ((166 - 120) / (1920 - 1440)),
      166px
    )
  );
  padding: 0px 80px 0 80px;
  height: 234px;
  width: 100vw;
  margin-left: calc(
    -1 * clamp(51px, 51px + (100vw - 1440px) * ((68 - 51) / (1920 - 1440)), 68px)
  );
  background-color: rgba(143, 142, 147, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media ${themes.primary.media.maxPCFullHD} {
    height: 174px;
    align-items: flex-start;
  }

  @media ${themes.primary.media.minLaptop} {
    align-items: normal;
  }

  @media ${themes.primary.media.onlyLaptopL} {
    align-items: normal;
    padding-top: 0;
    height: calc(
      clamp(
        174px,
        174px + (100vw - 1440px) * ((232 - 174) / (1920 - 1440)),
        232px
      )
    );
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100vw;
    margin-top: 90px;
    display: grid;
    align-items: center;
    height: calc(
      clamp(280px, 280px + (100vw - 375px) * ((424 - 280) / (768 - 375)), 424px)
    );
    margin-left: calc(
      -1 * clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
    );
    padding: 28px 30px 28px 30px;
    grid-template-columns: 1fr 1fr;
    & > :nth-child(1) {
      grid-row: 2;
      grid-column: 1;
    }
    & > :nth-child(2) {
      grid-row: 1;
      grid-column: 1;
    }
    & > :nth-child(3) {
      grid-row: 1;
      grid-column: 2;
    }
    & > :nth-child(4) {
      grid-row: 2;
      grid-column: 2;
    }
  }
`;

export const Achievement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-top: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  gap: 4px;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 5px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 28px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;

export const AchievementNumber = styled.p`
  font-weight: 900;
  font-size: calc(
    clamp(80px, 80px + (100vw - 1440px) * ((100 - 80) / (1920 - 1440)), 100px)
  );
  line-height: calc(
    clamp(96px, 96px + (100vw - 1440px) * ((120 - 96) / (1920 - 1440)), 120px)
  );
  margin: 0;
  letter-spacing: 0.05em;
  color: #f1efed;
  text-shadow: 7px 2.5px 0px #000000;
  -webkit-text-stroke: 1.2px black;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 60px;
    line-height: 72px;
    text-shadow: 5.21223px 1.48921px 0px #000000;
    -webkit-text-stroke: 0.893525px solid #000000;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(60px, 60px + (100vw - 375px) * ((80 - 60) / (768 - 375)), 80px)
    );
    line-height: calc(
      clamp(72px, 72px + (100vw - 375px) * ((96 - 72) / (768 - 375)), 96px)
    );
    text-shadow: calc(
        clamp(5px, 5px + (100vw - 375px) * ((9 - 5) / (768 - 375)), 9px)
      )
      calc(
        clamp(1.5px, 1.5px + (100vw - 375px) * ((3 - 1.5) / (768 - 375)), 3px)
      )
      0 #000;
  }
`;

export const AchievementText = styled.p`
  font-weight: 900;
  font-size: 1.5em;
  line-height: normal;
  margin: 4px 0 0;

  @media ${themes.primary.media.onlyLaptopL} {
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    line-height: calc(
      clamp(22px, 22px + (100vw - 1440px) * ((29 - 22) / (1920 - 1440)), 29px)
    );
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(14px, 14px + (100vw - 375px) * ((20 - 14) / (768 - 375)), 20px)
    );
    line-height: calc(
      clamp(17px, 17px + (100vw - 375px) * ((24 - 17) / (768 - 375)), 24px)
    );
  }
`;

export const OurTeamContainer = styled.div`
  margin: calc(
      clamp(
        120px,
        120px + (100vw - 1440px) * ((160 - 120) / (1920 - 1440)),
        160px
      )
    )
    0;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 90px;
    margin-bottom: 78px;
  }
`;

export const Subtitle = styled.div`
  font-size: 3.33em;
  line-height: 48px;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 22px;
  text-transform: uppercase;

  @media ${themes.primary.media.onlyLaptopL} {
    font-size: calc(
      clamp(40px, 40px + (100vw - 1440px) * ((52 - 40) / (1920 - 1440)), 52px)
    );
    line-height: calc(
      clamp(48px, 48px + (100vw - 1440px) * ((62 - 48) / (1920 - 1440)), 62px)
    );
    margin-bottom: calc(
      clamp(22px, 22px + (100vw - 1440px) * ((29 - 22) / (1920 - 1440)), 29px)
    );
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.smallAboutSubtitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 56px;
    &:first-child {
      margin-top: 0px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 2.8em;
  }
`;

export const Text = styled.div`
  margin-right: 0;
  font-size: 1.5em;
  line-height: 160%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(
    clamp(10px, 10px + (100vw - 1440px) * ((13 - 10) / (1920 - 1440)), 13px)
  );

  p {
    margin: 0 0;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: calc(
      clamp(16px, 16px + (100vw - 375px) * ((20 - 16) / (768 - 375)), 20px)
    );
    gap: calc(
      clamp(10px, 10px + (100vw - 375px) * ((20 - 10) / (768 - 375)), 20px)
    );
  }
`;
