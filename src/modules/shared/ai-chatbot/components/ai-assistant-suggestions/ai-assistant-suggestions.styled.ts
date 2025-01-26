import styled from "styled-components";
import themes from "../../../../../utils/themes";
export const SuggestionsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  font-family: ${themes.primary.font.family.namu};
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 12px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 12px;
  }
  &.full-screen {
    padding: 32px 1px 5px;
    overflow: hidden;
    @media ${themes.primary.media.min768Mobile} {
      padding: 32px 1px 10px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      padding: 19px 1px 0;
    }
    @media ${themes.primary.media.minPCFullHD} {
      padding: 42px 1px 16px;
    }
  }

  &.icon-based {
    padding: 24px 1px 5px;

    @media ${themes.primary.media.minPCFullHD} {
      padding: 16px 1px 16px;
    }
  }
`;
export const SuggestionsContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 12px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: ${themes.primary.colors.chatContainerBgc};
  }

  :hover {
    ::-webkit-scrollbar {
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.chatContainerBgc};
    }
  }
  scrollbar-width: 12px;
  padding-inline: 16px;
  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 20px;
  }
`;
export const Description = styled.div`
  padding-inline: 16px;
  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 20px;
  }
  &.full-screen {
    @media ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
      line-height: 26px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 20px;
      line-height: 28px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 24px;
      line-height: 30px;
    }
  }

  &.icon-based {
    @media ${themes.primary.media.maxMobile} {
      font-size: 12px;
      line-height: 20px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 14px;
      line-height: 22px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 26px;
    }
  }
`;

export const SuggestionItem = styled.div`
  cursor: pointer;
  color: ${themes.primary.colors.mutedBlueGrey};
  border-radius: 57px;
  letter-spacing: 0.1px;
  background-color: ${themes.primary.colors.dropdownHover};
  border: 1px solid ${themes.primary.colors.cloud};
  white-space: nowrap;

  &.full-screen {
    font-size: 14px;
    line-height: 20px;

    @media ${themes.primary.media.maxMobile} {
      letter-spacing: 0.02px;
      padding: 8px 16px;
    }
    @media ${themes.primary.media.min768Mobile} {
      padding: 12px 20px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 28px;
    }
  }

  &.icon-based {
    font-size: 14px;
    line-height: 20px;

    @media ${themes.primary.media.maxMobile} {
      letter-spacing: 0.02px;
      padding: 8px 16px;
    }
    @media ${themes.primary.media.min768Mobile} {
      padding: 12px 20px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 14px;
      line-height: 20px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 18px;
      line-height: 140%;
    }
  }
`;
