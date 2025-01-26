import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Switch, SwitchProps, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";

import * as Styled from "./contact-us-step-third.styled";
import * as ContactPageStyled from "../../../../styles/contact-us.styled";

import { adminBookService } from "../../../../../../services/adminBookServiceModal";

import themes from "../../../../../../utils/themes";
import {
  timeUntil,
  formatDate,
  formatTime,
} from "../../../../../../utils/convertDate";
import {
  generateGoogleCalendarLink,
  generateYahooCalendarLink,
  generateICSFile,
  generateOutlookCalendarLink,
  ICalendarEvent,
} from "../../../../../../utils/generateCalendarLink";

import Arrow from "/public/Header/arrow.svg";
import copied from "/public/copied.svg";
import copyLink from "/public/copy-icon.svg";
import clock from "/public/ContactForm/clock.svg";
import addCalendar from "/public/ContactForm/addCalendar.svg";
import calendar from "/public/ContactForm/calendar.svg";
import time from "/public/ContactForm/time.svg";
import linkIcon from "/public/ContactForm/linkIcon.svg";
import google from "/public/ContactForm/google.svg";
import apple from "/public/ContactForm/apple.svg";
import yahoo from "/public/ContactForm/yahoo.svg";
import outlook from "/public/ContactForm/outlook.svg";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 33.16,
  height: 18,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(14px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#5869DD",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 14,
    height: 14,
  },
  "& .MuiSwitch-track": {
    borderRadius: 18 / 2,
    backgroundColor: "#CAC9C7",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
  "&.talk-to-expert-page": {
    width: 45,
    height: 25,
    borderRadius: 34,
    ".Mui-checked": {
      transform: "translateX(20px)",
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 20,
      height: 20,
    },
  },
}));

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  controller: UseContactFormModalReturn;
}

export const ThirdStepForm = ({ controller }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isAddCalendarOpened, setIsAddCalendarOpened] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(true);
  const [isPhoneChecked, setIsPhoneChecked] = useState(true);
  const isMobile = useMediaQuery(themes.primary.media.maxBreakpoint1100);
  const is767Mobile = useMediaQuery(themes.primary.media.max767Mobile);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEmailChecked(event.target.checked);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsPhoneChecked(event.target.checked);
  };

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const copyDataHandler = async () => {
    await navigator.clipboard.writeText(controller.joinLink);
    setIsCopied(true);
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  const event: ICalendarEvent = useMemo(
    () => ({
      title: "Meet with CGS-team",
      description: "",
      location: controller.joinLink,
      startTime: controller.dateTime,
      endTime: controller.endTime,
    }),
    [controller.dateTime, controller.endTime, controller.joinLink]
  );
  const { generalFormTitle, buttonText } = controller.pageData.callDetailsStep;

  const { mutateAsync: cancelCall } = useMutation(() =>
    adminBookService.cancelCalendly(
      controller.leadId,
      controller.eventId,
      controller.activityId.toString()
    )
  );

  const { mutateAsync: setReminders } = useMutation(
    ({
      email,
      phone,
      dateTime,
    }: {
      email?: string;
      phone?: string;
      dateTime?: string;
    }) => adminBookService.setReminders(email, phone, dateTime)
  );
  const isBigScreen = useMediaQuery(themes.primary.media.min4K);

  const rescheduleCall = async () => {
    await cancelCall();
    controller.setCurrentIndex(1);
  };
  const handleContinueWithReminders = () => {
    if (isEmailChecked || isPhoneChecked) {
      const data = {
        email: isEmailChecked ? controller.email : undefined,
        phone: isPhoneChecked ? controller.phone : undefined,
        dateTime: controller.dateTime,
      };
      setReminders(data);
    }
    controller.handleCloseContactUsForm();
  };
  const isTablet = useMediaQuery(themes.primary.media.min768Mobile);

  return (
    <div
      style={
        isMobile
          ? {
              paddingLeft: isTablet ? 40 : 15,
              paddingRight: isTablet ? 40 : 15,
            }
          : { width: "100%" }
      }
    >
      <Styled.ThankYouHeader
        className={controller.mainClassName}
        dangerouslySetInnerHTML={{
          __html: generalFormTitle,
        }}
      />
      <Styled.ConfirmationMessageAndEmail>
        <Styled.ConfirmationMessage className={controller.mainClassName}>
          A confirmation message has been sent to
        </Styled.ConfirmationMessage>
        <Styled.ConfirmationEmail className={controller.mainClassName}>
          {controller.email}
        </Styled.ConfirmationEmail>
      </Styled.ConfirmationMessageAndEmail>
      <Styled.Divider className={controller.mainClassName} />
      <Styled.CalendarWrapper
        className={controller.mainClassName}
        style={{ marginTop: isBigScreen ? 0 : undefined }}
      >
        <Styled.EventInfoWrapper
          className={controller.mainClassName + " event-time"}
          step={2}
        >
          <Styled.MeetField
            className={controller.mainClassName + " event-time"}
          >
            <Styled.IconAndField
              className={controller.mainClassName + " event-time"}
            >
              <Styled.IconWrapper className={controller.mainClassName}>
                <Image src={clock} alt={"Clock"} layout={"fill"} />
              </Styled.IconWrapper>
              Event starting in:
            </Styled.IconAndField>
            <Styled.FieldInfo className={controller.mainClassName}>
              {controller.dateTime && timeUntil(controller.dateTime)}
            </Styled.FieldInfo>
          </Styled.MeetField>
        </Styled.EventInfoWrapper>
        <Styled.CalendarButton
          className={controller.mainClassName}
          isActive={isAddCalendarOpened}
          onClick={() => {
            setIsAddCalendarOpened((prev) => !prev);
          }}
        >
          <Styled.IconWrapper className={controller.mainClassName}>
            <Image src={addCalendar} alt={"Add calendar"} layout={"fill"} />
          </Styled.IconWrapper>
          Add to calendar
          {isAddCalendarOpened && (
            <Styled.AddCalendarBlock
              className={controller.mainClassName}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Styled.AddToCalendarLink
                className={controller.mainClassName}
                href={generateGoogleCalendarLink(event)}
                target="_blank"
              >
                <div style={{ minWidth: 18, height: 18 }}>
                  <Image src={google} alt={"Google"} />
                </div>
                Add to Google Calendar
              </Styled.AddToCalendarLink>
              <Styled.AddToCalendarLink
                className={controller.mainClassName}
                href={generateICSFile(event)}
                target="_blank"
              >
                <div style={{ minWidth: 18, height: 18 }}>
                  <Image src={apple} alt={"Apple"} />
                </div>
                Add to Apple Calendar
              </Styled.AddToCalendarLink>
              <Styled.AddToCalendarLink
                className={controller.mainClassName}
                href={generateOutlookCalendarLink(event)}
                target="_blank"
              >
                <div style={{ minWidth: 18, height: 18 }}>
                  <Image src={outlook} alt={"Outlook"} />
                </div>
                Add to Outlook Calendar
              </Styled.AddToCalendarLink>
              <Styled.AddToCalendarLink
                className={controller.mainClassName}
                href={generateYahooCalendarLink(event)}
                target="_blank"
              >
                <div style={{ minWidth: 18, height: 18 }}>
                  <Image src={yahoo} alt={"Yahoo"} />
                </div>
                Add to Yahoo Calendar
              </Styled.AddToCalendarLink>
            </Styled.AddCalendarBlock>
          )}
        </Styled.CalendarButton>
      </Styled.CalendarWrapper>
      <Styled.EventInfoWrapper className={controller.mainClassName} step={2}>
        <Styled.MeetField className={controller.mainClassName}>
          <Styled.IconAndField className={controller.mainClassName}>
            <Styled.IconWrapper className={controller.mainClassName}>
              <Image src={calendar} alt={"Calendar"} layout={"fill"} />
            </Styled.IconWrapper>
            Date
          </Styled.IconAndField>
          <Styled.FieldInfo className={controller.mainClassName}>
            {controller.dateTime && formatDate(controller.dateTime)}
          </Styled.FieldInfo>
        </Styled.MeetField>
        <Styled.Divider className={controller.mainClassName + " simple"} />
        <Styled.MeetField className={controller.mainClassName}>
          <Styled.IconAndField className={controller.mainClassName}>
            <Styled.IconWrapper className={controller.mainClassName}>
              <Image src={time} alt={"Time"} layout={"fill"} />
            </Styled.IconWrapper>
            Time
          </Styled.IconAndField>
          <Styled.FieldInfo className={controller.mainClassName}>
            {controller.dateTime && formatTime(controller.dateTime)}
          </Styled.FieldInfo>
        </Styled.MeetField>
        <Styled.Divider className={controller.mainClassName + " simple"} />
        <Styled.MeetField className={controller.mainClassName}>
          <Styled.IconAndField className={controller.mainClassName}>
            <Styled.IconWrapper className={controller.mainClassName}>
              <Image src={linkIcon} alt={"Link icon"} layout={"fill"} />
            </Styled.IconWrapper>
            Meeting link
          </Styled.IconAndField>
          <div style={{ width: is767Mobile ? 136 : 155, display: "flex" }}>
            <Styled.LinkWrapper
              className={controller.mainClassName}
              href={controller.joinLink}
            >
              {controller.joinLink.slice(8)}
            </Styled.LinkWrapper>
            <div style={{ position: "relative" }} onClick={copyDataHandler}>
              {isCopied && (
                <Styled.CopiedWrapper className={controller.mainClassName}>
                  <Image src={copied} alt="copied" />
                </Styled.CopiedWrapper>
              )}
              <Styled.CalendlyInfoModalLinkCopyImage
                className={controller.mainClassName}
                src={copyLink}
                alt={"Copy link"}
              />
            </div>
          </div>
        </Styled.MeetField>
      </Styled.EventInfoWrapper>
      <Styled.EventInfoWrapper
        step={2}
        className={controller.mainClassName + " remind-me"}
      >
        <Styled.MeetField className={controller.mainClassName + " remind-me"}>
          <Styled.FieldInfo className={controller.mainClassName}>
            Remind me via sms
          </Styled.FieldInfo>
          <IOSSwitch
            defaultChecked
            onChange={handlePhoneChange}
            className={controller.mainClassName}
          />
        </Styled.MeetField>
        <Styled.Divider className={controller.mainClassName + " remind-me"} />
        <Styled.MeetField className={controller.mainClassName + " remind-me"}>
          <Styled.FieldInfo className={controller.mainClassName}>
            Remind me via email
          </Styled.FieldInfo>
          <IOSSwitch
            defaultChecked
            onChange={handleEmailChange}
            className={controller.mainClassName}
          />
        </Styled.MeetField>
      </Styled.EventInfoWrapper>
      <Styled.Divider className={controller.mainClassName + " before-cancel"} />
      <span
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Styled.MakeChange className={controller.mainClassName}>
          Need to make change?{" "}
          <Styled.RescheduleOrCancelLink
            className={controller.mainClassName}
            onClick={rescheduleCall}
          >
            Reschedule
          </Styled.RescheduleOrCancelLink>{" "}
          or{" "}
          <Styled.RescheduleOrCancelLink
            className={controller.mainClassName}
            onClick={controller.cancelCalendlyCall}
          >
            Cancel
          </Styled.RescheduleOrCancelLink>
        </Styled.MakeChange>
      </span>
      <Styled.Divider className={controller.mainClassName + " after-cancel"} />
      <div
        style={{
          width: "100%",
          marginTop: isMobile ? 20 : 24,
        }}
        onClick={handleContinueWithReminders}
      >
        <ContactPageStyled.ActionButton className={controller.mainClassName}>
          {buttonText}
          <Image src={Arrow} alt="Arrow" />
        </ContactPageStyled.ActionButton>
      </div>
    </div>
  );
};
