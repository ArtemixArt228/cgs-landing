import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ContentContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 34.49px;
  }
`;

export const SectionWrapper = styled.div`
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${themes.primary.media.maxMobile} {
    padding: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    padding: 32px;
    gap: 40px;
  }
  @media ${themes.primary.media.min1440} {
    gap: 90px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    border-radius: 22.99px;
    padding: 45.99px;
    gap: 64px;
  }
`;

export const SectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
  }
`;

export const SectionTitle = styled.div`
  color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 38.4px;
    height: 48px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 51.2px;
    height: 51px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 34px;
    line-height: 54.4px;
    height: 54px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
    line-height: 76.8px;
    height: 76px;
  }
`;

export const SectionTitleArrow = styled.div`
  color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & svg {
    width: 21px;
    height: 17px;
    margin-bottom: -3px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    & svg {
      width: 17px;
      height: 19px;
      margin-bottom: -11px;
      margin-right: 3px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    & svg {
      width: 25px;
      height: 25px;
      margin-bottom: -22px;
      margin-right: 3px;
    }
  }
`;

export const SectionDescription = styled.div`
  text-align: justify;
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 25.6px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 28.8px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 16px;
    line-height: 25.6px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 38.4px;
  }
`;

export const SectionLine = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.testimonialBorder};
  height: 1px;
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 1px;
    height: 100%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 1.5px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${themes.primary.media.min768Mobile} {
    flex-direction: row;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 32px;
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  border-radius: 12px;
  padding: 16px 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${themes.primary.media.min768Mobile} {
    flex: 1 0 calc(50% - 13px);
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 24px;
    padding: 24px 24px 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    flex: 1 0 calc(50% - 17px);
    border-radius: 17.25px;
    gap: 32px;
    padding: 32px 32px 46px;
  }
`;

export const ImageWrapper = styled.div<{ color?: string }>`
  position: relative;
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  background-color: ${({ color }) => color ?? "unset"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 187px;
  @media ${themes.primary.media.minBreakpoint1100} {
    width: calc(
      clamp(
        230px,
        230px + (100vw - 1100px) * ((331.5 - 230) / (1440 - 1100)),
        331.5px
      )
    );
    height: calc(
      clamp(
        150px,
        150px + (100vw - 1100px) * ((187 - 150) / (1440 - 1100)),
        187px
      )
    );
  }
  @media ${themes.primary.media.min1440} {
    width: calc(
      clamp(
        331.5px,
        331.5px + (100vw - 1440px) * ((481 - 331.5) / (1920 - 1440)),
        481px
      )
    );
    height: calc(
      clamp(
        187px,
        187px + (100vw - 1440px) * ((269 - 187) / (1920 - 1440)),
        269px
      )
    );
  }
  @media ${themes.primary.media.min4K} {
    border-radius: 11.5px;
    width: 481px;
    height: 269px;
  }
`;

export const ImageText = styled.div<{ color?: string }>`
  color: ${({ color }) => color ?? themes.primary.colors.primary};
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.1px;
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
    line-height: 33.6px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 34.49px;
    line-height: 48.29px;
    letter-spacing: -0.14px;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.div`
  color: ${themes.primary.colors.darkBlue};
  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.1px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 22px;
    line-height: 30.8px;
    letter-spacing: -0.1px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
    line-height: 33.6px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 44.8px;
    letter-spacing: -0.14px;
  }
`;

export const CardDescription = styled.div`
  font-size: 14px;
  line-height: 24px;
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    line-height: 34.49px;
  }
`;
