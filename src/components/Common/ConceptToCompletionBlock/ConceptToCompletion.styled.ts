import styled from "styled-components";
import Image from "next/future/image";
import themes from "../../../utils/themes";

export const ConnectorSvg = styled(Image)`
  position: absolute;
  z-index: 10;
  &.left {
    transform: rotate(180deg);
    top: 70px;
    left: -10px;
  }
  &.right {
    top: 70px;
    right: -10px;
  }
  &.top {
    transform: rotate(-90deg);
    left: calc(50% - 4px);
    top: -20px;
  }
  &.bottom {
    transform: rotate(90deg);
    left: calc(50% - 4px);
    bottom: -20px;
  }
  @media ${themes.primary.media.min4K} {
    width: 10.67px;
    height: 42.67px;
    &.left {
      transform: rotate(180deg);
      top: 103px;
      left: -12px;
      &.center {
        top: 73px;
      }
    }
    &.right {
      top: 103px;
      right: -12px;

      &.center {
        top: 73px;
      }
    }
    &.top {
      transform: rotate(-90deg);
      left: calc(50% - 4px);
      top: -26px;
    }
    &.bottom {
      transform: rotate(90deg);
      left: calc(50% - 4px);
      bottom: -26px;
    }
  }
`;

export const LineSvg = styled(Image)`
  position: absolute;

  @media ${themes.primary.media.minLaptop} {
    width: 68px;
    height: 136px;
    &.item-0 {
      top: 165px;
      left: 259px;
    }
    &.item-1 {
      left: calc(50% - 1px);
      top: 162px;
      height: 23px;
      width: unset;
    }
    &.item-2 {
      top: 165px;
      right: 259px;
      transform: rotateX(180deg);
    }
    &.item-3 {
      transform: rotateX(180deg) rotateY(180deg);
      bottom: 206px;
      right: 259px;
    }
    &.item-4 {
      left: calc(50% - 1px);
      top: calc(100% + 8px);
      height: 23px;
      width: unset;
    }
    &.item-5 {
      transform: rotateY(180deg);
      bottom: 206px;
      left: 259px;
    }
  }

  @media ${themes.primary.media.min1440} {
    width: 112px;
    height: 152px;

    &.item-0 {
      top: 165px;
      left: 286px;
    }
    &.item-1 {
      left: calc(50% - 1px);
      top: 196px;
      height: 32px;
      width: unset;
    }
    &.item-2 {
      top: 165px;
      right: 286px;
      transform: rotateX(180deg);
    }
    &.item-3 {
      transform: rotateX(180deg) rotateY(180deg);
      bottom: 212px;
      right: 286px;
    }
    &.item-4 {
      left: calc(50% - 1px);
      top: calc(100% + 8px);
      height: 32px;
      width: unset;
    }
    &.item-5 {
      transform: rotateY(180deg);
      bottom: 212px;
      left: 286px;
    }
  }
  @media ${themes.primary.media.min4K} {
    width: 149.33px;
    height: 202.67px;
    &.item-0 {
      top: 214px;
      left: 384px;
    }
    &.item-1 {
      height: 42.67px;
      width: unset;
      left: calc(50% - 1px);
      top: 255px;
    }
    &.item-2 {
      top: 214px;
      right: 384px;
      transform: rotateX(180deg);
    }
    &.item-3 {
      transform: rotateX(180deg) rotateY(180deg);
      bottom: 229px;
      right: 384px;
    }
    &.item-4 {
      height: 42.67px;
      width: unset;
      left: calc(50% - 1px);
      top: calc(100% + 8px);
    }
    &.item-5 {
      transform: rotateY(180deg);
      bottom: 229px;
      left: 384px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 680px;

  @media ${themes.primary.media.minLaptop} {
    width: 1120px;
    height: 600px;
  }

  @media ${themes.primary.media.min1440} {
    width: 1336px;
    height: 680px;
  }
  @media ${themes.primary.media.min4K} {
    width: 1784px;
    height: 848px;
  }
`;

export const ConceptWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CenterBlock = styled.div`
  position: absolute;
  border: 1px solid #5869dd;
  border-radius: 16px;
  background: linear-gradient(
      91.14deg,
      rgba(88, 105, 221, 0.07) 4.96%,
      rgba(88, 105, 221, 0.021) 99.17%
    ),
    radial-gradient(
      17.33% 49.28% at 12.35% 23.12%,
      rgba(241, 239, 237, 0.5) 22.72%,
      rgba(241, 239, 237, 0) 100%
    ),
    radial-gradient(
      20.63% 58.66% at 87.12% 56.99%,
      rgba(88, 105, 221, 0.05) 22.72%,
      rgba(88, 105, 221, 0) 100%
    );

  @media ${themes.primary.media.minLaptop} {
    width: 450px;
    top: 192px;
    left: 337px;
  }

  @media ${themes.primary.media.min1440} {
    border-radius: 21px;
    width: 520px;
    top: 236px;
    left: 408px;
  }

  @media ${themes.primary.media.min4K} {
    border-radius: 21px;
    width: 697px;
    top: 310px;
    left: 543px;
  }
`;

export const CenterBlockContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media ${themes.primary.media.minLaptop} {
    padding: 25px;
  }
`;

export const Concept = styled.div`
  border: 1px solid #c0bfc0;
  border-radius: 16px;
  position: absolute;
  color: #000;

  transition: border-color 300ms ease-in-out, background 300ms ease-in-out,
    color 300ms ease-in-out;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  &.current {
    border-color: #5869dd;
    color: #5869dd;
    background: linear-gradient(
        91.14deg,
        rgba(88, 105, 221, 0.07) 4.96%,
        rgba(88, 105, 221, 0.021) 99.17%
      ),
      radial-gradient(
        17.33% 49.28% at 12.35% 23.12%,
        rgba(241, 239, 237, 0.5) 22.72%,
        rgba(241, 239, 237, 0) 100%
      ),
      radial-gradient(
        20.63% 58.66% at 87.12% 56.99%,
        rgba(88, 105, 221, 0.05) 22.72%,
        rgba(88, 105, 221, 0) 100%
      );
  }

  @media ${themes.primary.media.minLaptop} {
    width: 258px;
    height: 160px;

    &.item-0 {
      left: 0;
      top: 93px;
    }
    &.item-1 {
      left: calc(50% - 128px);
      top: 0;
    }
    &.item-2 {
      right: 0;
      top: 93px;
    }
    &.item-3 {
      right: 0;
      bottom: 150px;
    }
    &.item-4 {
      left: calc(50% - 128px);
      top: calc(100% + 38px);
    }
    &.item-5 {
      left: 0;
      bottom: 150px;
    }
  }
  @media ${themes.primary.media.min1440} {
    width: 278px;
    height: 188px;

    &.item-0 {
      left: 0;
      top: 72px;
    }
    &.item-1 {
      left: calc(50% - 140px);
      top: 0;
    }
    &.item-2 {
      right: 0;
      top: 72px;
    }
    &.item-3 {
      right: 0;
      bottom: 119px;
    }
    &.item-4 {
      left: calc(50% - 140px);
      top: calc(100% + 48px);
    }
    &.item-5 {
      left: 0;
      bottom: 119px;
    }
  }

  @media ${themes.primary.media.min4K} {
    width: 373px;
    height: 250px;
    border-radius: 21px;

    &.item-0 {
      left: 0;
      top: 98px;
    }
    &.item-1 {
      left: calc(50% - 188px);
      top: 0;
    }
    &.item-2 {
      right: 0;
      top: 98px;
    }
    &.item-3 {
      right: 0;
      bottom: 98px;
    }
    &.item-4 {
      left: calc(50% - 188px);
      top: calc(100% + 48px);
    }
    &.item-5 {
      left: 0;
      bottom: 98px;
    }
  }
`;

export const ConceptContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  margin-top: 16px;
  font-size: 20px;
  line-height: 24px;

  @media ${themes.primary.media.min4K} {
    font-size: 26px;
    line-height: 28.8px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    line-height: 24px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 24px;
  }

  @media ${themes.primary.media.minLaptop} {
    font-size: 24px;
    line-height: 30px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 32px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 16px;
  }
  @media ${themes.primary.media.minLaptop} {
    font-size: 16px;
  }

  @media ${themes.primary.media.min4K} {
    font-size: 20px;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MobileConcept = styled.div`
  width: 100%;
  border: 1px solid #c0bfc0;
  border-radius: 16px;
  padding: 20px;
  color: #000;
  transition: border-color 300ms ease-in-out, background 300ms ease-in-out,
    color 300ms ease-in-out;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );

  &.current {
    border-color: ${themes.primary.colors.darkBlue};
    background: linear-gradient(
        91.14deg,
        rgba(88, 105, 221, 0.07) 4.96%,
        rgba(88, 105, 221, 0.021) 99.17%
      ),
      radial-gradient(
        17.33% 49.28% at 12.35% 23.12%,
        rgba(241, 239, 237, 0.5) 22.72%,
        rgba(241, 239, 237, 0) 100%
      ),
      radial-gradient(
        20.63% 58.66% at 87.12% 56.99%,
        rgba(88, 105, 221, 0.05) 22.72%,
        rgba(88, 105, 221, 0) 100%
      );

    @media ${themes.primary.media.minLaptop} {
      color: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const IconAndTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7px;

  & .image {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  @media ${themes.primary.media.maxMobile} {
    gap: 14px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 18px;
  }
  @media ${themes.primary.media.minLaptop} {
    gap: 18px;
  }
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  min-width: 80px;

  @media ${themes.primary.media.minLaptop} {
    width: 232px;
    height: 100px;
  }
  @media ${themes.primary.media.min4K} {
    width: 309.33px;
    height: 133.33px;
  }
`;

export const FlexContainer = styled.div`
  & > div {
    flex: 1 1 45%;
    margin-bottom: 0;
  }
`;
