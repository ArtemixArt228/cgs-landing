import styled from "styled-components";
import Image from "next/image";
import themes from "../../../../../../utils/themes";
export const ThankYouHeader = styled.div`
  font-size: 28px;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 15px;
  text-transform: uppercase;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 24px;
    margin-top: 35px;
    margin-bottom: 20px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    display: flex;
    justify-content: center;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 38px;
    margin-bottom: 33px;
  }
  &.talk-to-expert-page {
    & p {
      margin: 0;
      line-height: unset;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 38px;
      line-height: 56px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 32px;
      line-height: 56px;
    }
    @media ${themes.primary.media.min1440} {
      margin-bottom: 8px;
    }
    @media ${themes.primary.media.onlyTablet} {
      margin-bottom: 24px;
    }
  }
`;
export const ConfirmationMessageAndEmail = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minBreakpoint1100} {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;
  }
  @media ${themes.primary.media.onlyTablet} {
    font-size: 22px;
    line-height: 35.2px;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.min768Mobile} {
      font-size: 22px;
      line-height: 35.2px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 25.6px;
      margin-bottom: 0;
    }
  }
`;

export const ConfirmationMessage = styled.div`
  color: ${themes.primary.colors.blogArticleText};
`;

export const ConfirmationEmail = styled.span`
  color: ${themes.primary.colors.primary};
`;

export const EventInfoWrapper = styled.div<{ step: number }>`
  background-color: ${themes.primary.colors.dropdownHover};
  padding: 10px 18px;
  width: 100%;
  border-radius: 10px;
  margin-top: ${({ step }) => (step == 2 ? "10px" : "14px")};

  @media ${themes.primary.media.maxBreakpoint1100} {
    padding: 10px 28px;
    margin-top: ${({ step }) => (step == 2 ? "20px" : "25px")};
  }
  &.remind-me {
    margin-top: 20px;

    @media ${themes.primary.media.maxBreakpoint1100} {
      padding: 20px 23px;
    }
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      margin-top: 20px;
      padding: 16px 24px;
    }
    @media ${themes.primary.media.min1440} {
      margin-top: 20px;
      padding: 15px 24px;
    }
    &.remind-me {
      margin-top: 20px;

      @media ${themes.primary.media.maxBreakpoint1100} {
        padding: 16px 23px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 16px;
        padding: 15px 24px;
      }
    }
    &.event-time {
      @media ${themes.primary.media.maxBreakpoint1100} {
        padding: 12px 24px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 14px;
        padding: 12px 17px;
      }
    }
  }
`;

export const MeetField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    height: 41px;
  }

  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      height: 32px;
    }
    @media ${themes.primary.media.min1440} {
      height: 24px;
    }
    &.remind-me {
      @media ${themes.primary.media.maxBreakpoint1100} {
        height: 40px;
      }
      @media ${themes.primary.media.min1440} {
        height: 24px;
      }
    }
    &.event-time {
      @media ${themes.primary.media.min1440} {
        height: 22px;
      }
    }
  }
`;

export const IconAndField = styled.div`
  display: flex;
  gap: 12px;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  justify-content: space-between;
  align-items: center;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 16px;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
  }
  &.talk-to-expert-page {
    gap: 8px;
    &.event-time {
      gap: 12px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
      line-height: 26px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const FieldInfo = styled.span`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 16px;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
      line-height: 26px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const CalendarButton = styled.div<{ isActive: boolean }>`
  position: relative;
  transition: all 0.3s;
  background-color: ${(props) =>
    props.isActive && `${themes.primary.colors.dropdownHover}`};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid black;
  font-size: 14px;
  cursor: pointer;
  font-family: ${themes.primary.font.family.namu};
  padding: 12px 20px;
  white-space: nowrap;
  margin-left: 20px;
  height: 44px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 16px;
    height: 56px;
  }

  @media ${themes.primary.media.max640} {
    width: 100%;
    margin-top: 20px;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.max640} {
      width: 100%;
      margin-top: 15px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.onlyTablet} {
      padding: 12px 28px;
    }
    @media ${themes.primary.media.min1440} {
      height: 46px;
      font-size: 16px;
      line-height: 24px;
      width: 194px;
    }
  }
`;

export const AddCalendarBlock = styled.div`
  width: 192px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${themes.primary.colors.grey};
  position: absolute;
  top: 110%;
  z-index: 2222222;

  &.talk-to-expert-page {
    width: 260px;
  }
`;

export const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
  position: relative;

  @media ${themes.primary.media.maxBreakpoint1100} {
    width: 22px;
    height: 22px;
  }

  @media ${themes.primary.media.onlyTablet} {
    width: 27px;
    height: 27px;
  }
  &.talk-to-expert-page {
    width: 24px;
    height: 24px;
  }
`;

export const AddToCalendarLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  width: 100%;
  height: 37px;
  padding-left: 11px;
  padding-right: 11px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  @media ${themes.primary.media.max640} {
    flex-direction: column-reverse;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  color: ${themes.primary.colors.cloud};
  margin-top: 15px;
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 25px;
  }

  &.simple {
    margin-top: 0;
  }

  &.before-cancel {
    @media ${themes.primary.media.min768Mobile} {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  &.after-cancel {
    @media ${themes.primary.media.min768Mobile} {
      margin-top: 20px;
    }
  }

  &.talk-to-expert-page {
    @media ${themes.primary.media.min1440} {
      margin-top: 18px;
    }

    &.simple {
      margin-top: 9px;
      @media ${themes.primary.media.maxBreakpoint1100} {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
    &.remind-me {
      margin-top: 5px;
      margin-bottom: 5px;
      @media ${themes.primary.media.onlyTablet} {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
    &.before-cancel {
      margin-top: 20px;
      margin-bottom: 20px;
      @media ${themes.primary.media.min768Mobile} {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
    &.after-cancel {
      margin-top: 20px;
      margin-bottom: 20px;
      @media ${themes.primary.media.min768Mobile} {
        margin-top: 20px;
      }
      @media ${themes.primary.media.min1440} {
        margin-top: 16px;
        margin-bottom: -5px;
      }
    }
  }
`;

export const LinkWrapper = styled.a`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${themes.primary.colors.infiniteTextGradientColor2};
  font-size: 14px;

  &.talk-to-expert-page {
    font-size: 18px;
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
    }
  }
`;

export const CopiedWrapper = styled.div`
  position: absolute;
  left: -150%;
  top: -180%;
  min-width: 65px;
`;

export const CalendlyInfoModalLinkCopyImage = styled(Image)`
  cursor: pointer;
`;

export const MakeChange = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogArticleText};

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
    line-height: 28.8px;
    margin-bottom: 15px;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
      line-height: 28.8px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 25.6px;
    }
  }
`;
export const RescheduleOrCancelLink = styled.a`
  font-size: 14px;
  line-height: 21px;
  color: ${themes.primary.colors.infiniteTextGradientColor2};
  cursor: pointer;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
    line-height: 28.8px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${themes.primary.colors.darkPurple};
  }

  &.talk-to-expert-page {
    font-size: 18px;
    line-height: 28.8px;
    color: ${themes.primary.colors.primary};
    text-decoration: underline;
    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 14px;
      line-height: 21px;
    }
    @media ${themes.primary.media.onlyTablet} {
      font-size: 18px;
      line-height: 28.8px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px;
      line-height: 28.8px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 25.6px;
    }
    &:hover {
      color: ${themes.primary.colors.darkBlue};
    }

    &:active {
      color: ${themes.primary.colors.darkPurple};
    }
  }
`;
