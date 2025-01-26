import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import FigureOutTermsBlock from "./FigureOutTermsBlock";
import AdminHeadBlockDapp from "./AdminHeadBlockDapp";
import WorthBlock from "./WorthBlock";
import HowDoWeProvideBlock from "./HowDoWeProvideBlock";
import BringYourAppBlock from "./BringYourAppBlock";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";

const ServiceDappContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <AdminHeadBlockDapp />
        <FigureOutTermsBlock />
        <AdminBlockDropDown title={"Why it's worth it?"}>
          <WorthBlock />
        </AdminBlockDropDown>
        <HowDoWeProvideBlock />
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase noMargin />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="TEAM MEMBERS">
          <TeamMembers />
        </AdminBlockDropDown>
        <BringYourAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/smart-contract-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceDappContentBlock;
