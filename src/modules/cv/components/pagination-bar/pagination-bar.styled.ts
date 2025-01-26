import styled from "styled-components";
import { Pagination as MuiPagination } from "@mui/material";
import themes from "../../../../utils/themes";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: -12px;
  margin-bottom: 90px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 112px;
    margin-top: -15px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 8px;
    width: 100%;
    margin-bottom: 53px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: calc(
        clamp(28px, 28px + (100vw - 375px) * ((90 - 28) / (768 - 375)), 90px)
      )
      0 42px 0;
  }

  & .MuiPagination-ul {
    display: flex;
    column-gap: clamp(
      16px,
      16px + (100vw - 1440px) * ((22 - 16) / (1920 - 1440)),
      22px
    );

    @media ${themes.primary.media.maxMobile} {
      column-gap: 12.6px;
    }
  }

  & .MuiPaginationItem-root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: clamp(
      26px,
      26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
      35px
    );
    width: clamp(
      26px,
      26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)),
      35px
    );
    font-size: clamp(
      16px,
      16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)),
      20px
    );
    font-family: ${themes.primary.font.family.openSans};
    cursor: pointer;

    &:hover {
      background-color: #000;
      border: 1px solid #000;
      color: #f1efed;
    }

    &.Mui-selected {
      background-color: #000;
      border: 1px solid #000;
      color: #f1efed;

      &:hover {
        background-color: #000;
        color: #f1efed;
      }
    }
  }

  & .MuiPaginationItem-ellipsis {
    font-size: clamp(
      16px,
      16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)),
      20px
    );
    font-family: ${themes.primary.font.family.openSans};
  }
`;
