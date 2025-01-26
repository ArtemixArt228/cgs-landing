import styled from "styled-components";
import themes from "../../../../utils/themes";

import MagnifyingGlass from "public/Portfolio/MagnifyingGlass.svg";

export const SettingsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 38px;
    margin-bottom: 62px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;

export const CvSearchWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #8f8e93;
  gap: 8px;
  height: 30px;
  width: 232px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 290px;
    height: 38px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 50px;
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const CvSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CvSearchIcon = styled.div`
  background-image: url(${MagnifyingGlass.src});
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  opacity: 0.4;

  @media ${themes.primary.media.minPCFullHD} {
    width: 25px;
    height: 25px;
  }
`;

export const CvSearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  padding-top: 5px;
  width: 80%;
  font-size: 1.33em;

  &::placeholder {
    color: #a9a5a4;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    line-height: 120%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 14px;
  max-width: 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
    gap: 16px;
    margin-top: 6px;
    justify-content: flex-start;
  }
`;

export const CategoryItem = styled.div`
  font-family: ${themes.primary.font.family.namu};
  white-space: nowrap;
  cursor: pointer;
  font-size: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  border: 1px solid black;
  background: transparent;
  line-height: 17px;

  &:hover {
    transition: 0.15s ease-out;
    box-shadow: 2px 2px 0 black;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
    padding: 16px 22px;
  }

  &.active {
    transition: all 0.2s ease-in-out;
    padding: 12px 18px;
    border: 1px solid #5869dd;
    background-color: #5869dd;
    color: #f1efed;
    max-height: 42px;
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    font-size: 16px;
    line-height: 19px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    max-height: 42px;
  }
`;
