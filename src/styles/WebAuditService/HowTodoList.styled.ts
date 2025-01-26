import styled from "styled-components";
import themes from "../../utils/themes";

export const ListWrapper = styled.div`
  width: 53em;
  height: 100%;
  position: relative;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 1.6px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 1.1em;
  z-index: 5;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  left: 10px;
  top: 12px;
  background: ${themes.primary.colors.primary};
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 12px 10px 0;
  border-color: transparent ${themes.primary.colors.blogBackground} transparent
    transparent;
  right: -1px;
  top: -1px;
  position: absolute;
  z-index: 5;
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 8px 10px;
  border-color: transparent transparent ${themes.primary.colors.blogBackground}
    transparent;
  position: absolute;
  z-index: 5;
  right: -1px;
  bottom: -1px;
`;
