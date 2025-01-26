import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ContactUsPageLayout = styled.div<{
  isCancelModalOpen?: boolean;
}>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 12px 59px 85px 41px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: ${({ isCancelModalOpen }) =>
    isCancelModalOpen ? "center" : "flex-start"};
  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 0;
    min-height: calc(100vh - 169px);
  }
  @media ${themes.primary.media.min1440} {
    min-height: calc(100vh - 187px);
  }
  @media ${themes.primary.media.minBreakpoint1600} {
    min-height: calc(100vh - 206px);
  }
  @media ${themes.primary.media.minBreakpoint1600} {
    min-height: calc(100vh - 237px);
  }
`;

export const MobileContactUsPageLayout = styled(ContactUsPageLayout)<{
  isCancelModalOpen?: boolean;
}>`
  @media ${themes.primary.media.maxBreakpoint1100} {
    padding: 0;
    align-items: flex-start;
    min-height: calc(100vh - 335px);
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    min-height: calc(100vh - 247px);
  }
`;
