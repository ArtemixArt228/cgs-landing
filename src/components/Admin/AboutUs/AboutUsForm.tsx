import React from "react";
import { Form } from "formik";

import AboutBlock from "./AboutBlock";
import NumbersBlock from "./NumbersBlock";
import TeamBlock from "./TeamBlock";
import FooterBlock from "./FooterBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "../../Admin/Global/AdminBlockDropDown";

import * as Styled from "../../../styles/AdminPage";

const AboutUsForm = () => {
  return (
    <Styled.AdminContentBlock>
      <Form>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>ABOUT US</Styled.AdminHeader>
          <AdminBlockDropDown title="ABOUT US">
            <AboutBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="ABOUT US IN NUMBERS">
            <NumbersBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="OUR TEAM">
            <TeamBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="CTA">
            <FooterBlock />
          </AdminBlockDropDown>
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="about-us" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default AboutUsForm;
