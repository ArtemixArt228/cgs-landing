import styled from "styled-components";
import themes from "../../../utils/themes";

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

export const TeamGallery = styled.ul`
  list-style: none;
  margin: calc(
      clamp(56px, 56px + (100vw - 1440px) * ((77 - 56) / (1920 - 1440)), 77px)
    )
    0 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  gap: 50px;

  @media ${themes.primary.media.min4K} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.onlyLaptopL} {
    gap: calc(
      clamp(69px, 69px + (100vw - 1440px) * ((92 - 69) / (1920 - 1440)), 92px)
    );
    justify-content: space-between;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    gap: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-top: 0;
  }
`;

export const Teammate = styled.li`
  width: 400px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 500ms ease-in;
  gap: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );

  &.galleryVisible {
    opacity: 1;
  }

  :nth-child(1) {
    transition-delay: 300ms;
  }

  :nth-child(2) {
    transition-delay: 500ms;
  }

  :nth-child(3) {
    transition-delay: 700ms;
  }

  @media ${themes.primary.media.min4K} {
    width: calc(
      clamp(
        533px,
        533px + (100vw - 1920px) * ((660 - 533) / (2560 - 1920)),
        660px
      )
    );
  }

  @media ${themes.primary.media.onlyLaptopL} {
    width: auto;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    width: 30%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 335px;
  }
`;

export const TeammateImageContainer = styled.div`
  position: relative;
  height: 380px;

  @media ${themes.primary.media.min4K} {
    height: calc(
      clamp(
        507px,
        507px + (100vw - 1920px) * ((630 - 507) / (2560 - 1920)),
        630px
      )
    );
    width: calc(
      clamp(
        533px,
        533px + (100vw - 1920px) * ((660 - 533) / (2560 - 1920)),
        660px
      )
    );
  }

  @media ${themes.primary.media.onlyLaptopL} {
    height: calc(
      clamp(
        380px,
        380px + (100vw - 1440px) * ((507 - 380) / (1920 - 1440)),
        507px
      )
    );
    width: calc(
      clamp(
        400px,
        400px + (100vw - 1440px) * ((533 - 400) / (1920 - 1440)),
        533px
      )
    );
  }

  @media ${themes.primary.media.maxServiceWeb} {
    width: 335px;
    height: 318px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
    height: 25vw;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 335px;
    height: 318px;
  }
`;

export const LinkedIn = styled.a`
  position: absolute;
  top: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  right: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  height: calc(
    clamp(32px, 32px + (100vw - 1440px) * ((43 - 32) / (1920 - 1440)), 43px)
  );
  width: calc(
    clamp(32px, 32px + (100vw - 1440px) * ((43 - 32) / (1920 - 1440)), 43px)
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
    clamp(8px, 8px + (100vw - 1440px) * ((11 - 8) / (1920 - 1440)), 11px)
  );
  width: 100%;
  font-size: calc(
    clamp(24px, 24px + (100vw - 1440px) * ((32 - 24) / (1920 - 1440)), 32px)
  );
  background-color: rgba(0, 0, 0, 0.45);

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 42px;
  }
`;

export const TeammateName = styled.p`
  color: ${themes.primary.colors.secondary};
  margin: 0;
  line-height: 160%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
  }
`;

export const TeammatePosition = styled.p`
  color: ${themes.primary.colors.secondary};
  margin: 0;
  line-height: 160%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    color: ${themes.primary.colors.grey};
  }
`;

export const TeammateAbout = styled.div`
  margin: 0;
  line-height: 160%;
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );

  p {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    margin: 15px 0 0;
  }
`;
