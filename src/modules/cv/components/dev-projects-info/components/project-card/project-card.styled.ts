import styled from "styled-components";
import themes from "../../../../../../utils/themes";

export const InfoCard = styled.div`
  position: relative;
  padding-top: 20px;
  margin-left: -20px;
  padding-inline: 20px;
  width: 100vw;
  background: ${themes.primary.colors.grey};
  transition: all 0.3s ease-in-out;

  &.intersecting {
    background: linear-gradient(
        90deg,
        rgba(214, 255, 187, 0.3) 0%,
        rgba(88, 105, 221, 0.3) 100%
      ),
      #f1efed;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: 110vw;
    height: 1px;
    background-color: ${themes.primary.colors.darkGrey};
  }
  &:nth-child(2) h3 {
    padding-left: 16px;
  }

  @media screen and ${themes.primary.media.minMobile} {
    width: 100%;
    margin-left: 0;
    padding: 40px;
    margin-bottom: 50px;
    margin-top: 24px;
    border: 1px solid ${themes.primary.colors.darkGrey};

    &.intersecting {
      border-color: #f1efed;
    }

    &:nth-child(2) h3 {
      padding-left: 12px;
    }
    &::after {
      content: "";
      height: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    margin-bottom: 64px;
    padding: 53px;

    &:nth-child(2) h3 {
      padding-left: 21px;
    }
  }
`;

export const NumberTitleWrap = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  align-self: stretch;

  @media ${themes.primary.media.minMobile} {
    gap: 35px;
    align-items: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 53px;
  }
`;

export const Number = styled.h3`
  margin: 0 0 0 0;
  padding: 0 0 0 5px;
  align-self: flex-start;
  color: ${themes.primary.colors.estimationAdminBg};
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  -webkit-text-stroke: 1px black;
  text-shadow: 4px 1px 0 #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 77px;
  line-height: 0.9em;
  font-weight: bold;

  @media ${themes.primary.media.minMobile} {
    -webkit-text-stroke: 2px black;
    text-shadow: 7px 2px 0 #000;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 102px;
  }
`;

export const DesktopTitle = styled.div`
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  margin: 0 0 0 0;

  @media ${themes.primary.media.minMobile} {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 21px;
  }
`;

export const Title = styled.h4`
  margin: 0 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 22px;
  line-height: normal;

  @media screen and ${themes.primary.media.maxMobile} {
    min-height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 8px;
    gap: 5px;
  }

  @media ${themes.primary.media.minMobile} {
    font-size: 36px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
  }
`;

export const ProjectName = styled.span`
  display: inline-block;
  margin-right: 16px;
`;

export const Links = styled.span`
  display: inline-flex;
  gap: 16px;
  font-size: 22px;
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: underline;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 8px;
  }

  @media ${themes.primary.media.minMobile} {
    font-size: 0.8em;
  }
`;

export const Date = styled.p`
  margin: 12px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  line-height: normal;

  &.mobile {
    display: block;
  }

  &.desktop {
    display: none;
  }

  @media ${themes.primary.media.minMobile} {
    margin: 8px 0 0 0;
    font-size: 22px;
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }
`;

export const Role = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  line-height: normal;
  &.mobile {
    display: block;
  }
  &.desktop {
    display: none;
  }

  @media ${themes.primary.media.minMobile} {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
    }
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29px;
    margin-top: 10px;
  }
`;

export const About = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
  }
`;

export const AboutTitle = styled.h4`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 18px;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29px;
  }
`;

export const AboutText = styled.div`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 1.6;

  @media ${themes.primary.media.minMobile} {
    font-size: 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const AchievementsTechnologyWrap = styled.div`
  @media ${themes.primary.media.minMobile} {
    display: flex;
    justify-content: space-between;
    gap: 58px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 74px;
  }
`;

export const Technologies = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media screen and ${themes.primary.media.minMobile} {
    width: 100%;
    flex: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const TechnologiesTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 18px;
  text-align: center;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29px;
  }
`;

interface IPortfolioIconProps {
  readonly firstSet?: boolean;
  readonly isOneRow?: boolean;
}

export const PortfolioPageIconContainer = styled.div<IPortfolioIconProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ isOneRow }) => (isOneRow ? "center" : "flex-start")};
  padding-bottom: 20px;
  row-gap: 16px;
  column-gap: 8px;
  margin: 16px auto 0;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    position: relative;
    width: 78px;
    height: 55px;
    flex-shrink: 0;
    filter: invert(0) contrast(10);
  }

  @media screen and ${themes.primary.media.minMobile} {
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, minmax(110px, 110px));

    .image {
      width: 110px;
      height: 78px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 21px;
    row-gap: 21px;
    column-gap: 10px;
  }
`;

export const TechText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
  color: ${themes.primary.colors.primary};

  @media screen and ${themes.primary.media.max1440} {
    font-size: calc(
      clamp(10px, 10px + (100vw - 375px) * ((14 - 10) / (768 - 375)), 14px)
    );

    line-height: calc(
      clamp(12px, 12px + (100vw - 375px) * ((16 - 12) / (768 - 375)), 16px)
    );
  }
`;
