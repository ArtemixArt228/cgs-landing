import styled from "styled-components";
import themes from "../../../../utils/themes";

export const HeaderContainerBlock = styled.div`
  width: 100%;
  h2 {
    font-size: 24px;
    padding-bottom: 12px;
    margin: 0 0 6px 0;
    border-bottom: 1px solid ${themes.primary.colors.headerBorder};
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    h2 {
      font-family: ${themes.primary.font.family.namu};
      font-style: normal;
      font-size: 4.35em;
      line-height: 130%;
      padding-bottom: 20px;
      border-bottom: 1px solid ${themes.primary.colors.headerBorder};
      margin-bottom: 15px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    h2 {
      font-size: 4.25em;
      padding-bottom: 23px;
      margin: 0 0 28px 0;
    }
  }
`;

export const Block1HeaderContainerBlock = styled(HeaderContainerBlock)`
  h2 {
    margin-top: 0;
    @media ${themes.primary.media.maxMobile} {
      font-size: 24px;
      line-height: 32.16px;
      margin-bottom: 10px;
      padding-bottom: 12px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 40px;
      line-height: 56px;
      padding-bottom: 16px;
      margin-bottom: 15px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 52px;
      line-height: 67.6px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 68px;
      line-height: 88.4px;
      padding-bottom: 17px;
      margin-bottom: 25px;
    }
  }
`;
export const HeaderImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 12px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 16px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 0;
  }
  @media ${themes.primary.media.minPCFullHD} {
    overflow: hidden;
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(375px, 375px + (100vw - 375px) * ((650 - 375) / (768 - 375)), 650px)
    );
    width: calc(
      clamp(375px, 375px + (100vw - 375px) * ((650 - 375) / (768 - 375)), 650px)
    );
  }
  @media ${themes.primary.media.min768Mobile} {
    height: calc(
      clamp(
        650px,
        650px + (100vw - 768px) * ((866 - 650) / (1100 - 768)),
        866px
      )
    );
    width: calc(
      clamp(
        650px,
        650px + (100vw - 768px) * ((866 - 650) / (1100 - 768)),
        866px
      )
    );
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    height: 650px;
    width: 650px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 866px;
    width: 866px;
  }
`;
export const HeaderBottomSection = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    justify-content: initial;
    align-items: flex-start;
    gap: 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderBottomSectionFlag = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.5em;
    line-height: 130%;
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 28px;
    p {
      font-size: 14px;
      line-height: 16.8px;
    }
    img {
      width: 24px !important;
      height: 12px !important;
      scale: 1.4;
    }
    padding: 8px 0;
  }
  @media ${themes.primary.media.min768Mobile} {
    p {
      font-size: 18px;
      line-height: 21.6px;
    }
    img {
      width: 30px !important;
      height: 16px !important;
      scale: 1.4;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    p {
      font-size: 24px;
      line-height: 28.8px;
    }
    img {
      width: 40px !important;
      height: 22px !important;
    }
  }
`;

export const PortfolioPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 2.8em;
    line-height: 160%;
    text-transform: uppercase;
    color: ${themes.primary.colors.primary};
    margin-top: 0;
    margin-bottom: 12px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
    h3 {
      font-size: 24px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 16px;
    h3 {
      font-size: 34px;
      line-height: 54.4px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 21.33px;
    max-width: 100%;

    h3 {
      margin-bottom: 15px;
      font-size: 2.875em;
    }
  }
`;

export const CaseStudyTag = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    353.75deg,
    ${themes.primary.colors.grey} -1.56%,
    ${themes.primary.colors.caseStudyTagGradientDark} 52.39%,
    ${themes.primary.colors.grey} 127.64%
  );
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  @media ${themes.primary.media.maxMobile} {
    line-height: 18px;
    font-size: 14px;
    height: 42px;
  }
  @media ${themes.primary.media.min768Mobile} {
    line-height: 24px;
    font-size: 16px;
    height: 48px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    line-height: 24px;
    font-size: 16px;
    height: 48px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 32px;
    font-size: 20px;
    height: 64px;
    padding: 16px 21.33px;
  }
`;

export const CaseStudyTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 8px;
  margin-top: 16px;
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    gap: 10.67px;
  }
`;

export const PortfolioPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 32px;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    &.hero-section {
      align-items: flex-start;
      margin-bottom: -50px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 40px;
    &.hero-section {
      margin-bottom: -70px;
    }
  }
`;

export const FullWidthWrapper = styled.div`
  width: 100%;
  @media ${themes.primary.media.minBreakpoint1100} {
    min-width: 464px;
  }
  @media ${themes.primary.media.min1440} {
    min-width: 706px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    min-width: 946px;
  }
`;

export const Breadcrumbs = styled.div`
  font-family: ${themes.primary.font.family.namu};
  margin: 10px 16px 0;
  font-size: ${themes.primary.font.size.smallestBlogTitle};
  line-height: 1.42;
  color: #8f8e93;

  & a {
    color: #8f8e93;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  & span {
    color: #8f8e93;
  }

  & span:last-child {
    color: black;
  }

  @media ${themes.primary.media.min768Mobile} {
    margin: 40px 35px 0;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    margin: 8px 0 0 52px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.articleContentText};
    margin: 8px 0 0 68px;
  }
`;

export const BreadcrumbsCaseStudy = styled(Breadcrumbs)`
  @media ${themes.primary.media.maxMobile} {
    margin: 0 0 32px;
    line-height: 16.8px;
    font-size: 14px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin: 0 0 32px;
    line-height: 19.2px;
    font-size: 16px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin: 0 0 48px;
    line-height: 19.2px;
    font-size: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 0 64px;
    line-height: 24px;
    font-size: 20px;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #bbb;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 10px;
  }
`;

export const PortfolioPageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  @media ${themes.primary.media.minLaptop} {
    flex-direction: row;
    margin-bottom: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 32px;
  }
`;

export interface IPortfolioProjectLink {
  readonly isProjectLink: boolean;
}
