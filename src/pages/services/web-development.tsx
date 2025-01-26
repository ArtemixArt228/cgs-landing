import { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminWebService } from "../../services/services/adminServicesWebPage";

import FAQBlock from "../../components/Common/FAQBlock/FAQBlock";
import HeroSection from "../../components/ServisesComponents/HeroSection/HeroSection";
import OurServicesBlock from "../../components/ServisesComponents/OurServicesBlock/OurServicesBlock";
import TechBlock from "../../components/ServisesComponents/TechBlock/TechBlock";
import PricingBlock from "../../components/ServisesComponents/PricingBlock/PricingBlock";
import FeaturesBlock from "../../components/ServisesComponents/FeaturesBlock/FeaturesBlock";
import SuccessCases from "../../components/Common/SuccessfulCasesBlock/SuccessCases";
import HowToMakeStartupBlock from "../../components/ServisesComponents/HowToMakeStartupBlock/HowToMakeStartupBlock";
import OurUpcomingProductsBlock from "../../components/ServisesComponents/OurUpcomingProductsBlock";
import PageLayout from "../../components/PageLayout/PageLayout";
import { PageContentLayout } from "../../styles/Layout.styled";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IServicePage } from "../../types/Admin/AdminServices.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceWebPage], () =>
    adminWebService.getWebServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const WebDevelopment: NextPage = () => {
  const { data, isLoading }: IQueryResult<IServicePage> = useQuery(
    [queryKeys.getServiceWebPage],
    () => adminWebService.getWebServicePage()
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
        <>
          {data && (
            <PageContentLayout>
              <HeroSection
                data={data.headerBlock}
                className="webDev"
                portfolioCategory="web"
              />
              <FeaturesBlock
                cards={data.featuresBlock?.features}
                buttonLink={data.headerBlock.buttonLink}
              />
              <HowToMakeStartupBlock data={data.howToMakeStartupProfitable} />
              <OurServicesBlock data={data.servicesBlock} />
              <TechBlock data={data.technologiesBlock} />
              <OurUpcomingProductsBlock
                title={data.upcomingProducts.title}
                data={data.upcomingProducts?.products}
              />
              <SuccessCases
                hasBlackButtonWithModal={false}
                hasTitleBackgroundFrame={false}
                className="services success-cases"
                headerClassname="services success-cases"
                data={data.successCasesBlock}
              />
              <PricingBlock data={data.pricingBlock} />
              <FAQBlock
                className="services"
                countOfQuestions={data.faqBlock?.countOfQuestions}
              />
            </PageContentLayout>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default WebDevelopment;
