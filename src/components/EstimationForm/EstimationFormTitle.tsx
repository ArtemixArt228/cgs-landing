import React, { ChangeEvent, useEffect, useState } from "react";

import {
  AdminRateCardTitle,
  AdminRateCardTitleInput,
} from "../../styles/AdminRateCard.styled";
import { useMutation } from "@tanstack/react-query";
import useDebounce from "../../hooks/useDebounce";
import { queryKeys } from "../../consts/queryKeys";
import { adminEstimationFormService } from "../../services/adminEstimationForm";

const EstimationFormTitle = ({ title }: { title: string }) => {
  const [heading, setHeading] = useState<string>(title || "");
  const debouncedValue = useDebounce<string>(heading, 200);

  const { mutateAsync } = useMutation(
    [queryKeys.updateEstimationForm],
    async (title: string) => {
      await adminEstimationFormService.updateEstimationFormTitle(title);
    }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  useEffect(() => {
    mutateAsync(heading);
  }, [debouncedValue]);

  return (
    <div>
      <>
        <AdminRateCardTitle>Title</AdminRateCardTitle>
        <AdminRateCardTitleInput
          type="text"
          value={heading}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default EstimationFormTitle;
