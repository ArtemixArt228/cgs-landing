import styled from "styled-components";
import themes from "../../utils/themes";

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 7%;
  position: relative;
  z-index: 3;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 36px;
  flex-shrink: 0;

  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 43px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30px;
    height: 32px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.42em;
`;

export const Text = styled.div`
  font-size: 1.84em;
  line-height: 118%;
  padding: 1.68em 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.secondary};
    padding: 1.5em 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 5.5%;
  border-bottom: 2px solid ${themes.primary.colors.comment};
  width: 95%;
`;
