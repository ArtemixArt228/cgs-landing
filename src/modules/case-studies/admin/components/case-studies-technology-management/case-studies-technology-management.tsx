import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  IPortfolioPageData,
  ITechnology,
} from "../../../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../../../consts/queryKeys";
import { technologiesService } from "../../../../../services/technologies";
import TrashIconBtn from "../../../../../components/Admin/RateCard/trashIconBtn";
import { useFormikContext } from "formik";

export const EditTechnologyDropdown = () => {
  const { data: fetchedTechnologies } = useQuery(
    [queryKeys.getTechnologies],
    () => technologiesService.getTechnologies()
  );
  const { setFieldValue, values } = useFormikContext<IPortfolioPageData>();

  const technologies = fetchedTechnologies?.technologies;

  const handleChange = (value: ITechnology | null) => {
    if (value) {
      setFieldValue("technologyNew", value);
    }
  };

  const queryClient = useQueryClient();
  const { mutateAsync: deleteTech } = useMutation(
    [queryKeys.removeTechnologies],
    (id: string) => technologiesService.removeTechnology(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getTechnologies]);
      },
    }
  );

  return (
    <Autocomplete
      disablePortal
      id="technology-select-box"
      options={
        technologies
          ? technologies.sort((a, b) => a.name.localeCompare(b.name))
          : []
      }
      value={values.technologyNew}
      groupBy={(option) => option.name[0]}
      getOptionLabel={(option) => option.name}
      sx={{ width: 400 }}
      onChange={(_, value) => handleChange(value)}
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
    />
  );
};
