import styled from "styled-components";
import themes from "../../../../utils/themes";

export const AiSolutionsContainer = styled.div`
  background: linear-gradient(
    199.6deg,
    ${themes.primary.colors.aiSolutionsGradient1} 23.12%,
    ${themes.primary.colors.aiSolutionsGradient2} 75.26%
  );
  border: 1px solid ${themes.primary.colors.vodka};
  border-radius: 21.33px;
  padding: 24px;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    display: flex;
    flex-direction: column;
    gap: 52px;
    padding: 32px;
    width: 96.5%;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    width: 100%;
    padding: 40px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 52px;
    gap: 68px;
  }
`;

export const AiSolutionsList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media ${themes.primary.media.minBreakpoint1100} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &.three-in-a-row {
      grid-template-columns: repeat(3, 1fr);
    }

    &.five-grid-elements {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 42px;
  }
`;

export const AiSolutionsListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  height: 384px;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0px 0px 10.67px 0px #5869dd33;
  cursor: pointer;

  background-color: ${themes.primary.colors.grey};

  @media ${themes.primary.media.min768Mobile} {
    height: 264px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    height: 264px;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    &:hover,
    &:focus {
      background-color: rgba(233, 233, 248, 1);
    }

    &.grid-item-in-a-row1,
    &.grid-item-in-a-row2,
    &.grid-item-in-a-row3 {
      height: 324px;
    }

    &.grid-item1 {
      height: 324px;
      grid-column: span 2 / span 2;
    }
    &.grid-item2 {
      height: 324px;
      grid-column: span 2 / span 2;
      grid-column-start: 3;
    }
    &.grid-item3 {
      height: 324px;
      grid-column: span 2 / span 2;
      grid-column-start: 5;
    }
    &.grid-item4 {
      grid-column: span 3 / span 3;
      grid-row-start: 2;
    }
    &.grid-item5 {
      grid-column: span 3 / span 3;
      grid-column-start: 4;
      grid-row-start: 2;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 342px;
    padding: 42px;
    gap: 48px;

    &.grid-item-in-a-row1,
    &.grid-item-in-a-row2,
    &.grid-item-in-a-row3 {
      height: 418px;
    }

    &.grid-item1,
    &.grid-item2,
    &.grid-item3 {
      height: 418px;
    }
  }
`;

export const AiSolutionsIconContainer = styled.div`
  width: 62px;
  height: 62px;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${themes.primary.colors.aiSolutionsGradient1};

  @media ${themes.primary.media.minPCFullHD} {
    width: 83px;
    height: 83px;
  }
`;

export const AiSolutionsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
  }
`;

export const AiSolutionsHeadline = styled.h3`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 0.1px;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    letter-spacing: 0.13px;
  }
`;

export const AiSolutionsDescription = styled.p`
  margin: 0;
  color: ${themes.primary.colors.mutedBlueGrey};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 1.5;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }
`;

export const AiSolutionsTitle = styled.h2`
  margin: 0;
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;

  @media ${themes.primary.media.min768Mobile} {
    line-height: 54.4px;
    font-size: 34px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    text-align: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    line-height: 1.6;
    font-size: 44px;
  }
`;

export const AiSolutionsTitleContainer = styled.div`
  @media ${themes.primary.media.minBreakpoint1100} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
