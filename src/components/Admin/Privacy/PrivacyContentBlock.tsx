import dynamic from "next/dynamic";
import React from "react";
import { AdminBlocksContent, MetaBlockWraper } from "../../../styles/AdminPage";
import MetaTagsBlock from "../MetaTagsBlock";
import IntroBlock from "./IntroBlock";
const QuestionBlock = dynamic(() => import("./QuestionBlock"), { ssr: false });

const PrivacyContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <IntroBlock />
        <QuestionBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="privacy-policy" />
      </MetaBlockWraper>
    </div>
  );
};

export default PrivacyContentBlock;
