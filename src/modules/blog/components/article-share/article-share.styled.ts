import styled from "styled-components";
import themes from "../../../../utils/themes";

interface IShareOnWrap {
  isArticle?: boolean;
}

export const Wrapper = styled.section<IShareOnWrap>`
  display: flex;
  column-gap: 24px;
  align-items: center;
  width: 356px;

  &.mobile {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 30px;
    width: 432px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: ${(isArtilce) => (isArtilce ? "flex-start" : "center")};
    justify-content: ${(isArtilce) => (isArtilce ? "flex-start" : "center")};
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    row-gap: ${(isArtilce) => (isArtilce ? "0" : "16px")};
    align-items: flex-start;

    &.web {
      display: none;
    }

    &.mobile {
      display: flex;
    }
  }
`;

export const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
  color: #272c2f;

  @media ${themes.primary.media.min4K} {
    font-size: 16px;
    line-height: 21.33px;
  }
`;

export const IconImage = styled.img`
  max-width: 24px;
  max-height: 24px;
  object-fit: contain;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 45px;
    max-height: 45px;
    width: 45px;
    height: 45px;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${themes.primary.colors.greyAdminServices};
  border-radius: 10px;

  &:hover {
    background-color: ${themes.primary.colors.primary};
    cursor: pointer;
  }
  &:hover ${IconImage} {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg)
      brightness(111%) contrast(101%);
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 65px;
    height: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    border-top: 0.7px solid rgba(0, 0, 0, 0.25);
  }

  @media ${themes.primary.media.min4K} {
    width: 48px;
    height: 48px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
