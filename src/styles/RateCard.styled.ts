import styled, { css } from "styled-components";
import { IValue } from "../types/Admin/AdminRateCard.types";
import themes from "../utils/themes";

interface IActiveAccordion {
  readonly isActive?: boolean;
}

interface IRateRowProps {
  readonly countLevels: number;
  readonly countValues: IValue[];
}

function createCSSRow(levelsNumber = 1, levelValues: IValue[]) {
  let styles = "";
  const costLength = levelValues
    .map((val) => val.cost)
    .filter((el) => el).length;
  const techLength = levelValues
    .map((val) => val.technology)
    .filter((el) => el).length;
  const maxFromVal = Math.max(costLength, techLength);

  for (let i = 0; i < levelsNumber; i += 1) {
    techLength > costLength &&
      (styles += `
       &:has(.rateTech${i} span:hover) .rateCost${i} span,
       .rateTech${i} span:hover,
       &:has(.rateCost${i} span:hover) .rateTech${i} span,
       .rateCost${i} span:hover{
         color: ${themes.primary.colors.darkBlue}
         }`);
    for (let j = 0; j < maxFromVal; j += 1) {
      styles += `
       &:has(.rateTech${i} .tech${j}:hover) .rateCost${i} .cost${j},
       &:has(.rateName${i}:hover) .rateCost${i} .cost${j},
       &:has(.rateName${i}:hover) .rateTech${i} .tech${j},
       &:has(.rateTech${i} .tech${j}:hover) .rateName${i},
       &:has(.rateCost${i} .cost${j}:hover) .rateName${i},
        .rateTech${i} .tech${j}:hover,
        .rateName${i}:hover,
        .rateCost${i} .cost${j}:hover,
       &:has(.rateCost${i} .cost${j}:hover) .rateTech${i} .tech${j} {
         color: ${themes.primary.colors.darkBlue};
       }`;
    }
  }

  return css`
    ${styles}
  `;
}

export const RateCardContentContainer = styled.div`
  padding: 65px 80px 185px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;

  @media ${themes.primary.media.maxMobile} {
    padding: 90px 41px 90px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 28px 20px 65px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    gap: calc(
      clamp(20px, 20px + (100vw - 1440px) * ((27 - 20) / (1920 - 1440)), 27px)
    );
    padding: 58px 63px 141px 63px;
    & .serviceWrapper {
      width: calc(
        clamp(
          1318px,
          1318px + (100vw - 1440px) * ((1757 - 1318) / (1920 - 1440)),
          1757px
        )
      );
    }
  }
  @media ${themes.primary.media.min4K} {
    padding: 77px 81.33px 190px 81.33px;
    & .serviceWrapper {
      width: 100%;
    }
  }
`;

export const RateCardServiceName = styled.h3`
  font-size: calc(
    clamp(24px, 24px + (100vw - 1440px) * ((32 - 24) / (1920 - 1440)), 32px)
  );
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.primary};
  margin: 0;
  padding: 0;

  @media ${themes.primary.media.maxLowScreenMobile} {
    letter-spacing: 0.8px;
    font-size: 16px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    letter-spacing: 1.2px;
  }
`;

export const RateCardServiceDropDown = styled.div<IActiveAccordion>`
  padding: 21px 30px 21px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(
    clamp(83px, 83px + (100vw - 1440px) * ((110 - 83) / (1920 - 1440)), 110px)
  );
  cursor: pointer;
  background: ${(props) =>
    props.isActive
      ? `linear-gradient(
      90deg,
      ${themes.primary.colors.gradientColor1RateCard} 0%,
      ${themes.primary.colors.gradientColor2RateCard} 100%
    )`
      : "transparent"};
  border: ${(props) =>
    props.isActive
      ? `1px solid ${themes.primary.colors.borderRateCard}`
      : "1px solid transparent"};

  svg {
    transform: ${(props) =>
      props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.gradientColor1RateCard} 0%,
      ${themes.primary.colors.gradientColor2RateCard} 100%
    );
    border: 1px solid ${themes.primary.colors.borderRateCard};
  }

  @media ${themes.primary.media.maxMobile} {
    height: 82px;

    &:active {
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.gradientColor1RateCard} 0%,
        ${themes.primary.colors.gradientColor2RateCard} 100%
      );
      border: 1px solid ${themes.primary.colors.borderRateCard};
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 23px 19px 18px 14px;
    svg {
      width: 15px;
      height: 8px;
      margin-bottom: 3px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    padding: 21.5px 20px 22.5px 14px;
    letter-spacing: 1.2px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    padding: 18px 23px 14px 14px;
    svg {
      width: 18px;
      height: 9px;
      margin-bottom: 7px;
    }
  }
  @media ${themes.primary.media.min4K} {
    width: 100%;
    letter-spacing: 1.6px;
    padding: 21px 30px 21px 18px;
    svg {
      width: 24px;
      height: 12px;
      margin-bottom: 3px;
    }
  }
`;

export const RateCardImageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  line-height: 160%;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 1.2px;

  @media ${themes.primary.media.maxMobile} {
    gap: 10px;
    span img {
      width: 51px !important;
      height: 51px !important;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 10px;
    span img {
      width: 36px !important;
      height: 36px !important;
    }
  }
  @media ${themes.primary.media.minServiceWeb} {
    span img {
      width: 51px !important;
      height: 51px !important;
    }
  }
  @media ${themes.primary.media.min4K} {
    gap: 18.67px;

    span img {
      width: 68px !important;
      height: 68px !important;
    }
  }
`;

export const RateCardLevelTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: stretch;
  // for rate hover
  tbody:has(.rateRow .spanCostDefault span:hover) .rateRow .mainSpanRate span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanNameDefault:hover) .rateRow .mainSpanRate span {
    color: ${themes.primary.colors.darkBlue};
  }

  // for name hover
  tbody:has(.rateRow .spanCostDefault span:hover) .rateRow .mainSpanName {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanRateDefault span:hover) .rateRow .mainSpanName {
    color: ${themes.primary.colors.darkBlue};
  }

  tbody:has(.rateRow .mainSpanName:hover) .rateRow {
    color: ${themes.primary.colors.darkBlue};
  }

  // for cost hover
  tbody:has(.rateRow .spanRateDefault span:hover) .rateRow .mainSpanCost span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .spanNameDefault:hover) .rateRow .mainSpanCost span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .mainSpanCost span:hover) .rateRow .spanRateDefault span {
    color: ${themes.primary.colors.darkBlue};
  }
  tbody:has(.rateRow .mainSpanCost span:hover) .rateRow .mainSpanName {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.min4K} {
  }
`;

export const RateCardLevelRow = styled.tr<IRateRowProps>`
  ${(props) => createCSSRow(props.countLevels, props.countValues)};
`;

export const RateCardLevelData = styled.td`
  word-wrap: break-word;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  line-height: 160%;
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  padding: 12px 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  word-spacing: 3px;
  &.spanCostDefault,
  &.mainSpanCost {
    width: calc(
      clamp(74px, 74px + (100vw - 375px) * ((400 - 74) / (1920 - 375)), 400px)
    );
  }
  &.spanNameDefault,
  &.mainSpanName {
    width: calc(
      clamp(88px, 88px + (100vw - 375px) * ((320 - 88) / (1920 - 375)), 320px)
    );
  }
  &.spanRateDefault,
  &.mainSpanRate {
    width: calc(
      clamp(
        173px,
        173px + (100vw - 375px) * ((1037 - 173) / (1920 - 375)),
        1037px
      )
    );
  }

  @media ${themes.primary.media.maxMobile} {
    letter-spacing: 0.9px;
    padding: 12px 14px;
    font-size: 18px;
    height: 53px;
    &.spanCostDefault,
    &.mainSpanCost {
      width: calc(
        clamp(74px, 74px + (100vw - 375px) * ((242 - 74) / (768 - 375)), 242px)
      );
    }
    &.spanNameDefault,
    &.mainSpanName {
      width: calc(
        clamp(88px, 88px + (100vw - 375px) * ((101 - 88) / (768 - 375)), 101px)
      );
    }
    &.spanRateDefault,
    &.mainSpanRate {
      width: calc(
        clamp(
          173px,
          173px + (100vw - 375px) * ((343 - 173) / (768 - 375)),
          343px
        )
      );
    }
  }
  @media ${themes.primary.media.minServiceWeb} {
    height: 53px;
    padding: 12px 14px;
    letter-spacing: 0.9px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    padding: calc(
        clamp(12px, 12px + (100vw - 1440px) * ((16 - 12) / (1920 - 1440)), 16px)
      )
      calc(
        clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
      );
    &.spanCostDefault,
    &.mainSpanCost {
      width: calc(
        clamp(
          300px,
          300px + (100vw - 1440px) * ((400 - 300) / (1920 - 1440)),
          400px
        )
      );
    }
    &.spanNameDefault,
    &.mainSpanName {
      width: calc(
        clamp(
          240px,
          240px + (100vw - 1440px) * ((320 - 240) / (1920 - 1440)),
          320px
        )
      );
    }
    &.spanRateDefault,
    &.mainSpanRate {
      width: calc(
        clamp(
          778px,
          778px + (100vw - 1440px) * ((1037 - 778) / (1920 - 1440)),
          1037px
        )
      );
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 14px;
    padding: 5.122px 8px;
    letter-spacing: 0.9px;
  }

  @media ${themes.primary.media.min4K} {
    padding: 16px 18px;
    height: 56px;
  }

  &.spanCost {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const RateCardContainer = styled.div`
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-top: 107px;
  }
`;
