import styled from "styled-components";
import themes from "../../../utils/themes";

export const HeaderAndContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${themes.primary.media.max767Mobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 42.67px;
  }
`;
