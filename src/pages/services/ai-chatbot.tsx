import React from "react";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import AiChatbot from "../../components/ServisesComponents/AiChatbotPage/AiChatbot";
import { queryKeys } from "../../consts/queryKeys";
import { Testimonials } from "../../modules/shared/testimonials/components";
import { adminGlobalService } from "../../services/adminHomePage";
import BenefitsCardsBlock from "../../components/ServisesComponents/AiChatbotPage/BenefitsCardsBlock";
import FeaturesBlock from "../../components/ServisesComponents/FeaturesBlock/FeaturesBlock";
import HowToMakeStartupBlock from "../../components/ServisesComponents/HowToMakeStartupBlock/HowToMakeStartupBlock";
import SecurityPrivacyBlock from "../../components/ServisesComponents/AiChatbotPage/SecurityPrivacyBlock";
import DomainImplementationBlock from "../../components/ServisesComponents/AiChatbotPage/DomainImplementationBlock";
import ImplementationProcessBlock from "../../components/ServisesComponents/AiChatbotPage/ImplementationProcessBlock";
import FAQBlock from "../../components/Common/FAQBlock/FAQBlock";
import PricingBlock from "../../components/ServisesComponents/PricingBlock/PricingBlock";
import { IHomeData } from "../../types/Admin/AdminHomePage.types";
import PageLayout from "../../components/PageLayout/PageLayout";
import { adminAiChatbotService } from "../../services/services/AdminServiceAiChatbot";
import { PageContentLayout } from "../../styles/Layout.styled";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IAIChatbotPageData } from "../../types/services/ai-chatbot.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceAiChatbotPage], () =>
    adminAiChatbotService.getAiChatbotServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.GetFullPage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const AiChatbotPage = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isDesktopLarge = useMediaQuery("(min-width: 1920px)");

  const { data, isLoading }: IQueryResult<IAIChatbotPageData> = useQuery(
    [queryKeys.getServiceAiChatbotPage],
    () => adminAiChatbotService.getAiChatbotServicePage()
  );

  const { data: homePageData }: IHomeData = useQuery(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead!)}
      </Head>

      <PageLayout isLoading={isLoading} dataDefined={!!data}>
        {data && (
          <PageContentLayout className="ai-chatbot">
            <AiChatbot
              isDesktop={isDesktop}
              isTablet={isTablet}
              isDesktopLarge={isDesktopLarge}
              data={data.aichatbotHeroBlock}
            />
            <BenefitsCardsBlock
              isMobile={isMobile}
              isDesktop={isDesktop}
              data={data.benefitsBlock}
            />
            <HowToMakeStartupBlock
              data={data.howToMakeStartupProfitable}
              className="ai-chatbot-page"
            />
            {homePageData && (
              <Testimonials
                data={homePageData.TestimonialsBlock}
                className="ai-chatbot-page"
                mobileScreen={767}
              />
            )}
            <FeaturesBlock
              cards={data.featuresBlock.items}
              buttonLink={""}
              isAiChatbotPage={true}
              className="ai-chatbot-page"
              blockTitle={data.featuresBlock.title}
            />
            <SecurityPrivacyBlock
              isDesktop={isDesktop}
              isMobile={isMobile}
              data={data.securityAndPrivacyBlock}
            />
            <DomainImplementationBlock
              isMobile={isMobile}
              data={data.domainsBlock}
            />
            <ImplementationProcessBlock
              isDesktop={isDesktop}
              isMobile={isMobile}
              data={data.implementationProcessBlock}
            />
            <PricingBlock data={data.pricingBlock} />
            <FAQBlock
              className="services ai-chatbot-page-faq"
              questionClassName="ai-chatbot-page-faq"
              countOfQuestions={data.faqBlock.countOfQuestions}
            />
          </PageContentLayout>
        )}
      </PageLayout>
    </>
  );
};

export default AiChatbotPage;
