import styled from "styled-components";
import themes from "../themes";

export const ErrorLabelContainer = styled.div<{ errorVisible: boolean }>`
  z-index: 3;
  position: absolute;
  left: 65px;
  transform: translate(0%, 60%);
  border: 1px solid ${themes.primary.colors.black};
  background: ${themes.primary.colors.grey};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.adminRed};
  font-weight: ${themes.primary.font.weight.semiBold};
  border-radius: 4px;
  padding: 3px;
  transition: transform 0.25s ease, visibility 0.25s ease;
  font-size: 14px;

  @media (max-width: 1200px) {
    left: 15px;
    font-size: ${themes.primary.font.size.reviewSmallText};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    left: 85px;
  }

  opacity: ${({ errorVisible }) => (errorVisible ? 1 : 0)};
  visibility: ${({ errorVisible }) => (errorVisible ? "visible" : "hidden")};
  transform: ${({ errorVisible }) =>
    errorVisible ? "translateY(15px)" : "translateY(10px)"};
`;

export const Plug = styled.div`
  z-index: 5;
  background: ${themes.primary.colors.grey};
  position: absolute;
  top: 0;
  left: -2px;
  height: auto;
  width: 18px;
  height: 3px;
  transform: translate(50%);
`;
