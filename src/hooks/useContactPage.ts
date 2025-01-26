import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { adminBookService } from "../services/adminBookServiceModal";

import { useGetCalendlyMeetingData } from "./useGetCalendlyMeetingData";

import { storeKeys } from "../consts";
import { IContactUsPageData } from "../types/Admin/AdminContactUs.types";

export interface LeadGenMutation {
  name: string;
  email: string;
  phone?: string;
  description?: string;
}

export interface UseContactFormModalReturn {
  dateTime: string;
  joinLink: string;
  isCalendlySuccessful: boolean;
  setIsCalendlySuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  name: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  description?: string;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setLeadId: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: number;
  endTime: string;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  eventId: string;
  activityId: string;
  leadId: string;
  isOpenModal?: boolean;
  isCancelModalOpen: boolean;
  setIsCancelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenContactUsForm?: () => void;
  handleCloseContactUsForm: () => void;
  handleCloseCancelForm: () => void;
  cancelCalendlyCall: () => Promise<void>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  mainClassName: string;
  calendlyLink: string;
  pageData: IContactUsPageData;
}
const useContactPage = (
  calendlyLink: string,
  pageData: IContactUsPageData,
  id?: string
): UseContactFormModalReturn => {
  const [isCalendlySuccessful, setIsCalendlySuccessful] = useState(false);
  const [calendlyLead, setCalendlyLead] = useState<LeadGenMutation | null>(
    null
  );
  const [name, setName] = useState("");
  const [description, setDescription] = useState<string | undefined>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const mainClassName = "talk-to-expert-page";

  const { mutateAsync: createCMSLead } = useMutation((data: LeadGenMutation) =>
    adminBookService.createCalendlyPipedriveLead(
      data.name,
      data.email,
      data.phone,
      data.description,
      JSON.parse(localStorage.getItem(storeKeys.utmParams) || "")
    )
  );

  const {
    dateTime,
    joinLink,
    setJoinLink,
    setCalendlyUri,
    setDateTime,
    email,
    setEmail,
    setLeadId,
    endTime,
    eventId,
    activityId,
    leadId,
  } = useGetCalendlyMeetingData(setCalendlyLead, id, id, () => {
    setCurrentIndex(2);
  });
  const { mutateAsync: cancelCall } = useMutation(() =>
    adminBookService.cancelCalendly(leadId, eventId, activityId.toString())
  );
  const cancelCalendlyCall = async () => {
    await cancelCall();
    setIsCancelModalOpen(true);
  };

  const handleCloseContactUsForm = () => {
    setDateTime("");
    setJoinLink("");
    setCalendlyUri("");
    setCurrentIndex(0);
  };

  const handleCloseCancelForm = () => {
    setIsCancelModalOpen(false);
    handleCloseContactUsForm();
  };
  useEffect(() => {
    if (isCalendlySuccessful && calendlyLead) {
      createCMSLead(calendlyLead);
    }
  }, [calendlyLead, createCMSLead, isCalendlySuccessful]);

  useEffect(() => {
    if (!isCalendlySuccessful) {
      setDateTime("");
      setJoinLink("");
      setCalendlyUri("");
    }
  }, [isCalendlySuccessful, setCalendlyUri, setDateTime, setJoinLink]);

  return {
    dateTime,
    joinLink,
    isCalendlySuccessful,
    setIsCalendlySuccessful,
    email,
    name,
    setEmail,
    setName,
    currentIndex,
    setCurrentIndex,
    setLeadId,
    endTime,
    eventId,
    activityId,
    leadId,
    isCancelModalOpen,
    setIsCancelModalOpen,
    handleCloseContactUsForm,
    handleCloseCancelForm,
    phone,
    setPhone,
    mainClassName,
    calendlyLink,
    description,
    setDescription,
    cancelCalendlyCall,
    pageData,
  };
};

export default useContactPage;
