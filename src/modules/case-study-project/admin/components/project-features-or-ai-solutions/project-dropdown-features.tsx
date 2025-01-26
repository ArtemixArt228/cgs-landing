import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import * as Styled from "../../../../../styles/AdminPortfolio";
import Arrow from "/public/upArrowSidebar.svg";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import themes from "../../../../../utils/themes";

interface IDropdownProps {
  iserror?: boolean;
  itemIndex: number;
}

const DropdownFeatures = ({ iserror, itemIndex }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();
  const featureDropdownOptions = values.featuresWeImplemented.features
    .filter((item) => item.title && item.description)
    .map((item) => ({
      value: item._id,
      label: item.title,
    }));

  const handleChangeConnectedFeature = (feature: {
    label: string;
    value?: string;
  }) => {
    setFieldValue(
      `aiSolutionsToAchieveGoal.solutions[${itemIndex}].featureTitle`,
      feature.label
    );
    setIsOpen(false);
  };
  const handleClickOpen = () => {
    if (featureDropdownOptions.length > 0) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };
  const currentValue = values.featuresWeImplemented.features.find((item) => {
    return (
      item.title ===
      values.aiSolutionsToAchieveGoal.solutions[itemIndex].featureTitle
    );
  })?.title;
  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownBanner
        isOpen={isOpen}
        iserror={iserror}
        onClick={handleClickOpen}
        style={{
          cursor:
            featureDropdownOptions.length == 0 ? "not-allowed" : "pointer",
          color:
            featureDropdownOptions.length > 0
              ? "black"
              : themes.primary.colors.adminInputBorder,
        }}
      >
        {currentValue || "//Choose feature"}
        <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownBanner>
      {!!featureDropdownOptions && (
        <Styled.Content className={isOpen ? "open" : undefined}>
          {featureDropdownOptions.map((feature) => (
            <div key={feature.value} onMouseDown={(e) => e.preventDefault()}>
              <span onClick={() => handleChangeConnectedFeature(feature)}>
                {feature.label}
              </span>
            </div>
          ))}
        </Styled.Content>
      )}
    </Styled.DropdownWrapper>
  );
};

export default DropdownFeatures;
