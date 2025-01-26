import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Wrapper = styled.section`
  display: flex;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    z-index: 12;
    position: relative;
  }

  & .slides {
    border: 1px solid red;
    padding-left: 50;
  }
`;

export const PartnerImageWrapper = styled.div`
  position: relative;
  width: calc(
    clamp(164px, 164px + (100vw - 375px) * ((208 - 164) / (768 - 375)), 208px)
  );
  height: calc(
    clamp(84px, 84px + (100vw - 375px) * ((100 - 84) / (768 - 375)), 100px)
  );
  @media screen and ${themes.primary.media.minPCFullHD} {
    width: 261.33px;
    height: 133.33px;
  }
`;
