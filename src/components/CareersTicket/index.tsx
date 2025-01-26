import React, { FC, MouseEvent, useState } from "react";

import TicketModal from "../Careers/TicketModal";
import ButtonArrow from "../../utils/ButtonArrow";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useIsClient } from "../../hooks/useIsClient";

import * as Styled from "./CareersTicket.styled";
import Background from "../../../public/CareerDecorations/background.svg";
import { ITicket } from "../../types/Admin/Response.types";
import * as Styles from "../../styles/TicketModal.styled";
import CloseButton from "../../../public/CareerDecorations/close.svg";
import { ArrowContainer } from "../../styles/HomePage/General.styled";

interface ITicketProps {
  ticket: ITicket;
  scrollTo?: () => void;
  className?: string;
}
const CareersTicket: FC<ITicketProps> = ({
  ticket: { position, vacancy, stack, info },
  scrollTo,
  className,
}: ITicketProps) => {
  const { width } = useWindowDimension();
  const [isOpen, setIsOpen] = useState(false);

  const isClient = useIsClient();

  const onTicketView = () => setIsOpen(true);

  const onClose = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const onSubmitClick = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();

    setIsOpen(false);
    if (scrollTo) scrollTo();
  };
  return (
    <Styled.Wrapper>
      <Styled.TicketContainer onClick={onTicketView}>
        <Styled.TicketInner>
          {isClient && (
            <Styled.TicketInnerSvgWrapper>
              {width && (
                <div>
                  {width > 474 ? (
                    <svg
                      width="589"
                      height="236"
                      viewBox="0 0 589 236"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M542.489 234H46.5109C46.5109 223.123 41.8214 212.692 33.4739 205.001C25.1265 197.311 13.805 192.99 2 192.99V43.0101C13.805 43.0101 25.1265 38.6894 33.4739 30.9985C41.8214 23.3076 46.5109 12.8766 46.5109 2H542.489C542.489 12.8766 547.179 23.3076 555.526 30.9985C563.873 38.6894 575.195 43.0101 587 43.0101V192.99C575.195 192.99 563.873 197.311 555.526 205.001C547.179 212.692 542.489 223.123 542.489 234Z"
                        stroke="#1D1D1B"
                        strokeWidth="2.81576"
                        strokeMiterlimit="10"
                        fill="#F1EFED"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="332"
                      height="191"
                      viewBox="0 0 332 191"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M305.891 190H26.1087C26.1087 181.139 23.4633 172.642 18.7545 166.376C14.0457 160.111 7.65924 156.591 1 156.591V34.4091C7.65924 34.4091 14.0457 30.8892 18.7545 24.6238C23.4633 18.3584 26.1087 9.86064 26.1087 1H305.891C305.891 9.86064 308.537 18.3584 313.245 24.6238C317.954 30.8892 324.341 34.4091 331 34.4091V156.591C324.341 156.591 317.954 160.111 313.245 166.376C308.537 172.642 305.891 181.139 305.891 190Z"
                        fill="#F1EFED"
                        stroke="#1D1D1B"
                        strokeWidth="1.6"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  )}
                </div>
              )}
            </Styled.TicketInnerSvgWrapper>
          )}
          <Styled.TicketPosition className={className}>
            {position}
          </Styled.TicketPosition>
          <Styled.LeftDivider />
          <Styled.TicketPositionContainer>
            <Styled.TicketPositionTitle className={className}>
              {vacancy}
            </Styled.TicketPositionTitle>
            <Styled.TicketPositionStack className={className}>
              {stack.join(", ")}
            </Styled.TicketPositionStack>
          </Styled.TicketPositionContainer>
          <Styled.RightDivider />
          <Styled.TicketDataBackground>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2 0 100 49"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <image
                xlinkHref={Background.src}
                width={"100%"}
                height={"100%"}
              />
            </svg>
          </Styled.TicketDataBackground>
        </Styled.TicketInner>
        <Styled.ArrowContainer>
          <ButtonArrow />
        </Styled.ArrowContainer>
        <TicketModal isOpen={isOpen} onClose={onClose}>
          <Styles.ButtonWrapper>
            <Styles.CloseButton
              src={CloseButton.src}
              onClick={onClose}
              alt="Close Button"
            />
          </Styles.ButtonWrapper>
          <Styles.HiddenWrapper>
            <Styles.Content>
              {info.map((el) => (
                <Styles.ListItemWrapper key={el.heading}>
                  <Styles.ListTitle>{el.heading}</Styles.ListTitle>
                  <Styles.List>
                    {el.values.map((text, idx) => (
                      <Styles.ListItem key={idx}>
                        <span>{text}</span>
                      </Styles.ListItem>
                    ))}
                  </Styles.List>
                </Styles.ListItemWrapper>
              ))}
              <Styles.SubmitButtonContainer>
                <Styles.SubmitButton onClick={onSubmitClick}>
                  SUBMIT FORM
                </Styles.SubmitButton>
                <ArrowContainer>
                  <ButtonArrow />
                </ArrowContainer>
              </Styles.SubmitButtonContainer>
            </Styles.Content>
          </Styles.HiddenWrapper>
        </TicketModal>
      </Styled.TicketContainer>
    </Styled.Wrapper>
  );
};

export default CareersTicket;
