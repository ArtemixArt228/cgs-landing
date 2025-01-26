import React, { useEffect, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";

import TrashIconBtn from "../../../../../../../../../components/Admin/RateCard/trashIconBtn";

import * as Styled from "./technology-dropdown.styled";

import { technologiesService } from "../../../../../../../../../services/technologies";

import { ITechnology } from "../../../../../../../../../types/Admin/AdminPortfolio.types";
import { CvData } from "../../../../../../../types";

import { queryKeys } from "../../../../../../../../../consts/queryKeys";

interface TechnologyDropdownProps {
  iserror?: boolean;
  technologies: ITechnology[] | undefined;
  cvTechnologies: ITechnology[] | undefined;
  handleSelectTechnology: (techIndex: number, projectIdx: number) => void;
  projectIdx: number;
  handleDeleteTechnology: (techIndex: number, projectIdx: number) => void;
  isSuccess: boolean;
}

export const TechnologyDropdown = ({
  technologies,
  cvTechnologies,
  handleSelectTechnology,
  projectIdx,
  handleDeleteTechnology,
  isSuccess,
  iserror,
}: TechnologyDropdownProps) => {
  const queryClient = useQueryClient();

  const { setFieldValue } = useFormikContext<CvData>();

  const [inputValue, setInputValue] = useState("");

  const onSelect = (
    _: React.SyntheticEvent<Element, Event>,
    newValue: string | undefined
  ) => {
    const idx = technologies?.findIndex((tech) => tech.name === newValue);

    idx !== undefined && idx >= 0 && handleSelectTechnology(idx, projectIdx);
  };

  const { mutateAsync: deleteTech } = useMutation(
    [queryKeys.removeTechnologies],
    (id: string) => technologiesService.removeTechnology(id),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKeys.getTechnologies]);
      },
    }
  );

  const handleDragEnd = (oldIndex: number, newIndex: number) => {
    if (cvTechnologies) {
      const srcItem = cvTechnologies[oldIndex]._id;
      const desItem = cvTechnologies[newIndex]._id;
      const srcInd = cvTechnologies.findIndex((el) => el._id === srcItem);
      const desInd = cvTechnologies.findIndex((el) => el._id === desItem);
      const swapped = cvTechnologies;

      swapped && swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);

      setFieldValue(`projects.project[${projectIdx}].technology`, swapped);
    }
  };

  const [keyToReset, setKeyToReset] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setKeyToReset((prev) => prev + 1);
    }
  }, [isSuccess]);

  const getFilteredTechnologies = () => {
    if (!technologies) return [];

    const startingWithInput = technologies.filter((tech) =>
      tech.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    const containingInput = technologies.filter(
      (tech) =>
        !tech.name.toLowerCase().startsWith(inputValue.toLowerCase()) &&
        tech.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const allFiltered = [
      ...startingWithInput,
      ...containingInput.sort((a, b) => a.name.localeCompare(b.name)),
    ];

    return allFiltered;
  };

  return (
    <>
      <Autocomplete
        key={keyToReset}
        disablePortal
        id="technology-select-box"
        options={getFilteredTechnologies()}
        groupBy={(option) => option.name[0]}
        getOptionLabel={(option) => option.name}
        sx={{ width: 400 }}
        onChange={(event, value) => onSelect(event, value?.name)}
        onInputChange={(_, value) => setInputValue(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            style={{ border: iserror ? "1px solid red" : undefined }}
            label="Select technology"
          />
        )}
        renderOption={(props, option) => (
          <li
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
      />

      <SortableList onSortEnd={handleDragEnd}>
        <Styled.AdminFourthBlockFlexTag>
          {cvTechnologies?.map((cvTech, idx) => (
            <SortableItem key={idx}>
              <Styled.AdminPageFourthTechTagWrapper key={`${cvTech}${idx}`}>
                <Styled.AdminPageFourthTechTag>
                  <span>{cvTech.name}</span>
                  <span onClick={() => handleDeleteTechnology(projectIdx, idx)}>
                    x
                  </span>
                </Styled.AdminPageFourthTechTag>
              </Styled.AdminPageFourthTechTagWrapper>
            </SortableItem>
          ))}
        </Styled.AdminFourthBlockFlexTag>
      </SortableList>
    </>
  );
};
