import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const IconImage = styled.img`
  max-width: 32px;
  max-height: 32px;
  width: 32px;
  height: 32px;
  object-fit: contain;
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 44px;
    max-height: 44px;
    width: 44px;
    height: 44px;
  }
`;
