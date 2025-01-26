import React, { ChangeEvent } from "react";

import { AdminPaddedBlock } from "../../../../../styles/AdminPage";
import { DesignOverviewSection } from "./project-design-overview-section";
import { newPortfolioInitialValues } from "../../../../../consts";
import * as Styled from "../../../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

export const DesignOverview = () => {
  const { values, touched, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();
  return (
    <AdminPaddedBlock className="services">
      <Styled.AdminFlexRow gap="16px" style={{ marginBottom: "2em" }}>
        <Styled.AdminCheckboxField
          iserror={
            !!errors.designOverview?.includeBlock &&
            touched.designOverview?.includeBlock
          }
          checked={values.designOverview?.includeBlock}
          type="checkbox"
          id="Include Block"
          name="designOverview.includeBlock"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const { checked } = e.target;
            setFieldValue("designOverview.includeBlock", checked);
          }}
        />
        <label
          htmlFor="Include Block"
          style={{ margin: "6px", fontSize: "20px" }}
        >
          Include Block
        </label>
      </Styled.AdminFlexRow>
      <DesignOverviewSection
        basePath={"fontSection"}
        itemToInit={{
          ...newPortfolioInitialValues.designOverview.fontSection.cards[0],
        }}
        sectionType={"font"}
      />
      <DesignOverviewSection
        basePath={"colorSection"}
        itemToInit={{
          ...newPortfolioInitialValues.designOverview.colorSection.cards[0],
        }}
        sectionType={"color"}
      />
      <DesignOverviewSection
        basePath={"accessibilitySection"}
        itemToInit={{
          ...newPortfolioInitialValues.designOverview.accessibilitySection
            .cards[0],
        }}
        sectionType={"accessibility"}
      />
    </AdminPaddedBlock>
  );
};
