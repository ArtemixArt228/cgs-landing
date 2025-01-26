import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import { FormikProvider, Field, useFormik, FieldInputProps } from "formik";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";

import FileUpload from "../../../../../../components/FileUpload/FileUpload";

import * as Styled from "./contact-us-step-first.styled";
import * as StepStyled from "../../contact-us-step.styled";
import * as ContactPageStyled from "../../../../styles/contact-us.styled";
import "react-phone-input-2/lib/style.css";

import { storeKeys } from "../../../../../../consts";
import { adminBookService } from "../../../../../../services/adminBookServiceModal";
import { IBookHeroModalData } from "../../../../../../types/Mail.types";
import { ContactFormSchema } from "../../../../../../validations/ContactFormValidation";
import { UseContactFormModalReturn } from "../../../../../../hooks/useContactPage";

import Arrow from "/public/Header/arrow.svg";
import themes from "../../../../../../utils/themes";
import { IContactModalFormValues } from "../../../../../../types/ModalCategory.types";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  controller: UseContactFormModalReturn;
}

export const FirstStepForm = ({ setStep, controller }: IProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isMobile = useMediaQuery(themes.primary.media.maxBreakpoint1100);

  const { buttonText, generalFormTitle, text, mobileText } =
    controller.pageData.provideContactDetailsStep;

  const sendHeroEmail = useMutation(
    (data: IBookHeroModalData) => adminBookService.mailHeroForm(data),
    {
      onSettled: () => {
        setIsSubmitting(false);
      },
    }
  );

  const handleSubmit = async (values: IContactModalFormValues) => {
    if (values.honeypot) {
      return; // Do not proceed with submission
    }
    setIsSubmitting(true);
    sendHeroEmail.mutate(values);

    const utmParams = localStorage.getItem(storeKeys.utmParams);
    const parsedUtmParams = utmParams ? JSON.parse(utmParams) : {};

    const data = await adminBookService.createCalendlyPipedriveLead(
      values.name,
      values.email,
      values.phone,
      values.description,
      parsedUtmParams,
      values.files
    );

    controller.setLeadId(data.id);

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "launch_our_cooperation_form",
        formType: "Contact us",
      });
    }

    controller.setDescription(values.description);
    controller.setEmail(values.email);
    controller.setName(values.name);
    controller.setPhone(values.phone);
    setStep(1);
  };

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => setErrorVisible(true), errorVisible ? 250 : 0);
  };

  const formik = useFormik<IContactModalFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      honeypot: "",
      description: "",
      files: [],
    },
    onSubmit: (values) => handleSubmit(values),
    validationSchema: ContactFormSchema,
    validateOnBlur: true,
  });
  return (
    <>
      <StepStyled.FirstFormTitle
        className={controller.mainClassName}
        dangerouslySetInnerHTML={{
          __html: generalFormTitle,
        }}
      />
      <StepStyled.FirstFormDescription
        className={controller.mainClassName}
        step={0}
        dangerouslySetInnerHTML={{
          __html: isMobile ? mobileText : text,
        }}
      />
      <FormikProvider value={formik}>
        <Styled.FormWrapper
          className={controller.mainClassName}
          encType="multipart/form-data"
          id="launch_our_cooperation_form"
        >
          <Styled.NameAndEmailContainer>
            <Styled.LabelAndInputContainer>
              <Styled.FieldHeader className={controller.mainClassName}>
                What’s your name?
              </Styled.FieldHeader>
              <Styled.HeroSectionFormFieldContainer
                className={controller.mainClassName}
                error={
                  Boolean(formik.errors.name) &&
                  formik.touched.name &&
                  isClicked
                }
              >
                <Styled.HeroSectionFormField
                  className={controller.mainClassName}
                  name="name"
                  placeholder=" "
                  error={formik.errors.name && formik.touched.name && isClicked}
                />
                <Styled.HeroSectionFormFieldLabel
                  className={controller.mainClassName}
                  left={11}
                >
                  Your name
                </Styled.HeroSectionFormFieldLabel>
              </Styled.HeroSectionFormFieldContainer>
            </Styled.LabelAndInputContainer>

            <Styled.LabelAndInputContainer>
              <Styled.FieldHeader className={controller.mainClassName}>
                What’s your email?
              </Styled.FieldHeader>
              <Styled.HeroSectionFormFieldContainer
                className={controller.mainClassName}
                error={
                  Boolean(formik.errors.email) &&
                  formik.touched.email &&
                  isClicked
                }
              >
                <Styled.HeroSectionFormField
                  className={controller.mainClassName}
                  name="email"
                  placeholder=" "
                  error={
                    formik.errors.email && formik.touched.email && isClicked
                  }
                />
                <Styled.HeroSectionFormFieldLabel
                  left={11}
                  className={controller.mainClassName}
                >
                  Your email
                </Styled.HeroSectionFormFieldLabel>
              </Styled.HeroSectionFormFieldContainer>
            </Styled.LabelAndInputContainer>
          </Styled.NameAndEmailContainer>
          <Styled.FieldHeader className={controller.mainClassName}>
            What’s your number?
          </Styled.FieldHeader>

          <Styled.HeroSectionFormFieldContainer
            className={controller.mainClassName}
            error={
              Boolean(formik.errors.phone) && formik.touched.phone && isClicked
            }
          >
            <PhoneInput
              placeholder="Your phone"
              enableSearch
              searchPlaceholder="Search your country code"
              country="us"
              onChange={(value) => formik.setFieldValue("phone", value)}
              containerClass="input-phone-container"
              buttonClass="country-phone-flag"
              inputClass="input-phone"
              dropdownClass="input-phone-dropdown"
            />
          </Styled.HeroSectionFormFieldContainer>
          <Styled.FieldHeader className={controller.mainClassName}>
            Project description
          </Styled.FieldHeader>

          <Styled.HeroSectionFormFieldAreaContainer
            className={controller.mainClassName}
            error={
              Boolean(formik.errors.description) &&
              formik.touched.description &&
              isClicked
            }
            style={{ position: "relative" }}
            hasFiles={!!formik.values.files.length}
            fileError={!!formik.errors.files}
          >
            <FileUpload className={controller.mainClassName} />
            <Field name="description">
              {({ field }: { field: FieldInputProps<string> }) => (
                <Styled.HeroSectionFormFieldAreaWrapper
                  className={controller.mainClassName}
                >
                  <Styled.HeroSectionFormFieldArea
                    {...field}
                    className={controller.mainClassName}
                    placeholder=" "
                    as="textarea"
                    rows={!!formik.values.files.length ? 1 : 2}
                    hasFiles={!!formik.values.files.length}
                  />

                  <Styled.HeroSectionFormFieldLabel
                    left={10}
                    hasFiles={!!formik.values.files.length}
                    className={controller.mainClassName + " description"}
                  >
                    Short project description
                  </Styled.HeroSectionFormFieldLabel>
                </Styled.HeroSectionFormFieldAreaWrapper>
              )}
            </Field>
          </Styled.HeroSectionFormFieldAreaContainer>
          {/* Honeypot hidden field */}
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <div style={{ width: "100%" }} onClick={handleButtonClick}>
            <ContactPageStyled.ActionButton
              className={controller.mainClassName}
            >
              {isSubmitting ? (
                <Styled.FormLoader>
                  <div></div>
                  <div></div>
                  <div></div>
                </Styled.FormLoader>
              ) : (
                <>
                  {buttonText}
                  <Image src={Arrow} alt="Arrow" />
                </>
              )}
            </ContactPageStyled.ActionButton>
          </div>
        </Styled.FormWrapper>
      </FormikProvider>
    </>
  );
};
