import styled from "styled-components";
import themes from "../../../utils/themes";

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  height: 42px;
  gap: 20px;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  border: 2px solid ${themes.primary.colors.primary};
  cursor: pointer;
  padding: 15px 17px 15px 17px;
  font-weight: ${themes.primary.font.weight.heavy};
  border-radius: 10px;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
  width: 100%;
  justify-content: center;
  font-size: 16px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    height: 55px;
    font-size: 16px;
    line-break: 24px;
  }

  img {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: rotate(-180deg);
    }
  }

  &.talk-to-expert-page {
    height: 56px;
    border-radius: 8px;
    letter-spacing: 0.1px;
    @media ${themes.primary.media.min1440} {
      height: 55px;
      font-size: 16px;
      &.cancel-form {
        height: 42px;
      }
    }
  }
`;
