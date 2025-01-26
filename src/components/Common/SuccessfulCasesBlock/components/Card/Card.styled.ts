import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const CardWrapper = styled.a`
  height: 186px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 8px 0 #5869dd33;
  background: linear-gradient(90deg, #e6e6ec 0%, #eeeced 100%);

  @media screen and ${themes.primary.media.minTablet} {
    height: 335px;
    flex-direction: column;
    margin: 0;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    height: 248px;
    border-radius: 5px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  position: relative;
  padding: 20px;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 26px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  height: 43px;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  margin: 0;
  padding: 4px 5px;
  cursor: pointer;
  background: #535557;
  color: #f1efed;

  .highlight-wrapper {
    border-radius: 6px;
    background: linear-gradient(360deg, #cacde9 0%, #e4e4ee 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    left: 0;
    box-shadow: 0 0 8px 0 #233ce126;
    top: 0;
  }

  .highlight-text {
    position: relative;
    z-index: 2;
    white-space: nowrap;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 28px;
    padding-inline: 10px;
    height: 37px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 0 10px;
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    padding: 0 14px;
    font-size: 38px;
    height: 51px;
    border-radius: 13px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.span`
  font-size: 24px;
  margin-top: 5px;
  letter-spacing: -0.15px;

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
  }
`;

export const FooterText = styled.div`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 9px;
  }
  @media screen and ${themes.primary.media.max767Mobile} {
    font-size: 20px;
    line-height: 22px;
    margin-top: 0;
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-right: 0;
  gap: 6px;
  @media screen and ${themes.primary.media.minTablet} {
    align-items: center;
    justify-content: center;
    margin-right: 0;
    gap: 8px;
  }
  @media screen and ${themes.primary.media.minBreakpoint1100} {
    gap: 0;
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    gap: 8px;
  }
`;

export const Description = styled.div`
  color: #6a6b70;
  font-size: 20px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;

  span {
    margin-left: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    justify-content: center;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 9px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 0;
    font-size: 24px;

    img {
      width: 27px !important;
      height: 27px !important;
    }
  }
`;

export const Button = styled.button`
  font-family: ${themes.primary.font.family.namu};
  background-color: transparent;
  height: 38px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  border: 2px solid ${themes.primary.colors.primary};
  color: ${themes.primary.colors.primary};
  font-size: 14px;
  text-transform: uppercase;
  width: 144px;
  font-weight: 500;
  gap: 20px;

  &.bottom {
    width: 190px;
  }

  @media ${themes.primary.media.min1440} {
    &.bottom {
      position: absolute;
      right: 4px;
      bottom: -4px;
    }
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 18.67px;
    padding-inline: 18px;
    width: 192px;
    height: 50px;
    justify-content: space-around;
    border-radius: 14px;
    line-height: 22.4px;
    &.bottom {
      width: 255px;
      font-size: 18.67px;
      line-height: 22.4px;
      min-width: 0;
      border-radius: 10px;

      padding: 16px 20px 16px 18.67px;
      gap: 8px;
      height: 50.67px;
    }

    img {
      scale: 1.225;
    }
  }

  @media screen and ${themes.primary.media.minWidth2200} {
    font-size: 18.67px;
    padding-inline: 18px;
    width: 192px;
    height: 50px;
    justify-content: space-around;
    border-radius: 14px;
    line-height: 22.4px;
    &.bottom {
      width: 330px;
      font-size: 26px;
      line-height: 30px;
      min-width: 0;
      border-radius: 10px;

      padding: 18px 22px 18px 20.67px;
      gap: 8px;
      height: 60.67px;
    }

    img {
      scale: 1.225;
    }
  }
  @media screen and ${themes.primary.media.maxTabletPortrait} {
    &.bottom {
      gap: 9px;
    }
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    border: 1.5px solid ${themes.primary.colors.primary};
    padding: 0;
    gap: 15px;

    &.bottom {
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media screen and ${themes.primary.media.minTablet} {
    justify-content: space-between;
    gap: 0;
    width: 100%;
    flex-direction: row-reverse;

    > img {
      margin-bottom: 5px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 5px;

    > img {
      scale: 1.25;
      margin-left: 20px !important;
    }
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;

  img {
    border-radius: 5px;
  }

  @media ${themes.primary.media.minTablet} {
    width: 100%;
    justify-content: space-between;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 27px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 48px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 13px;
  height: 100%;
  width: 145px;
  scale: 1.15;

  img {
    border-radius: 5px;
  }

  @media ${themes.primary.media.minTablet} {
    scale: 1.1;
    position: absolute;
    width: 145px;
    height: 155px;
    top: 60%;
    left: 53%;
    transform: translate(-50%, -50%);
  }

  @media ${themes.primary.media.minPCFullHD} {
    scale: 1.19;
    width: 180px;
  }
`;

export const FooterCardWrapper = styled.a`
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;
  background-size: cover;
  background-image: url("/contact-us-bg.png");
  width: 100%;
  border-radius: 16px;
  display: flex;
  margin: 32px 0 0;

  @media screen and ${themes.primary.media.min1440} {
    margin: 2.5em 0 0;
  }

  @media screen and ${themes.primary.media.minBreakpoint1100} {
    background-position: center;
  }

  @media screen and ${themes.primary.media.maxTabletLandScape} {
    height: 100%;
  }

  @media ${themes.primary.media.max767Mobile} {
    height: 100%;
    margin: 32px 0 0;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    width: auto;
    margin: 32px -68px 0 -68px;

    &.services {
      margin: 32px 0 0;
    }
  }
`;

export const TitleAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 0;
    width: 100%;
    justify-content: space-between;
    gap: 130px;
    align-items: flex-start;
  }
  @media ${themes.primary.media.max737} {
    align-items: flex-start;
  }

  @media screen and ${themes.primary.media.max767Mobile} {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  padding: 26px 20px 23px;
  justify-content: space-between;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    justify-content: flex-start;
    gap: 6px;
    padding: 20px;
  }

  @media screen and ${themes.primary.media.max767Mobile} {
    flex-direction: column;
    text-align: center;
    padding: 21px 50px 15px;
    gap: 8px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 26.67px;
    gap: 14px;
  }
`;

export const ButtonAndDescription = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media ${themes.primary.media.minTablet} {
    display: block;
    button {
      margin: 32px auto 0;
    }
  }
  @media ${themes.primary.media.minTablet} {
    a {
      display: block;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: -5px;
    a {
      transform: scale(1.25);
    }
  }
`;

export const Logo = styled.div`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    width: 145px;
    height: 31px;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 129px;
    height: 50px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    width: 159px;
    height: 50px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 169px;
    height: 65px;
  }
`;
