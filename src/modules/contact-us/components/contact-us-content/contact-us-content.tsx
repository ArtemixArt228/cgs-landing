import React from "react";
import * as StyledPage from "./contact-us-content.styled";
import { useMediaQuery } from "@mui/material";
import themes from "../../../../utils/themes";
import useContactPage from "../../../../hooks/useContactPage";
import { IContactUsPageData } from "../../../../types/Admin/AdminContactUs.types";
import {
  DesktopModalCancel,
  MobileModalCancel,
} from "../contact-us-cancel-form";
import { DesktopContent, MobilePage } from "./components";

interface IContact {
  data: IContactUsPageData;
}

export const ContactUsContent = ({ data }: IContact) => {
  const { calendlyLink } = data;
  const controller = useContactPage(calendlyLink, data, "talk-to-expert-page");
  const isMobile = useMediaQuery(themes.primary.media.maxBreakpoint1100);

  const { isCancelModalOpen } = controller;

  return isMobile ? (
    <StyledPage.MobileContactUsPageLayout isCancelModalOpen={isCancelModalOpen}>
      {isCancelModalOpen && <MobileModalCancel controller={controller} />}
      {!isCancelModalOpen && <MobilePage controller={controller} />}
    </StyledPage.MobileContactUsPageLayout>
  ) : (
    <StyledPage.ContactUsPageLayout isCancelModalOpen={isCancelModalOpen}>
      {isCancelModalOpen && <DesktopModalCancel controller={controller} />}
      {!isCancelModalOpen && <DesktopContent controller={controller} />}
    </StyledPage.ContactUsPageLayout>
  );
};
