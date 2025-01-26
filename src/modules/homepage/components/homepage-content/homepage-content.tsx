import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeroSection } from "../homepage-hero-section/homepage-hero-section";
import ChatContainer from "../../../../components/Chat";
import FAQBlock from "../../../../components/Common/FAQBlock/FAQBlock";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";
import { queryKeys } from "../../../../consts/queryKeys";
import SuccessCases from "../../../../components/Common/SuccessfulCasesBlock/SuccessCases";
import { Partners } from "../homepage-partners/homepage-partners";
import { Badges } from "../homepage-badges/homepage-badges";
import { PainBlock } from "../homepage-pain-block/homepage-pain-block";
import { Testimonials } from "../../../shared/testimonials/components/testimonials-content/testimonials-content";
import { HowDoWeSolveBlock } from "../homepage-how-do-we-solve/homepage-how-do-we-solve";
import { PageContentLayout } from "../../../../styles/Layout.styled";

export const Content = () => {
  const elRef = useRef<HTMLAnchorElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ]);

  if (!data) return null;

  return (
    <>
      <ChatContainer
        elRef={elRef}
        faqRef={faqRef}
        footerRef={footerRef}
        heroSectionRef={heroSectionRef}
      />
      <PageContentLayout ref={elRef} className="homepage">
        <HeroSection ref={heroSectionRef} />
        <Testimonials data={data.TestimonialsBlock} />
        <PainBlock />
        <HowDoWeSolveBlock />
        <SuccessCases
          data={data.TheMostSuccessfulCasesBlock}
          hasTitleBackgroundFrame={true}
          className="homepage success-cases"
          headerClassname="homepage success-cases"
        />
        <Badges />
        <FAQBlock
          ref={faqRef}
          countOfQuestions={data.FaqBlock.countOfQuestions}
        />
        <Partners />
      </PageContentLayout>
      <div ref={footerRef} />
    </>
  );
};
