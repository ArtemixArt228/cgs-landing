import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import setMessageTimeAccordingToCurrentDate from "../../utils/setMessageTimeAccordingToCurrentDate";
const ChatComponent = dynamic(() => import("./ChatComponent"));

import ChatButton from "./ChatButton";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useWindowDimension } from "../../hooks/useWindowDimension";

interface IChatProps {
  elRef: React.RefObject<HTMLAnchorElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
  heroSectionRef: React.RefObject<HTMLDivElement>;
}

const Chat = ({ elRef, heroSectionRef, faqRef, footerRef }: IChatProps) => {
  const [openChatTime, setOpenChatTime] = useState<string>("");
  const [newMessageAmount, setNewMessageAmount] = useState<number>(0);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const { width } = useWindowDimension();
  const [isLockedBackground, setIsLockedBackground] = useState<boolean>(
    Boolean(width && width < 768 && isChatOpen)
  );
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  useScrollLock(isLockedBackground, [".header", ".CallButton"]);

  useEffect(() => {
    setIsLockedBackground(Boolean(width && width < 768 && isChatOpen));
  }, [isChatOpen, width]);

  const isChatWorking = true; //isChatAvailable();

  const toggleIsOpenChat = () => {
    setIsChatOpen((old) => !old);
    newMessageAmount > 0 && setNewMessageAmount(0);
    !openChatTime && setOpenChatTime(setMessageTimeAccordingToCurrentDate());
  };

  const [isChatButtonVisible, setIsChatButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroSectionRef.current && faqRef.current && elRef.current) {
        const heroSectionHeight = heroSectionRef.current.offsetHeight;
        const faqSectionHeight = faqRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (
          scrollPosition >
            elRef.current.offsetHeight - faqSectionHeight - heroSectionHeight ||
          scrollPosition + windowHeight >= fullHeight - faqSectionHeight
        ) {
          setIsChatButtonVisible(false);
        } else if (scrollPosition > heroSectionHeight) {
          setIsChatButtonVisible(true);
        } else {
          setIsChatButtonVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elRef, faqRef, heroSectionRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const footerEntry = entries[0];
        setIsFooterVisible(footerEntry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "100px 0px 80px 0px" }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [footerRef]);

  useEffect(() => {
    const timer = setTimeout(() => setNewMessageAmount(1), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <ChatButton
        isChatWorking={isChatWorking}
        isVisible={isChatButtonVisible}
        isChatOpen={isChatOpen}
        handleClick={toggleIsOpenChat}
      />
      <ChatComponent
        handleClose={toggleIsOpenChat}
        isChatOpen={isChatOpen}
        isFooterVisible={isFooterVisible}
        openChatTime={openChatTime}
        setNewMessageAmount={setNewMessageAmount}
      />
    </div>
  );
};

export default Chat;
