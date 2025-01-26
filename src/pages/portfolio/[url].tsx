import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { adminGlobalService } from "../../services/adminHomePage";

import {
  IPortfolioProjectResponse,
  IPortfolioResponse,
  IPortfolioReview,
} from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";
import PageLayout from "../../components/PageLayout/PageLayout";
import {
  ProjectDescription,
  ClientAboutUs,
  ConceptToCompletion,
  ContactUs,
  DiscoverApp,
  FeaturesWeImplemented,
  ImpactCreated,
  ProblemsAndSolutions,
  ProjectOverview,
  SeeMoreProjects,
  DesignOverview,
} from "../../modules/case-study-project/components";
import { PageContentLayout } from "../../styles/Layout.styled";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PortfolioProjectPage = () => {
  const router = useRouter();
  const url = router.asPath;
  const segments = url.split("/");
  const lastSegment = segments[segments.length - 1];
  const id = lastSegment.split("?")[0];

  const idParts = id.split("-");

  const extractedId = idParts[idParts.length - 1];

  const [customId, setCustomId] = useState<null | string>(null);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const isSmallDesktop = useMediaQuery("(min-width: 1100px)");

  const {
    data: project,
    isLoading: isProjectLoading,
  }: IPortfolioProjectResponse = useQuery(
    [queryKeys.getPortfolioProjectPage, customId],
    () => adminPortfolioService.getProjectData(customId as string),
    { enabled: !!customId }
  );
  const { data, isLoading: isPortfolioLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );
  const {
    data: seeMoreProjIndustry,
    isLoading: isIndustryLoading,
  }: { data?: IPortfolioReview[]; isLoading: boolean } = useQuery(
    [queryKeys.getSeeMoreProjects, project?.general.title],
    () => adminPortfolioService.getByIndustry(project!.general.industry),
    {
      enabled: !!project?.general.industry,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data: seeMoreProjCategory,
    isLoading: isCategoryLoading,
  }: { data?: IPortfolioReview[]; isLoading: boolean } = useQuery(
    [queryKeys.getSeeMoreProjectsCategory, project?.general.title],
    () => adminPortfolioService.getByCategory(project!.categories[0]),
    {
      enabled: !!project?.categories,
      refetchOnWindowFocus: false,
    }
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  useEffect(() => {
    setCustomId(extractedId);
  }, [extractedId]);

  return (
    <PageLayout
      isLoading={
        isProjectLoading ||
        isPortfolioLoading ||
        isIndustryLoading ||
        isCategoryLoading
      }
      dataDefined={!!data}
    >
      <Head>
        <title>{`${project?.general.title} | CGS-team`}</title>
        <meta
          name="description"
          content={project?.general.aboutProject.slice(0, 160)}
        />
      </Head>
      <PageContentLayout className="portfolio">
        <ProjectDescription
          project={project}
          isMobile={isMobile}
          isDesktop={isDesktop}
        />
        <ProjectOverview project={project} isMobile={isMobile} />
        <ProblemsAndSolutions
          project={project}
          isDesktop={isDesktop}
          isSmallDesktop={isSmallDesktop}
          isMobile={isMobile}
        />
        <DesignOverview
          project={project}
          isDesktop={isDesktop}
          isMobile={isMobile}
        />
        {project?.discoverInAction.actionImage.image.url && (
          <DiscoverApp project={project} isMobile={isMobile} />
        )}
        <ConceptToCompletion project={project} isMobile={isMobile} />
        <FeaturesWeImplemented project={project} isMobile={isMobile} />
        <ClientAboutUs project={project} isMobile={isMobile} />
        <ImpactCreated project={project} isMobile={isMobile} />
        <ContactUs pageData={data?.individualProjectPage} />
        {data && seeMoreProjIndustry && seeMoreProjCategory && project && (
          <SeeMoreProjects
            title={data.individualProjectPage.additionalProjects}
            mainProjectTitle={project.general.title}
            projectsIndustry={seeMoreProjIndustry}
            projectsCategory={seeMoreProjCategory}
          />
        )}
      </PageContentLayout>
    </PageLayout>
  );
};

export default PortfolioProjectPage;
