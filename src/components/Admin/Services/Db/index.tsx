import React from "react";

import AdminBlockDropDown from "../../../Admin/Global/AdminBlockDropDown";
import MetaTagsBlock from "../../MetaTagsBlock";
import AdminHeadBlockDb from "./AdminHeadBlockDb";
import AdminFooterBlockDb from "./AdminFooterBlockDb";
import SelectBlock from "./SelectBlock";
import FeaturesBlock from "./FeaturesBlock";
import ServiceShowCase from "../../ServiceShowCase";
import Bonuses from "../../../ServisesComponents/Bonuses/AdminComponent";
import OtherServices from "../../../ServisesComponents/OtherServices/AdminComponent";

import { AdminPaddedBlock, AdminHeader } from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

const ServiceDbContentBlock = () => {
  return (
    <div>
      <AdminPaddedBlock>
        <AdminHeader>Db and Server solutions</AdminHeader>
        <AdminBlockDropDown title="Head block">
          <AdminHeadBlockDb />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Features block">
          <FeaturesBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Select block">
          <SelectBlock />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Showcase">
          <ServiceShowCase />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Bonuses component">
          <Bonuses queryKey={queryKeys.getServiceDbPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Other services">
          <OtherServices queryKey={queryKeys.getServiceDbPage} />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Footer block">
          <AdminFooterBlockDb />
        </AdminBlockDropDown>
      </AdminPaddedBlock>

      <MetaTagsBlock
        theme="dark"
        sitemap="services/database-and-server-solutions"
      />
    </div>
  );
};

export default ServiceDbContentBlock;
