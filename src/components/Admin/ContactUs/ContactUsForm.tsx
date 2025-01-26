import React from "react";
import { Form } from "formik";

import GeneralBlock from "./GeneralBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";

import * as Styled from "../../../styles/AdminPage";
import Step from "./Step";
import CancelWindow from "./CancelWindow";

const ContactUsForm = () => {
  return (
    <Styled.AdminContentBlock>
      <Form>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>CONTACT US</Styled.AdminHeader>
          <AdminBlockDropDown title="General">
            <GeneralBlock />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="Step 1 (Provide contact details)">
            <Step stepBlockName="provideContactDetailsStep" />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="Step 2 (Book a call)">
            <Step stepBlockName="bookCallStep" />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="Step 3 (You’re All Set!)">
            <Step stepBlockName="callDetailsStep" />
          </AdminBlockDropDown>
          <AdminBlockDropDown title="Cancel window">
            <CancelWindow />
          </AdminBlockDropDown>
        </Styled.AdminBlocksContent>
        <Styled.MetaBlockWraper>
          <MetaTagsBlock theme="dark" sitemap="contact" />
        </Styled.MetaBlockWraper>
      </Form>
    </Styled.AdminContentBlock>
  );
};

export default ContactUsForm;
