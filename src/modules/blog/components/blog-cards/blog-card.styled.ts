import styled from "styled-components";
import themes from "../../../../utils/themes";

export const BlogItemContainer = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 10px;
  border: 1px solid ${themes.primary.colors.celeste};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    padding: 32px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 12px 16px 24px 16px;
    gap: 32px;
  }
`;

export const BlogCardContainer = styled.article`
  position: relative;
  width: 100%;
  height: 408px;
  display: flex;
  flex-direction: column;
  padding: 12px 16px 24px 16px;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${themes.primary.colors.celeste};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }

  @media ${themes.primary.media.min768Mobile} {
    height: 459px;
  }

  @media ${themes.primary.media.min1440} {
    height: 473px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
    height: 631px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 6px;
  }
`;

export const BlogItemImageContainer = styled.div`
  position: relative;
  height: 165px;
  width: 100%;

  @media ${themes.primary.media.min768Mobile} {
    width: 100%;
    height: 400px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    height: 306px;
    width: 516px;
  }
  @media ${themes.primary.media.min1440} {
    max-width: unset;
    width: calc(
      clamp(
        516px,
        516px + (100vw - 1440px) * ((782 - 516) / (1920 - 1440)),
        782px
      )
    );
    height: calc(
      clamp(
        306px,
        306px + (100vw - 1440px) * ((434 - 306) / (1920 - 1440)),
        434px
      )
    );
  }

  @media ${themes.primary.media.min4K} {
    width: 782px;
    height: 434px;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    width: 908px;
    height: 435px;
  }
`;

export const BlogCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 218px;
  border-radius: 8px;

  @media screen and ${themes.primary.media.minPCFullHD} {
    height: 292px;
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    height: 172px;
  }
`;

export const BlogItemInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 32px;
  }
`;
export const BlogButtonContainer = styled.div`
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    display: flex;
    justify-content: flex-start;
  }
`;

export const TrendingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 120px;
  height: 32px;
  padding: 6px 14px;
  gap: 4px;
  border-radius: 58px;
  border: 1px solid ${themes.primary.colors.vodka};
  background: linear-gradient(
    360deg,
    rgb(202, 205, 233) 0%,
    rgb(228, 228, 238) 100%
  );

  span {
    font-size: 16px;
    font-weight: 900;
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    max-width: 100%;
    height: 32px;
    border-radius: 40px;

    span {
      font-size: 14px;
    }
  }

  @media screen and ${themes.primary.media.min4K} {
    height: 42px;
    max-width: 150px;
    padding: 8px 16px;
    border-radius: 58px;

    span {
      font-size: 22px;
    }
  }
`;

export const BlogCardPostedDate = styled.p`
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 140%;
  color: ${themes.primary.colors.emperor};
  margin: 2px 0 0 0;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 12px;
  }
`;

export const BlogItemInfoHeading = styled.h3`
  font-size: 30px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 1.44;
  letter-spacing: 0.1px;
  margin: 0;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 18px;
  }
`;

export const BlogCardHeading = styled.h3`
  font-size: 20px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 140%;
  color: ${themes.primary.colors.primary};
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 26px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 18px;
  }
`;

export const BlogItemInfoIntroContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media screen and ${themes.primary.media.min768Mobile} {
    flex-direction: column;
    gap: 24px;
  }

  @media ${themes.primary.media.min1440} {
    gap: 32px;
  }
`;

export const BlogItemInfoAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BlogCardAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    flex-direction: row;
    align-items: center;
  }
`;

export const BlogCardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
`;

export const BlogItemInfoAuthorImage = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border: 1px solid ${themes.primary.colors.cloud};
  border-radius: 50%;
  overflow: hidden;

  @media screen and ${themes.primary.media.minPCFullHD} {
    width: 34px;
    height: 34px;
  }
`;

export const BlogItemInfoAuthor = styled.p`
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 1.33;
  color: ${themes.primary.colors.primary};
  margin: 0;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    font-size: 12px;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: ${themes.primary.colors.mutedBlueGrey};
  border-radius: 50%;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    &.card-dot {
      display: none;
    }
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    display: block;
  }
`;

export const BlogItemInfoTimeRead = styled.span`
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 140%;
  color: ${themes.primary.colors.mutedBlueGrey};

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    font-size: 12px;
  }
`;

export const BlogItemInfoDesc = styled.div`
  font-size: 12px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${themes.primary.colors.primary};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: 14px;
  }

  @media screen and ${themes.primary.media.min1440} {
    font-size: 16px;
  }
  @media screen and ${themes.primary.media.min4K} {
    font-size: 18px;
  }
  @media screen and ${themes.primary.media.minPCTwoThousand} {
    font-size: 20px;
  }
`;

export const BlogCardDesc = styled.p`
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 150%;
  color: ${themes.primary.colors.primary};
  margin: 0 0 6px 0;
  flex: 1 1 auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-break: break-word;

  p {
    margin: 0;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
  }
`;

export const BlogInfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and ${themes.primary.media.minBreakpoint1100} {
    &.main-card-container {
      flex-direction: row;
      gap: 24px;
    }
  }

  @media ${themes.primary.media.min4K} {
    &.main-card-container {
      gap: 32px;
    }
  }
`;

export const DateAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 12px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 16px;
  }
`;

export const MainBlogCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${themes.primary.media.min4K} {
    gap: 43px;
  }
`;
