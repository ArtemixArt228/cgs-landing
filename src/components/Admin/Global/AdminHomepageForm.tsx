import React from "react";
import { Form, useFormikContext } from "formik";

import AdminCardsBlock from "../HomePage/HowDoWeSolveItBlock";
import HeroSectionBlock from "../HomePage/HeroSectionBlock";
import AdminLogosBlock from "../HomePage/LogosBlock";
import AdminSuccessfulCasesBlock from "../HomePage/SuccessfulCasesBlock";
import AdminTestimonialsBlock from "../HomePage/TestimonialsAdmin";
import AdminFooterBlock from "../Footer";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "./AdminBlockDropDown";
import ButtonArrow from "../../../utils/ButtonArrow";
import BadgeLogoBlock from "../HomePage/BadgeLogoBlock";
import HighDemandBlock from "../HomePage/HighDemandBlock";
import WhyDoesItHappenBlock from "../HomePage/WhyDoesItHappenBlock";
import FAQBlock from "../HomePage/FAQBlock";

import * as Styled from "../../../styles/AdminPage";
import {
  BlackButton,
  ArrowContainer,
} from "../../../styles/HomePage/General.styled";

import { IHomePageResponse } from "../../../types/Admin/AdminHomePage.types";

const AdminHomepageForm = () => {
  const { handleSubmit } = useFormikContext<IHomePageResponse>();

  return (
    <Styled.AdminContentBlock>
      <Form>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>HOMEPAGE</Styled.AdminHeader>
          <AdminBlockDropDown title="BLOCK 0 (PROMO)">
            <HighDemandBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 1 (HERO SECTION)">
            <HeroSectionBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 2 (WHAT DO CLIENTS SAY)">
            <AdminTestimonialsBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 3 (WHY DOES IT HAPPEN?)">
            <WhyDoesItHappenBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 4 (HOW DO WE SOLVE IT?)">
            <AdminCardsBlock />
            <BlackButton
              size={"1.5em"}
              padding={"1.11em 3em"}
              style={{ margin: "2em 0" }}
              onClick={() => handleSubmit()}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 5 (THE MOST SUCCESSFUL CASES)">
            <AdminSuccessfulCasesBlock />
            <BlackButton
              size={"1.5em"}
              padding={"1.11em 3em"}
              style={{ margin: "2em 0" }}
              onClick={() => handleSubmit()}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 6 (UPWORK/CLUTCH)">
            <BadgeLogoBlock />
            <BlackButton
              size={"1.5em"}
              padding={"1.11em 3em"}
              style={{ margin: "2em 0" }}
              onClick={() => handleSubmit()}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 7 (LOGOS)">
            <AdminLogosBlock />
            <BlackButton
              size={"1.5em"}
              padding={"1.11em 3em"}
              style={{ margin: "2em 0" }}
              onClick={() => handleSubmit()}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </AdminBlockDropDown>
          <AdminBlockDropDown title="BLOCK 8 (FAQ)">
            <FAQBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="FOOTER">
            <AdminFooterBlock />
          </AdminBlockDropDown>
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="/" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default AdminHomepageForm;
