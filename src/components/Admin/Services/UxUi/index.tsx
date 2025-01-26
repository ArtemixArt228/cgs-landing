import React from "react";

import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import AdminHeadBlockUxUi from "./AdminHeadBlockUxUi";
import WhatDoWeDoBlock from "./WhatDoWeDoBlock";
import DesignBlock from "./DesignBlock";
import EssentialBlock from "./EssentialBlock";
import AdminFooterBlockUxUi from "./AdminFooterBlockUxUi";
import ServiceShowCase from "../../ServiceShowCase";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";

import { AdminPaddedBlock, AdminHeader } from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

const ServiceUxUiContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>UX/UI DESIGN</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <AdminHeadBlockUxUi />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHAT DO WE DO">
          <WhatDoWeDoBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="ESSENTIAL BLOCK">
          <EssentialBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="DESIGN BLOCK">
          <DesignBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SHOWCASE">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="OTHER SERVICES">
          <OtherServices queryKey={queryKeys.getServiceUxUiPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <AdminFooterBlockUxUi />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/ux-ui-design" />
    </div>
  );
};

export default ServiceUxUiContentBlock;
