import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 34px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 1.6;
  margin: 0;

  @media ${themes.primary.media.min1440} {
    font-size: 34px;
  }

  @media ${themes.primary.media.min4K} {
    font-size: 45px;
  }
`;

export const ReadMoreItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  color: ${themes.primary.colors.blogDarkText};
  font-family: ${themes.primary.font.family.namu};
  & > a,
  & > div {
    width: 100%;
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    //grid-template-columns: repeat(auto-fill, minmax(573px, 1fr));
    & > a,
    & > div {
      flex: 0 0 calc(50% - 13px);
    }
  }

  @media screen and ${themes.primary.media.minLaptop} {
    //grid-template-columns: repeat(auto-fill, minmax(573px, 1fr));
    & > a,
    & > div {
      flex: 0 0 calc(33% - 13px);
    }
  }

  @media screen and ${themes.primary.media.min4K} {
    gap: 32px;
    & > a,
    & > div {
      flex: 0 0 calc(33% - 17px);
    }
  }
`;

export const Space = styled.div`
  height: 70px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
`;

export const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;

  @media ${themes.primary.media.min768Mobile} {
    padding-top: 0;
    gap: 32px;
  }

  @media ${themes.primary.media.min4K} {
    padding-top: 0;
    gap: 42px;
  }
`;
