import React, { useEffect, useState } from "react";
import Image from "next/future/image";
import { FormikProvider, useFormik } from "formik";
import { useMediaQuery } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import * as Styled from "./subscribe-block.styled";

import { emailSubscribeService } from "../../../../services/emailSubscribe";

import { IBlogPageData } from "../../types";

import { BlogSubscribeValidation } from "../../validators";

import Arrow from "/public/Header/arrow.svg";
import thankYou from "/public/BlogDecorations/subscribe-thank-you.svg";

interface IProps {
  data?: IBlogPageData;
}

export const SubscribeBlock = ({ data }: IProps) => {
  const [isVisibleSuccessMessage, setIsVisibleSuccessMessage] = useState(false);
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)");

  const { mutateAsync: emailSubscribe, isSuccess } = useMutation(
    (email: string) => emailSubscribeService.subscribe(email),
    {
      onError: (error: { message: string }) => {
        const message = JSON.parse(error.message)["message"] as string;
        formik.setFieldError("email", message);
      },
    }
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      honeypot: "",
    },
    validationSchema: BlogSubscribeValidation,
    onSubmit: async (values, { resetForm }) => {
      if (values.honeypot) {
        return;
      }
      await emailSubscribe(values.email);
      resetForm();
    },
  });

  const currentImage = isMobile
    ? "/BlogDecorations/subscribe-image-mobile.svg"
    : isTablet && isVisibleSuccessMessage
    ? "/BlogDecorations/image-tablet-subscribed.svg"
    : isTablet && !isVisibleSuccessMessage
    ? "/BlogDecorations/subscribe-image-tablet.svg"
    : "/BlogDecorations/subscribe-image-web.svg";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      setIsVisibleSuccessMessage(true);
      timer = setTimeout(() => {
        setIsVisibleSuccessMessage(false);
      }, 30000); // 30s
    }

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Styled.SubscribeBlockContainer
      isSubscribeSuccess={isVisibleSuccessMessage}
    >
      <Styled.SubscribeBlockWrapper
        isSubscribeSuccess={isVisibleSuccessMessage}
      >
        <FormikProvider value={formik}>
          <Styled.SubscribeBlockFormWrapper onSubmit={formik.handleSubmit}>
            <Styled.SubscribeBlockTitleAndDescriptionContainer>
              <Styled.SubscribeBlockTitle>
                {data?.subscribeBlock.title}
              </Styled.SubscribeBlockTitle>
              <Styled.SubscribeBlockDescription>
                {data?.subscribeBlock.subtitle}
              </Styled.SubscribeBlockDescription>
            </Styled.SubscribeBlockTitleAndDescriptionContainer>

            <Styled.SubscribeBlockInputAndButtonWrapper>
              <Styled.SubscribeBlockTextAndInputOrButton>
                <Styled.SubscribeBlockEmailLabel htmlFor="email">
                  {data?.subscribeBlock.fieldLabel}
                </Styled.SubscribeBlockEmailLabel>
                <Styled.SubscribeBlockEmailInput
                  hasError={formik.errors.email}
                  id="email"
                  name="email"
                  onFocus={() => setIsVisibleSuccessMessage(false)}
                />
                <input
                  type="text"
                  name="honeypot" //spam check
                  style={{ display: "none" }}
                  onChange={formik.handleChange}
                />
              </Styled.SubscribeBlockTextAndInputOrButton>
              <Styled.SubscribeBlockTextAndInputOrButton>
                <Styled.SubscribeBlockButton type="submit">
                  {data?.subscribeBlock.buttonText}
                  <Image src={Arrow} alt="Arrow" />
                </Styled.SubscribeBlockButton>
                <Styled.SubscribeBlockBottomText>
                  {data?.subscribeBlock.additionalText}
                </Styled.SubscribeBlockBottomText>
              </Styled.SubscribeBlockTextAndInputOrButton>
            </Styled.SubscribeBlockInputAndButtonWrapper>

            {isVisibleSuccessMessage && (
              <Styled.SubscribeBlockThankYouMessageContainer>
                <Image src={thankYou} alt={"Thank you tick image"} />
                <Styled.SubscribeBlockThankYouMessageText>
                  {data?.subscribeBlock.thankYouMessage}
                </Styled.SubscribeBlockThankYouMessageText>
              </Styled.SubscribeBlockThankYouMessageContainer>
            )}
          </Styled.SubscribeBlockFormWrapper>
        </FormikProvider>
        <Styled.SubscribeBlockImage
          isSubscribeSuccess={isVisibleSuccessMessage}
        >
          <Image src={currentImage} alt={"Blog image"} fill />
        </Styled.SubscribeBlockImage>
      </Styled.SubscribeBlockWrapper>
    </Styled.SubscribeBlockContainer>
  );
};
