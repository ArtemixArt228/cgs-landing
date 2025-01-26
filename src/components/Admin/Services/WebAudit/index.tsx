import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringYourAppBlock from "./BringYourAppBlock";
import AdminHeadBlockWebAudit from "./AdminHeadBlockWebAudit";
import HowToDoBlock from "./HowToDoBlock";
import TypesBlock from "./TypesBlock";
import WhatIsBlock from "./WhatIsBlock";
import ProblemsAuditSolve from "./ProblemsAuditSolve";
import TeamMembers from "../../../ServisesComponents/TeamMembers/AdminTeamMembers";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";

const ServiceWebAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <AdminHeadBlockWebAudit />
        <WhatIsBlock />
        <ProblemsAuditSolve />
        <TypesBlock />
        <AdminBlockDropDown title="Team Members">
          <TeamMembers />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase noMargin />
        </AdminBlockDropDown>
        <HowToDoBlock />
        <BringYourAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/web-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceWebAuditContentBlock;
