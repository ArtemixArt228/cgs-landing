import styled from "styled-components";
import themes from "../../utils/themes";

interface IBookModalContent {
  isCalendly?: boolean;
}

export const BookModal = styled.div<IBookModalContent>`
  position: fixed;
  z-index: ${({ isCalendly }) => (isCalendly ? "99999" : "36")};
  left: 0;
  font-size: 0.7em;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isCalendly }) =>
    isCalendly ? "none" : themes.primary.colors.modalFormBackground};
  overflow: auto;
  background: linear-gradient(
    180deg,
    ${themes.primary.colors.careerBackground} 0.8 100%,
    ${themes.primary.colors.careerBackground} 0 114.26%
  );
  &.open {
    display: none;
  }
`;

export const BookModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const BookModalContent = styled.div<IBookModalContent>`
  width: ${({ isCalendly }) => (isCalendly ? "619px" : "499px")};
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    ${({ isCalendly }) => (isCalendly ? "min-width:345px;" : "width:699px;")}
    margin: 0 50px;
    @media (orientation: landscape) {
      margin-top: 40px;
      height: 100vh;
      overflow: scroll;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 624px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    margin: 0;

    width: 345px;
  }
`;

export const Container = styled.div<IBookModalContent>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin: ${({ isCalendly }) =>
    isCalendly ? "11px 0 0 12px" : "12px 0 0 12px;"};
  border: 2px solid ${themes.primary.colors.black};

  @media ${themes.primary.media.estiomationFormWidth} {
    margin: 6px 0 0 6px;
  }
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: ${themes.primary.colors.black};
  outline: 1px solid ${themes.primary.colors.black};
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
  background: ${themes.primary.colors.careerBackground};
`;
