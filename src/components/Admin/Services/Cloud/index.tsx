import React from "react";

import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import AdminHeadBlockCloud from "./AdminHeadBlockCloud";
import WorthBlock from "./WorthBlock";
import ProvidesBlock from "./ProvidesBlock";
import AdminFooterBlockCloud from "./AdminFooterBlockCloud";
import ServiceShowCase from "../../ServiceShowCase";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import FreeServices from "../../../ServisesComponents/FreeServices/AdminComponent";

import { AdminPaddedBlock, AdminHeader } from "../../../../styles/AdminPage";

const ServiceCloudContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>CLOUD SOLUTIONS</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <AdminHeadBlockCloud />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM PROVIDES">
          <ProvidesBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SHOWCASE">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title={"Why it's worth it?"}>
          <WorthBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FREE SERVICES">
          <FreeServices />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <AdminFooterBlockCloud />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <MetaTagsBlock theme="dark" sitemap="services/cloud-solutions" />
    </div>
  );
};

export default ServiceCloudContentBlock;
