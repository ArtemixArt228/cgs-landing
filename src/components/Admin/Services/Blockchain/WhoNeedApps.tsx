import { Field, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import AddDomainsDropdown from "./AddDomainsDropdown";
import AddMobileTechIcon from "./AddMobileTechIcon";

import {
  AdminHalfGrid,
  AdminPaddedBlock,
  AdminPageNeedWrapper,
} from "../../../../styles/AdminPage";
import {
  IDomain,
  IBlockchainService,
} from "../../../../types/Admin/Response.types";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminServices } from "../../../../services/services/commonServices";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { renderInputs } from "../../../../utils/renderInputs";

const WhoNeedApps = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery([queryKeys.getAllDomains], () =>
    adminServices.getAllDomains()
  );

  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlockchainService>();

  const handleClick = () => handleSubmit();

  const [errorMsgTech, setErrorMsgTech] = useState("");

  const { mutateAsync: addDomain } = useMutation(
    [queryKeys.addDomainService],
    (domain: IDomain) => adminServices.addDomain(domain),
    {
      onSuccess: () => {
        values.domainNew.name = "";
        values.domainNew.image = null as any;
        queryClient.invalidateQueries([queryKeys.getAllDomains]);
      },
    }
  );

  useEffect(() => {
    setTimeout(() => setErrorMsgTech(""), 2000);
  }, [errorMsgTech]);

  return (
    <AdminPaddedBlock style={{ paddingInline: 0 }}>
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "whoNeedApps" },
            state: values.whoNeedApps,
            onChangeFunction: handleChange,
          })}
        </div>
        <div>
          <>{data && <AddDomainsDropdown domains={data} />}</>
          <AdminPageNeedWrapper>
            <Field
              name="domainNew.name"
              type="text"
              placeholder="Name the new domain"
            />
            <AddMobileTechIcon />
            <div
              className="plus"
              onClick={() => {
                if (data?.some((e) => e.name === values.domainNew.name)) {
                  setErrorMsgTech("Such domain already exists");
                } else {
                  values.domainNew.name.length > 0 &&
                    values.domainNew.image !== null &&
                    addDomain(values.domainNew);
                }
              }}
            >
              +
            </div>
          </AdminPageNeedWrapper>
          {errorMsgTech && <p style={{ color: "red" }}>{errorMsgTech}</p>}
        </div>
      </AdminHalfGrid>

      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default WhoNeedApps;
