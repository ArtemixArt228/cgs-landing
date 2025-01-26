import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CTAWrapper = styled.div`
  margin-bottom: 140px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 181px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 80px;
  }
`;

export const CTAArrowWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 50px;
  min-width: 97px;

  @media ${themes.primary.media.minPC} {
    width: 20%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 160px;
    height: 25px;
  }
`;

export const CTATitle = styled.div`
  font-size: 74px;
  margin-bottom: 24px;
  height: 178px;
  letter-spacing: 4px;

  & p {
    margin: 0;
  }

  & .blue {
    line-height: 88px;
    color: rgb(88, 105, 221);
  }

  & br {
    display: none;
  }

  @media ${themes.primary.media.maxLaptop} {
    height: auto;
  }
  @media (max-width: 1050px) {
    font-size: 68px;
    & .blue {
      white-space: nowrap;
    }
  }
  @media (max-width: 992px) {
    font-size: 60px;
  }
  @media (max-width: 870px) {
    font-size: 50px;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    font-size: 32px;
    margin-bottom: 28px;
    letter-spacing: 1px;

    & .blue {
      display: inline;
      line-height: 36px;
      white-space: normal;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 240px;
    font-size: 100px;
    margin-bottom: 52px;
  }
`;

export const CTAButtonWrapper = styled.div`
  display: flex;
  gap: 28px;

  & > a {
    display: flex;
    font-size: 22px;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 188px;
    padding: 0;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    flex-direction: column;
    gap: 16px;

    & > a {
      font-size: 16px;
      width: 178px;
      height: 54px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 37px;

    & > a {
      font-size: 30px;
      height: 77px;
      width: 251px;
    }
  }
`;

export const PDFWrapper = styled.div`
  display: flex;
  align-items: center;

  & .download-text {
    font-size: 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    & .download-text {
      font-size: 24px;
    }
  }
`;

export const ListItemPDF = styled.div`
  font-size: 14px;
  color: #5869dd;
  cursor: pointer;

  @media ${themes.primary.media.maxMobile} {
    font-size: 13px;
  }
`;

export const Loader = styled.img`
  margin-top: 15px;
  margin-left: 5px;
  width: 22px;
  height: 22px;
  animation: ${rotate360} 1s linear infinite;

  &.cv {
    margin-top: 0;
    width: 18px;
    height: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.cv {
      margin-top: 0;
      width: 16px;
      height: 16px;
    }
  }
`;
