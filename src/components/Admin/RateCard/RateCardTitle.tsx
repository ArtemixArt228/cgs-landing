import React, { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  AdminRateCardTitle,
  AdminRateCardTitleInput,
} from "../../../styles/AdminRateCard.styled";

import { queryKeys } from "../../../consts/queryKeys";

import { adminRateCardService } from "../../../services/adminRateCard";

import useDebounce from "../../../hooks/useDebounce";

const RateCardTitle = ({ title }: { title: string }) => {
  const queryClient = useQueryClient();

  const [heading, setHeading] = useState<string>(title || "");
  const debouncedValue = useDebounce<string>(heading, 200);

  const { mutateAsync: updateRateCardTitle } = useMutation(
    [queryKeys.rateCardTitle],
    (title: string) => adminRateCardService.updateTitle(title),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  useEffect(() => {
    updateRateCardTitle(heading);
  }, [debouncedValue]);

  return (
    <>
      <AdminRateCardTitle>Title</AdminRateCardTitle>
      <AdminRateCardTitleInput
        type="text"
        value={heading}
        onChange={handleChange}
      />
    </>
  );
};

export default RateCardTitle;
