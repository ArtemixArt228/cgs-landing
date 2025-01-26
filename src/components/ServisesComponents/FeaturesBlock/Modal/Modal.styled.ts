import styled from "styled-components";
import themes from "../../../../utils/themes";
import { arrowOne, arrowTwo } from "../../HeroSection/HeroSection.styled";

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;

  @media (max-width: 1199px) {
    overflow-x: auto;
    padding-top: 50px;
    padding-bottom: 100px;
    align-items: flex-start;
  }
`;

export const DescktopContentWrapper = styled.div`
  background-color: #f1efed;
  display: flex;
  border-radius: 16px;
  align-items: stretch;
  max-height: 90%;
  @media ${themes.primary.media.min1440} {
    height: 718.48px;
  }
  @media ${themes.primary.media.min4K} {
    height: 968.98px;
  }
  @media ${themes.primary.media.minWidth2200} {
    height: 968.98px;
  }
`;

export const MobileContentWrapper = styled.div`
  width: 94%;
  max-width: 688px;
  position: relative;
  padding: 40px;
  border-radius: 16px;
  background-color: #f1efed;
  @media ${themes.primary.media.max767Mobile} {
    padding: 16px 16px;
  }
`;

export const ModalSide = styled.div`
  width: 631px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.left-side {
    padding-left: 61px;
    padding-top: 67.24px;
    padding-right: 39px;
    padding-bottom: 81px;
  }

  &.right-side {
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    border-left: 1.5px solid #c0bfc0;
  }

  @media ${themes.primary.media.max1440} {
    width: 550px;
    &.left-side {
      padding-left: 52px;
      padding-top: 36px;
      padding-right: 39px;
      padding-bottom: 42px;
    }
  }

  @media ${themes.primary.media.min4K} {
    width: 851px;
    &.left-side {
      padding-left: 86px;
      padding-top: 92px;
      padding-right: 40px;
      padding-bottom: 115px;
    }
  }
`;

export const Title = styled.div`
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 32.4px;
    margin-bottom: 12px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 56px;
    margin-bottom: 32px;
  }
  @media ${themes.primary.media.min1440} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 28px;
  }
  @media ${themes.primary.media.min4K} {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 70.29px;
  }
`;

export const Description = styled.div`
  font-family: ${themes.primary.font.family.namu};
  overflow: auto;
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 32px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 22px;
    line-height: 35.2px;
    margin-bottom: 64px;
  }
  @media ${themes.primary.media.min1440} {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 60px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 26px;
    margin-bottom: 80px;
    line-height: 41.6px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
  margin-left: auto; 
  margin-bottom: 10px;
  width: 16px;
  height: 16px;
  @media ${themes.primary.media.min1440} {
    width: 14.89px;
    height: 14.89px;
  }
  @media ${themes.primary.media.min4K} {
    width: 20.08px;
    height: 20.08px;
  }
`;

export const BtnContainer = styled.button`
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  border: 2px solid ${themes.primary.colors.primary};
  padding: 15px 17px 15px 17px;
  border-radius: 10px;
  cursor: pointer;
  width: 80%;
  position: relative;
  font-weight: ${themes.primary.font.weight.heavy};
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s;
  left: 0;
  bottom: 0;
  align-self: flex-end;

  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 15.84px;
    max-width: 203px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 19.8px;
    max-width: 254px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    font-size: 16px;
    line-height: 15.84px;
    max-width: 213.45px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 24px;
    line-height: 23.76px;
    max-width: 309.41px;
    height: 69.19px;
  }
  @media ${themes.primary.media.minWidth2200} {
    max-width: 420px;
  }
`;
