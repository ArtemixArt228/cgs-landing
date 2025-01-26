import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../../../../styles/AdminPage";
import * as StyledPortfolio from "../../../../../styles/AdminPortfolio";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../../../consts/queryKeys";
import { ITechnologies } from "../../../../../types/Admin/technologies.types";
import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";
import {
  Block1ProjectDescription,
  Block2ProjectOverview,
  Block3ProblemsAndSolutions,
  ConceptToCompletion,
  DiscoverTheAppInAction,
  FeaturesOrAISolutions,
  GlobalImageInputs,
  ImpactCreated,
  WhatClientSayAboutUs,
  DesignOverview,
} from "..";
import { DropdownCategory } from "../../../../case-studies/admin/components";

interface IAddReviewProps {
  categories: string[];
  industries: string[];
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  isSuccess: boolean;
}

export const AddReview = ({
  categories,
  industries,
  isSuccess,
  setIsSuccess,
}: IAddReviewProps) => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();
  const queryClient = useQueryClient();
  const technologies: ITechnologies | undefined = queryClient.getQueryData([
    queryKeys.getTechnologies,
  ]);

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
    }
  }, [isSuccess, setIsSuccess]);

  useEffect(() => {
    if (technologies) {
      const updatedTechnologies = values.projectOverview.technologies
        .map((t) => {
          const tech = technologies.technologies.find((te) => te._id === t._id);
          if (!tech) {
            return null;
          }
          return { ...t, name: tech.name };
        })
        .filter((t) => t !== null);
      setFieldValue("projectOverview.technologies", updatedTechnologies);
    }
  }, [technologies]);

  return (
    <StyledPortfolio.AdminCSGrid>
      <GlobalImageInputs />
      <Styled.AdminPageReviewBlock>
        <Styled.AdminCategoryWrapper>
          <DropdownCategory
            iserror={
              !!errors.categories &&
              !values.categories.length &&
              touched.categories
            }
            categories={categories}
          />
        </Styled.AdminCategoryWrapper>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="1 BLOCK (About project)"
        >
          <Block1ProjectDescription industries={industries} />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="2 BLOCK (PROJECT OVERVIEW)"
        >
          <Block2ProjectOverview />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="3 BLOCK (PROBLEMS & SOLUTIONS)"
        >
          <Block3ProblemsAndSolutions />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="4 BLOCK (DESIGN OVERVIEW)"
        >
          <DesignOverview />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="5 BLOCK (DISCOVER THE APP IN ACTION)"
        >
          <DiscoverTheAppInAction />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="6 BLOCK (FROM CONCEPT TO COMPLETION)"
        >
          <ConceptToCompletion />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="7 BLOCK (FEATURES WE IMPLEMENTED)"
        >
          <FeaturesOrAISolutions
            isFeaturesBlock
            fieldName="featuresWeImplemented.features"
          />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="9 BLOCK (WHAT CLIENTS SAY ABOUT US)"
        >
          <WhatClientSayAboutUs />
        </AdminBlockDropDown>
        <AdminBlockDropDown
          isSuccess={isSuccess}
          title="10 BLOCK (IMPACT CREATED)"
        >
          <ImpactCreated />
        </AdminBlockDropDown>
      </Styled.AdminPageReviewBlock>
    </StyledPortfolio.AdminCSGrid>
  );
};
