import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SortableList, { SortableItem } from "react-easy-sort";
import { Field, useFormikContext } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { technologiesService } from "../../../../../services/technologies";
import { queryKeys } from "../../../../../consts/queryKeys";
import TrashIconBtn from "../../../../../components/Admin/RateCard/trashIconBtn";

import * as Styles from "../../../../../styles/AdminPage";

import {
  IPortfolioReview,
  ITechnology,
} from "../../../../../types/Admin/AdminPortfolio.types";

interface IDropdownProps {
  iserror?: boolean;
  maxNumber?: number;
}
export const DropdownTechnology = ({
  iserror,
  maxNumber = 6,
}: IDropdownProps) => {
  const queryClient = useQueryClient();
  const { data: fetchedTechnologies } = useQuery(
    [queryKeys.getTechnologies],
    () => technologiesService.getTechnologies()
  );

  const technologies = fetchedTechnologies?.technologies;
  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();

  const { mutateAsync: deleteTech } = useMutation(
    [queryKeys.removeTechnologies],
    (id: string) => technologiesService.removeTechnology(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getTechnologies]);
      },
    }
  );

  const changeTechHandler = (tech: ITechnology) => {
    const techExists = values.projectOverview.technologies.some(
      (t) => t._id === tech._id
    );

    if (!techExists) {
      setFieldValue("projectOverview.technologies", [
        { ...tech, main: false },
        ...values.projectOverview.technologies,
      ]);
    }
  };

  const removeTagHandler = (idx: number) => {
    const updatedTechnologies = values.projectOverview.technologies.filter(
      (_, index) => index !== idx
    );
    setFieldValue("projectOverview.technologies", updatedTechnologies);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    position: number
  ) => {
    if (
      values.projectOverview.technologies.filter((i) => i.main).length >= 6 &&
      e.target.checked
    )
      return;
    const updatedCheckedState = values.projectOverview.technologies.map(
      (item, index) =>
        index === position
          ? { ...item, main: !item.main }
          : { ...item, main: item.main }
    );

    setFieldValue("projectOverview.technologies", updatedCheckedState);
  };

  const onSelect = (
    _: React.SyntheticEvent<Element, Event>,
    tech: ITechnology | null
  ) => {
    tech && changeTechHandler(tech);
  };

  const handleDragEnd = (oldIndex: number, newIndex: number) => {
    const srcItem = values.projectOverview.technologies[oldIndex]._id;
    const desItem = values.projectOverview.technologies[newIndex]._id;
    const srcInd = values.projectOverview.technologies.findIndex(
      (el) => el._id === srcItem
    );
    const desInd = values.projectOverview.technologies.findIndex(
      (el) => el._id === desItem
    );
    const swapped = values.projectOverview.technologies;

    swapped && swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);

    setFieldValue("projectOverview.technologies", swapped);
  };

  return (
    <Styles.AdminTechAutocomplete>
      <Autocomplete
        disablePortal
        className={`${iserror ? "error" : ""}`}
        id="technology-select-box"
        options={
          technologies
            ? technologies.sort((a, b) => a.name.localeCompare(b.name))
            : []
        }
        groupBy={(option) => option.name[0]}
        getOptionLabel={(option) => option.name}
        sx={{ width: 400 }}
        onChange={(event, value) => onSelect(event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Select technology" />
        )}
        renderOption={(props, option) => (
          <li
            key={option._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 20,
            }}
          >
            <span {...props} style={{ flex: "1 0 auto" }}>
              {option.name}
            </span>
            <TrashIconBtn
              fill={"red"}
              style={{ cursor: "pointer", fill: "red" }}
              onClick={() => option._id && deleteTech(option._id)}
            />
          </li>
        )}
        disabled={values.projectOverview.technologies.length >= maxNumber}
      />
      <SortableList onSortEnd={handleDragEnd}>
        <Styles.AdminFourthBlockFlexTag>
          {values.projectOverview.technologies.map((tech, idx) => (
            <SortableItem key={idx}>
              <Styles.AdminPageFourthTechTagWrapper key={`${tech}${idx}`}>
                <Styles.AdminPageFourthTechTag>
                  <span>{tech.name}</span>
                  <span onClick={() => removeTagHandler(idx)}>x</span>
                </Styles.AdminPageFourthTechTag>
                <label>
                  <Field
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, idx)
                    }
                    type="checkbox"
                    checked={values.projectOverview.technologies[idx].main}
                    name={`projectOverview.technologies[${idx}].main`}
                  />{" "}
                  Main
                </label>
              </Styles.AdminPageFourthTechTagWrapper>
            </SortableItem>
          ))}
        </Styles.AdminFourthBlockFlexTag>
      </SortableList>
    </Styles.AdminTechAutocomplete>
  );
};
