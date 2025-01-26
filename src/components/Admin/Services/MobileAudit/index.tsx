import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import ServiceShowCase from "../../ServiceShowCase";
import BringAppBlock from "./BringAppBlock";
import AdminHeadBlockMobAudit from "./AdminHeadBlockMobAudit";
import HowDoWeAuditBlock from "./HowDoWeAuditBlock";
import TeamProvides from "./TeamProvides";
import WhatAppBlock from "./WhatAppBlock";
import WhenDoYouNeedBlock from "./WhenDoYouNeedBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import {
  AdminBlocksContent,
  MetaBlockWraper,
} from "../../../../styles/AdminPage";

const ServiceMobileAuditContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <AdminHeadBlockMobAudit />
        <WhatAppBlock />
        <TeamProvides />
        <WhenDoYouNeedBlock />
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase noMargin />
        </AdminBlockDropDown>
        <HowDoWeAuditBlock />
        <BringAppBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="services/mobile-audit" />
      </MetaBlockWraper>
    </div>
  );
};

export default ServiceMobileAuditContentBlock;
