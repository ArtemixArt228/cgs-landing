import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { scroller } from "react-scroll";

import BlockDropdown from "../../../../../components/Admin/BlockDropdown";
import { cvAdminService } from "../../services";
import { adminSitemapService } from "../../../../../services/adminSitemapPage";
import MetaTagsBlock from "../../../../../components/Admin/MetaTagsBlock";

import { queryKeys } from "../../../../../consts/queryKeys";
import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";
import * as Styled from "./cv-content-manager.styled";

import { CvCategory } from "../cv-category";
import { CvTitle } from "../cv-title";
import { CvManagementForm } from "../cv-management-form";
import { CvCtaBlock } from "../cv-cta";
import { CvList } from "../cv-list";

export const CvContentBlock = () => {
  const [isNewCv, setIsNewCv] = useState<boolean>(true);
  const [isDuplicatedCv, setIsDuplicatedCv] = useState<boolean>(false);
  const [current, setCurrent] = useState(-1);

  const { data } = useQuery([queryKeys.getCvs], () => cvAdminService.getCv());

  const { data: sitemap } = useQuery([queryKeys.getSitemapData], () =>
    adminSitemapService.getSitemapData()
  );

  const scrollFunc = () => {
    scroller.scrollTo("add-and-edit", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };

  return (
    <Styled.AdminPaddedBlock theme="light">
      <Styled.AdminContentBlock>
        <CvTitle />
        <div style={{ marginTop: 50 }}>
          <AdminBlockDropDown title="CATEGORY">
            <CvCategory />
          </AdminBlockDropDown>
        </div>
        <BlockDropdown title="ADD A NEW CV" id="add-and-edit">
          <CvManagementForm
            current={current}
            setCurrent={setCurrent}
            isNewCv={isNewCv}
            setIsNewCv={setIsNewCv}
            isDuplicatedCv={isDuplicatedCv}
            setIsDuplicatedCv={setIsDuplicatedCv}
            cv={data}
          />
        </BlockDropdown>
        <AdminBlockDropDown title="EDITING CV">
          <CvList
            current={current}
            setCurrent={setCurrent}
            isNewCv={isNewCv}
            setIsNewCv={setIsNewCv}
            isDuplicatedCv={isDuplicatedCv}
            setIsDuplicatedCv={setIsDuplicatedCv}
            data={data}
            sitemap={sitemap}
            scrollFunc={scrollFunc}
          />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="CTA BLOCK">
          <CvCtaBlock />
        </AdminBlockDropDown>
      </Styled.AdminContentBlock>
      <Styled.MetaBlockWraper>
        <MetaTagsBlock sitemap="/" queryKey={queryKeys.getCvPage} />
      </Styled.MetaBlockWraper>
    </Styled.AdminPaddedBlock>
  );
};
