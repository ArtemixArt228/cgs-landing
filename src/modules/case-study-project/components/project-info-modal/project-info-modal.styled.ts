import styled from "styled-components";
import themes from "../../../../utils/themes";
import { FeaturesDescription } from "../../../case-studies/styles";

export const ModalOutlayer = styled.div<{
  isModalOpen: boolean;
}>`
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
  height: 100dvh;
  background-color: #00000066;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  justify-content: center;
  padding: 40px;
  background-color: ${themes.primary.colors.grey};
  border: 1px solid ${themes.primary.colors.black};
  border-radius: 20px;
  position: relative;
  margin: 20px;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    min-width: 343px;
    max-height: 550px;
    padding: 40px 20px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 40px;
    width: 591px;
    max-height: 750px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 940px;
    height: 407px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 52px;
    width: 1250.33px;
    height: 534px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;
  padding: 0;
  position: relative;
  width: 100%;
  margin: 10px 20px 0 20px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  @media ${themes.primary.media.maxMobile} {
    top: 17px;
    right: 17px;
    width: 18px;
    height: 18px;
  }
  @media ${themes.primary.media.min768Mobile} {
    top: 17px;
    right: 17px;
    width: 22px;
    height: 22px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    top: 25px;
    right: 25px;
    width: 32px;
    height: 32px;
  }
`;
export const HoverBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -14px;
  bottom: -14px;
  border: 1.5px solid ${themes.primary.colors.primary};
  z-index: -1;
  display: flex;
  align-items: flex-end;
  border-radius: 20px;

  &.hidden {
    right: -8px;
    bottom: -8px;
    visibility: hidden;
  }

  @media ${themes.primary.media.maxMobile} {
    border: 1.5px solid ${themes.primary.colors.primary};
    right: -8px;
    bottom: -8px;
  }
  @media ${themes.primary.media.min768Mobile} {
    border: 1.5px solid ${themes.primary.colors.primary};
    right: -12px;
    bottom: -12px;
  }
`;

export const HoverBlackBlock = styled.div`
  height: 60%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }

  border-radius: 0 0 20px 20px;
`;

export const DataContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;

  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 32px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: start;
  align-items: flex-start;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding: 0;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 10px;
  }
`;

export const TextAndTagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: start;
  align-items: flex-start;

  @media ${themes.primary.media.minBreakpoint1100} {
    width: 55%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 20px;
  }
`;

export const Title = styled(FeaturesDescription)`
  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    line-height: 28px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 22px;
    line-height: 26.4px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    line-height: 28.8px;
    font-size: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 38.4px;
  }
`;

export const Description = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  overflow-y: auto;

  & .header {
    color: ${themes.primary.colors.mutedBlueGrey};
    padding: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    line-height: 24px;
    font-size: 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 28.8px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    line-height: 24px;
    font-size: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const ImageContainer = styled.div`
  background: linear-gradient(
    353.75deg,
    ${themes.primary.colors.grey} -1.56%,
    ${themes.primary.colors.caseStudyTagGradientDark} 52.39%,
    ${themes.primary.colors.grey} 127.64%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  position: relative;
  overflow: hidden;

  @media ${themes.primary.media.maxMobile} {
    min-width: 343px;
    width: 100%;
    padding: 8px 0;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 100%;
    span {
      width: 100% !important;
      height: 245px !important;
    }
    background: linear-gradient(
      353.75deg,
      #f1efed -1.56%,
      rgba(221, 221, 221, 0.22) 52.39%,
      #f1efed 127.64%
    );
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: unset;
    span {
      width: 368px !important;
      height: 325px !important;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    span {
      width: 490px !important;
      height: 430px !important;
    }
  }
`;
