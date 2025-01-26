import styled from "styled-components";
import themes from "../../../utils/themes";

export const SwiperContainer = styled.div`
  .swiper-wrapper {
    display: flex;
    align-items: flex-start;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const SwiperHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: calc(
    -1 * clamp(20px, 20px + (100vw - 375px) * ((40 - 20) / (768 - 375)), 40px)
  );
  margin-bottom: calc(
    clamp(28px, 28px + (100vw - 375px) * ((40 - 28) / (768 - 375)), 40px)
  );
  padding-inline: calc(
    clamp(25px, 25px + (100vw - 375px) * ((40 - 25) / (768 - 375)), 40px)
  );
  width: 100vw;
  height: calc(
    clamp(58px, 58px + (100vw - 375px) * ((80 - 58) / (768 - 375)), 80px)
  );
  background: linear-gradient(90deg, #c7ecc0 0%, #89a3d1 130.27%);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  max-width: 80vw;
  min-width: 250px;
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.black};
  font-size: calc(
    clamp(24px, 24px + (100vw - 375px) * ((40 - 24) / (768 - 375)), 40px)
  );
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;

  @media (max-width: 412px) {
    max-width: 60vw;
  }
`;

export const HeaderArrowWrapper = styled.div`
  width: calc(
    clamp(18px, 18px + (100vw - 375px) * ((36 - 18) / (768 - 375)), 36px)
  );
  height: calc(
    clamp(16px, 16px + (100vw - 375px) * ((32 - 16) / (768 - 375)), 32px)
  );
`;

export const SwiperWrapper = styled.div`
  position: relative;
  user-select: none;
`;

export const Teammate = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxServiceWeb} {
    width: 30%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: auto;
  }
`;

export const TeammateImageContainer = styled.div`
  position: relative;
  height: 380px;
  position: relative;

  @media ${themes.primary.media.maxServiceWeb} {
    width: 335px;
    height: 318px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
    height: 25vw;
  }
  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(335px, 335px + (100vw - 375px) * ((685 - 335) / (768 - 375)), 685px)
    );
    height: calc(
      clamp(318px, 318px + (100vw - 375px) * ((644 - 318) / (768 - 375)), 644px)
    );
  }
`;

export const LinkedIn = styled.a`
  position: absolute;
  top: calc(
    clamp(18px, 18px + (100vw - 375px) * ((20 - 18) / (768 - 375)), 20px)
  );
  right: calc(
    clamp(18px, 18px + (100vw - 375px) * ((20 - 18) / (768 - 375)), 20px)
  );
  width: calc(
    clamp(32px, 32px + (100vw - 375px) * ((65 - 32) / (768 - 375)), 65px)
  );
  height: calc(
    clamp(32px, 32px + (100vw - 375px) * ((65 - 32) / (768 - 375)), 65px)
  );
`;

export const TeammateTextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(
      clamp(6px, 6px + (100vw - 375px) * ((20 - 6) / (768 - 375)), 20px)
    )
    calc(clamp(8px, 8px + (100vw - 375px) * ((16 - 8) / (768 - 375)), 16px))
    calc(clamp(10px, 10px + (100vw - 375px) * ((20 - 10) / (768 - 375)), 20px));
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const TeammateName = styled.p`
  color: ${themes.primary.colors.secondary};
  font-size: calc(
    clamp(22px, 22px + (100vw - 375px) * ((40 - 22) / (768 - 375)), 40px)
  );
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;
`;

export const TeammatePosition = styled.p`
  color: ${themes.primary.colors.secondary};
  font-size: calc(
    clamp(18px, 18px + (100vw - 375px) * ((24 - 18) / (768 - 375)), 24px)
  );
  line-height: 160%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    color: ${themes.primary.colors.grey};
  }
`;

export const TeammateAbout = styled.div`
  margin: calc(
      clamp(5px, 5px + (100vw - 375px) * ((10 - 5) / (768 - 375)), 10px)
    )
    0 0;
  line-height: 180%;
  font-size: calc(
    clamp(16px, 16px + (100vw - 375px) * ((20 - 16) / (768 - 375)), 20px)
  );

  p {
    margin: 0 0 10px;
  }
`;
