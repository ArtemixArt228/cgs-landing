import styled from "styled-components";
import themes from "../../../../utils/themes";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;

  .MuiPaginationItem-root {
    margin: 0 6px;
    border-radius: 8px;
    border: 1px solid ${themes.primary.colors.cloud};
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: 12px;
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 2;

    @media screen and ${themes.primary.media.min768Mobile} {
      font-size: 16px;
      line-height: 1.5;
      width: 48px;
      height: 48px;
    }

    @media ${themes.primary.media.min4K} {
      font-size: 20px;
      width: 64px;
      height: 64px;
    }

    &.Mui-selected {
      border: 1px solid ${themes.primary.colors.darkBlue};
      color: ${themes.primary.colors.darkBlue};
      background-color: transparent;
    }

    &.Mui-disabled {
      background-color: ${themes.primary.colors.dropdownHover};
    }

    &.MuiPaginationItem-ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
  }
`;
