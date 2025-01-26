import React from "react";

import { ArrowContainer } from "../../styles/HomePage/General.styled";
import * as Styled from "../../styles/Chat/CommonChat.styled";
import chatLogo from "../../../public/chat-logo.svg";
import Image from "next/future/image";

import ButtonArrow from "../../utils/ButtonArrow";

interface IProps {
  handleClick: () => void;
  isChatOpen: boolean;
  isVisible: boolean;
  isChatWorking: boolean;
}

const ChatButton = ({
  isChatOpen,
  isChatWorking,
  handleClick,
  isVisible,
}: IProps) => {
  return (
    <Styled.HomepageChatButton
      className={`${
        isVisible && !isChatOpen ? "ChatButtonVisible" : "ChatButtonHidden"
      }`}
      onClick={handleClick}
      disabled={!isChatWorking}
    >
      <Image src={chatLogo} alt="Chat" />
      <ArrowContainer className="heroSection">
        <ButtonArrow />
      </ArrowContainer>
    </Styled.HomepageChatButton>
  );
};

export default ChatButton;
