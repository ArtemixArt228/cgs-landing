import styled from "styled-components";
import themes from "../../utils/themes";

export const Separator = styled.div`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    border-bottom: 1px solid ${themes.primary.colors.comment};
    top: 0;
    left: -10%;
    width: 120%;
    position: absolute;

    &.bottom {
      bottom: 0;
    }
  }
`;
