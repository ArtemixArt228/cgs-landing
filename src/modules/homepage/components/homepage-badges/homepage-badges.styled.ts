import styled, { css } from "styled-components";

import themes from "../../../../utils/themes";
import { IMobileLine } from "../../../../types/Components.types";
import { ILine } from "../../../../types/Decoration.types";

type BadgesData = {
  columnsNumber: number;
};
export const BadgesContainer = styled.section`
  position: relative;
`;

export const BadgesData = styled.div<BadgesData>`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px 0;

  & > :nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  & > :nth-child(2) {
    grid-row: 1;
    grid-column: 2;
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 30px 0;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 80%;
    justify-content: space-around;
  }
  @media ${themes.primary.media.minLaptop} {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    width: 100%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    justify-content: space-around;
  }
`;

export const BadgeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 200px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 267px;
    height: 267px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 200px;
    width: 200px;
  }

  @media ${themes.primary.media.minTablet} {
    height: 140px;
    width: 140px;
  }

  & span {
    height: 200px;
    transition: all 0.5s ease;
    @media ${themes.primary.media.maxTabletLandScape} {
      height: 140px;
      width: 140px;
    }
  }

  & span:hover {
    transform: translateY(-5%);
  }

  @media (max-width: 768px) {
    & span img {
      height: 84px !important;
    }
  }
`;

export const BgiContainer = styled.div<ILine>`
  width: 100vw;
  position: absolute;
  background: ${({ angle }) =>
    css`radial-gradient(
      25% 240px at ${angle},
      ${themes.primary.colors.homePageGradient1} ,
      ${themes.primary.colors.grey}
    );`};
  background-size: 100% 100%;
  box-shadow: 0 0 8px 0 #5869dd33;

  @media ${themes.primary.media.maxMobile} {
    height: 87px;
    margin: 0 -16px;
    top: 25%;
  }

  @media ${themes.primary.media.min768Mobile} {
    height: 113px;
    margin: 0 -40px;
    top: 25%;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin: 0 -52px;
    top: 25%;
  }

  @media ${themes.primary.media.minLaptop} {
    height: 115px;
    top: 25%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 153px;
    margin: 0 -68px;
    top: 25%;
  }
`;

export const MobileLine = styled.div<IMobileLine>`
  display: none;
  width: 120%;

  position: relative;
  left: -5%;
  height: 24px;
  background: linear-gradient(
    ${({ grad1, grad2 }) => css`90deg ${grad1} 13.67%, ${grad2} 90.39%`}
  );

  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0 ${themes.primary.colors.black};
  z-index: -1;

  &:not(:last-child) {
    margin-bottom: 7.56em;
  }
`;
