import styled from "styled-components";
import themes from "../../../utils/themes";

interface IModal {
  isOpen?: boolean;
}

export const ThankYouModal = styled.div<IModal>`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
`;

export const ThankYouModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThankYouModalContent = styled.div`
  width: 613px;
  height: 388px;
  background: ${themes.primary.colors.grayBack};
  position: relative;
  border: 2px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    width: 400px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 345px;
    height: 284px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
    height: 284px;
  }
`;

export const ThankContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 47px 55px 0 55px;

  span {
    line-height: 160%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 22px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 32px 0 0 11px;
  }
`;

export const ThankMessage = styled.span`
  font-size: 32px;
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.375rem;
  }
`;

export const CloseButton = styled.img`
  margin: 51px 46px 0 0;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 19px 21px 0 0;
  }
`;

export const Thing = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Cube = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  bottom: 32px;
  right: 98px;
  z-index: 2;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin-top: 12px;
  margin-left: 12px;
  border: 2px solid black;

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 6px;
    margin-left: 6px;
  }
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: black;
  outline: 1px solid black;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
`;
