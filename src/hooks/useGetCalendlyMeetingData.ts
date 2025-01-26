import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import { useCalendlyEventListener } from "react-calendly";
import { queryKeys } from "../consts/queryKeys";
import { calendlyService } from "../services/calendly";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LeadGenMutation } from "./useContactPage";
import { adminBookService } from "../services/adminBookServiceModal";

export const useGetCalendlyMeetingData = (
  setCalendlyLead: Dispatch<SetStateAction<LeadGenMutation | null>>,
  id?: string,
  activeId?: string,
  cb?: () => void
) => {
  const [calendlyUri, setCalendlyUri] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [joinLink, setJoinLink] = useState("");
  const [inviteeUri, setInviteeUri] = useState("");
  const [email, setEmail] = useState("");
  const [leadId, setLeadId] = useState("");
  const [activityId, setActivityId] = useState("");
  const [eventId, setEventId] = useState("");

  // Track the state of the update with a ref to avoid unnecessary re-renders
  const isUpdatingRef = useRef(false);

  useCalendlyEventListener({
    onDateAndTimeSelected: () => {
      if (activeId === id) {
        isUpdatingRef.current = false;
        setCalendlyUri("");
        setDateTime("");
        setJoinLink("");
        setInviteeUri("");
      }
    },
    onEventScheduled: (e) => {
      if (activeId === id) {
        setCalendlyUri(e.data.payload.event.uri);
        setInviteeUri(e.data.payload.invitee.uri);
      }
    },
  });

  const { mutateAsync: updateCMSLead } = useMutation(
    (data: {
      id: string;
      introCallStartTime: string;
      introCallEndTime: string;
    }) =>
      adminBookService.updateCalendlyPipedriveLead(
        data.id,
        data.introCallStartTime,
        data.introCallEndTime
      )
  );

  useQuery(
    [queryKeys.getCalendlyEvent],
    () => calendlyService.getGoogleMeetEventUri(calendlyUri),
    {
      enabled: !!calendlyUri && activeId === id,
      onSuccess: (response) => {
        setDateTime(response.data.resource.start_time);
        setJoinLink(response.data.resource.location.join_url);
        setEndTime(response.data.resource.end_time);
        const event_id = response.data.resource.uri.split("/").pop();
        setEventId(event_id);
      },
    }
  );

  useQuery(
    [queryKeys.getCalendlyInvitee],
    () => calendlyService.getGoogleMeetEventUri(inviteeUri),
    {
      enabled: !!inviteeUri && activeId === id,
      onSuccess: async (response) => {
        setCalendlyLead({
          name: response.data.resource.name,
          email: response.data.resource.email,
          phone: "",
          description:
            response.data.resource.questions_and_answers.length !== 0
              ? response.data.resource.questions_and_answers[0].answer
              : "",
        });
      },
    }
  );

  const updateLead = useCallback(
    async (cb: () => void) => {
      if (isUpdatingRef.current) return; // Prevent multiple calls

      isUpdatingRef.current = true; // Set updating flag to prevent duplicate calls
      cb && cb();

      const data = {
        id: leadId,
        introCallStartTime: dateTime,
        introCallEndTime: endTime,
      };

      const { activity_id } = await updateCMSLead(data);
      setActivityId(activity_id);
    },
    [dateTime, endTime, leadId, updateCMSLead]
  );

  useEffect(() => {
    if (
      cb &&
      dateTime &&
      joinLink &&
      calendlyUri &&
      activeId === id &&
      endTime &&
      leadId
    ) {
      updateLead(cb);
    }
    // Add only necessary dependencies
  }, [
    dateTime,
    joinLink,
    calendlyUri,
    activeId,
    id,
    endTime,
    leadId,
    updateLead,
    cb,
  ]);

  return {
    dateTime,
    joinLink,
    setDateTime,
    setJoinLink,
    setCalendlyUri,
    email,
    setEmail,
    setLeadId,
    endTime,
    activityId,
    eventId,
    leadId,
  };
};
