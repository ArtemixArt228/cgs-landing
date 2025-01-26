import React from "react";
import MetaTagsBlock from "../../MetaTagsBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
import BlockFaq from "../CommonBlocks/Faq";
import BlockFeatures from "../CommonBlocks/Features";
import BlockHeroSection from "../CommonBlocks/HeroSection";
import BlockHowToMakeStartupProfitable from "../CommonBlocks/HowToMakeStartupProfitable";
import BlockPricing from "../CommonBlocks/Pricing";
import BlockServices from "../CommonBlocks/Services";
import BlockSuccessCases from "../CommonBlocks/SuccessCases";
import BlockTechnologies from "../CommonBlocks/Technologies";
import BlockUpcomingProducts from "../CommonBlocks/UpcomingProducts";
import { queryKeys } from "../../../../consts/queryKeys";

const ServiceMobileContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Mobile Development</AdminHeader>
        <AdminBlockDropDown title="Block 1 (Hero Section)">
          <BlockHeroSection />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Block 2 (Features)">
          <BlockFeatures />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 3 (how to make your startup more profitable)">
          <BlockHowToMakeStartupProfitable />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 4 (Services)">
          <BlockServices />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 5 (Technologies)">
          <BlockTechnologies />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 6 (Our upcoming products)">
          <BlockUpcomingProducts />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 7 (Success cases)">
          <BlockSuccessCases />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 8 (pricing)">
          <BlockPricing />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 9 (faq)">
          <BlockFaq />
        </AdminBlockDropDown>
      </AdminPaddedBlock>
      <MetaTagsBlock
        theme="dark"
        sitemap="services/mobile-app-development"
        queryKey={queryKeys.getServiceMobilePage}
      />
    </div>
  );
};

export default ServiceMobileContentBlock;
