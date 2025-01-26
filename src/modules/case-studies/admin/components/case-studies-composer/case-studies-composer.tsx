import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { scroller } from "react-scroll";
import { Field, useFormikContext } from "formik";

import MetaTagsBlock from "../../../../../components/Admin/MetaTagsBlock";
import BlockDropdown from "../../../../../components/Admin/BlockDropdown";

import * as Styled from "../../../../../styles/AdminPage";

import {
  IPortfolioPageData,
  IPortfolioResponse,
  ITechnology,
} from "../../../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../../../consts/queryKeys";
import { technologiesService } from "../../../../../services/technologies";
import { adminPortfolioService } from "../../../../../services/adminPortfolioPage";
import {
  AddProjectTechIcon,
  AdminCategory,
  CallToAction,
  EditReview,
  EditTechnologyDropdown,
  IndividualProjectPageInfo,
  TitleBlock,
} from "..";
import { AddAndEdit } from "../../../../case-study-project/admin/components";

export const AdminPortfolioContentBlock = () => {
  const queryClient = useQueryClient();

  const { values } = useFormikContext<IPortfolioPageData>();

  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  const { data: portfolio, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const { data: technologies } = useQuery([queryKeys.getTechnologies], () =>
    technologiesService.getTechnologies()
  );

  const { mutateAsync: addTech } = useMutation(
    [queryKeys.updateTechnologies],
    (technology: ITechnology) => technologiesService.addTechnology(technology),
    {
      onSuccess: () => {
        values.technologyNew._id = undefined;
        values.technologyNew.name = "";
        values.technologyNew.image = null as any;
        values.technologyNew.main = false;
        queryClient.invalidateQueries([queryKeys.getTechnologies]);
      },
    }
  );

  const { mutateAsync: addIndustry } = useMutation(
    [queryKeys.addPortfolioIndustry],
    (industry: string) => adminPortfolioService.addIndustry(industry),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKeys.getPortfolioPage]);
      },
    }
  );

  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);
  const [errorMsgTech, setErrorMsgTech] = useState("");
  const [errorMsgIndustry, setErrorMsgIndustry] = useState("");

  useEffect(() => {
    setTimeout(() => setErrorMsgTech(""), 2000);
  }, [errorMsgTech]);

  const scrollFunc = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminContentBlock>
        <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
        <TitleBlock />
        <BlockDropdown title="Add Technology" isOpened={false}>
          <React.Fragment>
            <EditTechnologyDropdown />
            <Styled.AdminPageAddTechnologyWrapper>
              <Field
                name="technologyNew.name"
                type="text"
                placeholder="Name the new technology"
              />
              <AddProjectTechIcon />
              <div
                className="plus"
                onClick={() => {
                  if (
                    !values.technologyNew._id &&
                    technologies?.technologies.some(
                      (e) => e.name === values.technologyNew.name
                    )
                  ) {
                    setErrorMsgTech("Such technology already exists");
                  } else if (values.technologyNew.name.length === 0) {
                    setErrorMsgTech("Enter the name of tech");
                  } else if (
                    values.technologyNew?.image === undefined ||
                    values.technologyNew.image === null
                  ) {
                    setErrorMsgTech("Image is required");
                  } else {
                    values.technologyNew.name.length > 0 &&
                      addTech(values.technologyNew);
                  }
                }}
              >
                +
              </div>
              {errorMsgTech && <p style={{ color: "red" }}>{errorMsgTech}</p>}
            </Styled.AdminPageAddTechnologyWrapper>
          </React.Fragment>
        </BlockDropdown>
        <BlockDropdown title="Add Industry" isOpened={false}>
          <Styled.AdminPageAddTechnologyWrapper>
            <Styled.IndustryWrapper>
              <Field
                name="industryNew"
                type="text"
                placeholder="Add NEW industry"
              />
              <div
                onClick={() => {
                  if (values.industries.includes(values.industryNew)) {
                    setErrorMsgIndustry("Such industry already exists");
                  } else {
                    values.industryNew?.length > 0 &&
                      addIndustry(values.industryNew);
                  }
                }}
              >
                +
              </div>
            </Styled.IndustryWrapper>
            {errorMsgIndustry && (
              <p style={{ color: "red" }}>{errorMsgIndustry}</p>
            )}
          </Styled.AdminPageAddTechnologyWrapper>
        </BlockDropdown>
        <BlockDropdown title="Category" isOpened={false}>
          <AdminCategory />
        </BlockDropdown>
        <BlockDropdown title="Add a new case" id="add-and-edit">
          <AddAndEdit
            scrollFunc={() => scrollFunc("add-and-edit")}
            current={current}
            isNewStatus={isNewStatus}
            reviews={data}
            setIsNewStatus={setIsNewStatus}
            technologies={technologies}
          />
        </BlockDropdown>
        <BlockDropdown title="Editing" id="portfolio-list">
          <EditReview
            scrollFunc={() => scrollFunc("add-and-edit")}
            setCurrent={setCurrent}
            isNewStatus={isNewStatus}
            setIsNewStatus={setIsNewStatus}
          />
        </BlockDropdown>
        <BlockDropdown title="CTA">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CallToAction initValues={portfolio!.cta} />
          )}
        </BlockDropdown>
        <BlockDropdown title="Individual project page">
          <IndividualProjectPageInfo />
        </BlockDropdown>
      </Styled.AdminContentBlock>

      <Styled.MetaBlockWraper>
        <MetaTagsBlock theme="dark" sitemap="portfolio" />
      </Styled.MetaBlockWraper>
    </Styled.AdminPaddedBlock>
  );
};
