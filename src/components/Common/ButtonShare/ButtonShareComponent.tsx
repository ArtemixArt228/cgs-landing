import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../../consts/queryKeys";

import {
  WhatsAppIconWrapper,
  ButtonShareText,
  ButtonShareTextWrapper,
  WhatsAppWrapper,
  TelegramWrapper,
  TelegramIconWrapper,
} from "../../../styles/HomePage/General.styled";

import WhatsUpGradIcon from "/public/whatsUp.svg";
import TelegramGradIcon from "/public/telegram.svg";

import Image from "next/image";
import { IHomePageResponse } from "../../../types/Admin/AdminHomePage.types";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

interface IButtonShareComponentProps {
  className?: string;
}

const ButtonShareComponent = ({ className }: IButtonShareComponentProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        formType: "Contact us",
      });
    }
  };

  const handleTelegramClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "telegram_click",
        formType: "Contact us",
      });
    }
  };

  return (
    <ButtonShareTextWrapper className={className}>
      {data?.whatsAppLink && (
        <ButtonShareText
          href={data.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
        >
          <WhatsAppWrapper className={className}>
            <WhatsAppIconWrapper className={className}>
              <Image
                src={WhatsUpGradIcon}
                alt="Icon"
                layout="fill"
                objectFit="contain"
              />
            </WhatsAppIconWrapper>
            WhatsApp
          </WhatsAppWrapper>
        </ButtonShareText>
      )}
      {data?.telegramLink && (
        <ButtonShareText
          href={data.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
        >
          <TelegramWrapper className={className}>
            <TelegramIconWrapper className={className}>
              <Image
                src={TelegramGradIcon}
                alt="Icon"
                layout="fill"
                objectFit="contain"
              />
            </TelegramIconWrapper>
            Telegram
          </TelegramWrapper>
        </ButtonShareText>
      )}
    </ButtonShareTextWrapper>
  );
};

export default ButtonShareComponent;
