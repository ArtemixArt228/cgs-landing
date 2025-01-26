import React from "react";

import MetaTagsBlock from "../../MetaTagsBlock";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import { queryKeys } from "../../../../consts/queryKeys";

import { AdminHeader, AdminPaddedBlock } from "../../../../styles/AdminPage";
import BlockPricing from "../CommonBlocks/Pricing";
import BlockFaq from "../CommonBlocks/Faq";
import BlockHowToMakeStartupProfitable from "../CommonBlocks/HowToMakeStartupProfitable";
import AIChatbotBlock from "./AIChatbotBlock";
import {
  benefitItem,
  domainItem,
  featureItem,
  implementationProcessItem,
  securityPrivacyItem,
} from "../../../../consts/services/ai-chatbot-page.const";
import AIChatbotHero from "./AIChatbotHero";
import { AdminSaveButton } from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { ArrowContainer } from "../../../Careers/Careers.styled";
import { useFormikContext } from "formik";
import { IAIChatbotPageData } from "../../../../types/services/ai-chatbot.types";

const ServiceAiContentBlock = () => {
  const { handleSubmit } = useFormikContext<IAIChatbotPageData>();
  const handleFormSubmit = () => handleSubmit();
  return (
    <div>
      <AdminPaddedBlock>
        <div
          style={{
            display: " flex",
            justifyContent: "space-between",
            alignContent: "center",
            backgroundColor: "#EFEEEE",
            width: "100%",
            height: 60,
            position: "sticky",
            padding: 10,
            right: 0,
            top: 0,
            zIndex: 50,
          }}
        >
          <AdminHeader className="services">AI Chatbot PAGE</AdminHeader>

          <AdminSaveButton type="submit" onClick={handleFormSubmit}>
            Save Changes
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </AdminSaveButton>
        </div>
        <AdminBlockDropDown title="Block 1 (AIChatbot Preview / Hero Section)">
          <AIChatbotHero />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="Block 2 (Benefits/Why AI Chatbot is a MUST-HAVE for Your Business)">
          <AIChatbotBlock
            basePath="benefitsBlock"
            imageIsIcon
            itemToInit={{ ...benefitItem }}
            maxItemTextLength={200}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 3 (What do clients say)">
          Data is taken from Homepage testimonials
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 4 (Technical Features)">
          <AIChatbotBlock
            basePath="featuresBlock"
            itemToInit={{ ...featureItem }}
            maxItemTextLength={200}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 5 (Security and Privacy)">
          <AIChatbotBlock
            basePath="securityAndPrivacyBlock"
            itemToInit={{ ...securityPrivacyItem }}
            maxItemTextLength={200}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 6 (Domain Implementation)">
          <AIChatbotBlock
            basePath="domainsBlock"
            imageIsIcon
            itemToInit={{ ...domainItem }}
            maxItemTextLength={200}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 7 (how to make your startup more profitable)">
          <BlockHowToMakeStartupProfitable />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 8 (Implementation process)">
          <AIChatbotBlock
            basePath="implementationProcessBlock"
            itemToInit={{ ...implementationProcessItem }}
            maxItemTextLength={200}
          />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 9 (pricing)">
          <BlockPricing />
        </AdminBlockDropDown>

        <AdminBlockDropDown title="block 10 (faq)">
          <BlockFaq />
        </AdminBlockDropDown>

        <MetaTagsBlock
          theme="dark"
          sitemap="services/ai-chatbot"
          queryKey={queryKeys.getServiceAiChatbotPage}
          serviceName={"ai-chatbot"}
        />
      </AdminPaddedBlock>
    </div>
  );
};

export default ServiceAiContentBlock;
