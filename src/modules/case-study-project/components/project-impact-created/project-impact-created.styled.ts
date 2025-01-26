import styled from "styled-components";
import themes from "../../../../utils/themes";

export const CardsContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 24px;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    column-gap: 24px;
    row-gap: 16px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    margin-top: 32px;
  }
`;

export const CardWrapper = styled.a`
  width: calc(33% - 32px);
  gap: 6px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  background: linear-gradient(
      91.14deg,
      rgba(88, 105, 221, 0.07) 4.96%,
      rgba(88, 105, 221, 0.021) 99.17%
    ),
    radial-gradient(
      17.33% 49.28% at 12.35% 23.12%,
      rgba(241, 239, 237, 0.5) 22.72%,
      rgba(241, 239, 237, 0) 100%
    ),
    radial-gradient(
      20.63% 58.66% at 87.12% 56.99%,
      rgba(88, 105, 221, 0.05) 22.72%,
      rgba(88, 105, 221, 0) 100%
    );
  box-shadow: 0px 0px 8px 0px ${themes.primary.colors.darkBlue}33;
  padding: 20px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: calc(50% - 13px);
    padding: 20px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: calc(50% - 17px);
    padding: 32px;
  }
  @media ${themes.primary.media.min1440} {
    width: calc(33% - 17px);
    padding: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: calc(33% - 22px);
    padding: 40px;
    gap: 8px;
  }
`;

export const CountWrapper = styled.div`
  background: ${themes.primary.colors.caseStudyImpactCardCountBlock};
  color: ${themes.primary.colors.grey};
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 28px;
    line-height: 37.52px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 28px;
    line-height: 37.52px;
  }
  @media ${themes.primary.media.minBreakpoint1000} {
    font-size: 32px;
    line-height: 42.88px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 42px;
    line-height: 56.28px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 12px;
  white-space: nowrap;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
  }
`;

export const Text = styled.span`
  white-space: wrap;

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    line-height: 26.8px;
    letter-spacing: -0.1px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 26.8px;
    letter-spacing: -0.8px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
    line-height: 32.16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: -0.1px;
  }
`;

export const Description = styled.div`
  color: ${themes.primary.colors.mutedBlueGrey};
  display: flex;
  vertical-align: middle;
  gap: 10px;
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 21.44px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 16px;
    line-height: 21.44px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 20px;
    line-height: 26.8px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 32.16px;
  }
`;
