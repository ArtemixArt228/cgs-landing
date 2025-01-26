import React from "react";
import Image from "next/image";

import { UseContactFormModalReturn } from "../../../../hooks/useContactPage";

import * as ContactPageStyled from "../../styles";
import * as Styled from "./contact-us-cancel-form.styled";

import Arrow from "/public/Header/arrow.svg";
import upsetFace from "/public/ContactForm/upsetFace.svg";
interface IProps {
  controller: UseContactFormModalReturn;
}

export const CancelModal = ({ controller }: IProps) => {
  const { handleCloseCancelForm, pageData, mainClassName } = controller;
  const { description, title, buttonText } = pageData.cancelWindow;
  return (
    <>
      <Styled.CancelContainer className={mainClassName}>
        <Styled.InfoModalHeader
          className={mainClassName}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <Styled.IKnowWrapper className={mainClassName}>
          <div style={{ minWidth: 24 }}>
            <Image src={upsetFace} width={24} height={24} alt="info" />
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Styled.IKnowWrapper>
      </Styled.CancelContainer>
      <Styled.ContinueWrapper
        className={mainClassName}
        onClick={handleCloseCancelForm}
      >
        <ContactPageStyled.ActionButton
          className={mainClassName + " cancel-form"}
        >
          {buttonText}
          <Image src={Arrow} alt="Arrow" />
        </ContactPageStyled.ActionButton>
      </Styled.ContinueWrapper>
    </>
  );
};
