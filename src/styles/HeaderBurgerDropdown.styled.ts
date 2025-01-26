import styled from "styled-components";
import themes from "../utils/themes";

export const DropDownWrapper = styled.div`
  padding: 18px 0;
  display: block;

  @media screen and ${themes.primary.media.maxBreakpoint1100} {
    border-bottom: 1px solid ${themes.primary.colors.separator};
  }

  & :hover {
    cursor: pointer;
  }

  & > div:first-child:hover {
    color: ${themes.primary.colors.darkBlue};

    & svg {
      fill: ${themes.primary.colors.darkBlue};
    }
  }

  & > div:first-child:active {
    color: ${themes.primary.colors.darkBlue};

    & svg {
      fill: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const DropDownHeader = styled.div`
  display: flex;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 20px;
  transition: all 0.2s;
  padding: 0 40px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    padding: 0 20px;
  }
`;

export const DropDownContent = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin: 0;
  padding: 0;
  transition: 0.45s ease-in;

  &.open {
    max-height: 500px;
    opacity: 1;
  }
`;

export const ArrowImage = styled.svg`
  width: 9px;
  height: 5px;
  margin-top: 0.6rem;
  margin-left: 0.75rem;

  transition: 0.3s;

  &.open {
    transform: rotate(-180deg);
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 12px;
    height: 7px;
  }
`;
