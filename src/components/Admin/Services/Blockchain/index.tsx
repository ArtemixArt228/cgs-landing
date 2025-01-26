import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import AdminHeadBlockBlockchain from "./AdminHeadBlockBlockchain";
import ServicesBlock from "./ServicesBlock";
import WayBlock from "./WayBlock";
import AdminFooterBlockBlockchain from "./AdminFooterBlockBlockchain";
import ServiceShowCase from "../../ServiceShowCase";
import WhoNeedApps from "./WhoNeedApps";
import Advantages from "../../../ServisesComponents/Advantages/AdminAdvantages";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";

const ServiceBlockchainContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Blockchain Development</AdminHeader>
        <AdminBlockDropDown title="HEAD BLOCK">
          <AdminHeadBlockBlockchain />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="SERVICES BLOCK">
          <ServicesBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WAY BLOCK">
          <WayBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="ADVANTAGES">
          <Advantages />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="WHO NEED APPS BLOCK">
          <WhoNeedApps />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="FOOTER BLOCK">
          <AdminFooterBlockBlockchain />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="services/blockchain" />
    </div>
  );
};

export default ServiceBlockchainContentBlock;
