import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as Styled from "../../../../styles/AdminPortfolio";
import * as Styles from "../../../../styles/AdminPage";

import Arrow from "../../../../../public/upArrowSidebar.svg";

import TrashIconBtn from "../../RateCard/trashIconBtn";
import { queryKeys } from "../../../../consts/queryKeys";
import {
  IDomain,
  IBlockchainService,
} from "../../../../types/Admin/Response.types";
import { adminServices } from "../../../../services/services/commonServices";

interface IDropdownProps {
  domains: IDomain[];
}

const AddDomainsDropdown = ({ domains }: IDropdownProps) => {
  const queryClient = useQueryClient();

  const { values, setFieldValue } = useFormikContext<IBlockchainService>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [techArr, setTechArr] = useState<IDomain[]>(values.domains || []);

  const { mutateAsync: deleteDomain } = useMutation(
    [queryKeys.removeDomainService],
    (id: string) => adminServices.removeDomain(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getAllDomains]);
      },
    }
  );

  const changeTechHandler = (tech: IDomain) => {
    setIsOpen(false);
    setTechArr((prevState) =>
      !prevState.includes(tech) && prevState.length <= 9
        ? [tech, ...prevState]
        : prevState
    );
  };
  const removeTagHandler = (idx: number) => {
    const temp = [...techArr];
    temp.splice(idx, 1);

    setTechArr(temp);
  };

  useEffect(() => {
    setFieldValue("domains", techArr);
  }, [setFieldValue, techArr]);

  return (
    <>
      <Styled.DropdownWrapperTechnology>
        <Styled.DropdownBanner
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {"//Choose domains"}
          <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
        </Styled.DropdownBanner>
        <Styled.Content className={isOpen ? "open" : undefined}>
          {domains?.map((dom, idx) => (
            <div key={`${dom}${idx}`} onMouseDown={(e) => e.preventDefault()}>
              <span onClick={() => changeTechHandler(dom)}>{dom.name}</span>
              <TrashIconBtn onClick={() => dom._id && deleteDomain(dom._id)} />
            </div>
          ))}
        </Styled.Content>
      </Styled.DropdownWrapperTechnology>
      <Styles.AdminFourthBlockFlexTag>
        {values.domains.map((dom, idx) => (
          <Styles.AdminPageFourthTechTagWrapper key={`${dom}${idx}`}>
            <Styles.AdminPageFourthTechTag>
              <span>{dom.name}</span>
              <span onClick={() => removeTagHandler(idx)}>x</span>
            </Styles.AdminPageFourthTechTag>
          </Styles.AdminPageFourthTechTagWrapper>
        ))}
      </Styles.AdminFourthBlockFlexTag>
    </>
  );
};

export default AddDomainsDropdown;
