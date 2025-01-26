import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import CalculatorPagerForm from "./CalculatorPager";
import CalculatorPriceForm from "./CalculatorPriceForm";
import CalculatorResultsForm from "./CalculatorResultsForm";
import CalculatorStepsForm from "./CalculatorStepsForm";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import "react-toastify/dist/ReactToastify.css";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCalculatorService } from "../../../services/adminCalculator";
import { ICalculatorStep } from "../../../types/Admin/Response.types";

const AdminCalculatorContent = () => {
  const [isBlockchain, toogleBlockchain] = useState<boolean>(false);
  const [sortedClassicSteps, setSortedClassicSteps] = useState<
    ICalculatorStep[]
  >([]);
  const [sortedBlockchainSteps, setSortedBlockchainSteps] = useState<
    ICalculatorStep[]
  >([]);

  const { data, refetch, isLoading } = useQuery(
    [queryKeys.getCalculatorData],
    () => adminCalculatorService.getCalculatorData()
  );

  const {
    data: classicSteps,
    isLoading: classicStepsIsLoading,
    refetch: classicRefetch,
  } = useQuery([queryKeys.getCalculatorClassicSteps], () =>
    adminCalculatorService.getCalculatorClassicSteps()
  );

  const {
    data: blockchainData,
    isLoading: blockchainIsLoading,
    refetch: blockchainRefetch,
  } = useQuery([queryKeys.getCalculatorBlockchainSteps], () =>
    adminCalculatorService.getCalculatorBlockchainSteps()
  );

  useEffect(() => {
    if (classicSteps) {
      const sortedClassicData = classicSteps.sort((a, b) => {
        const numA = parseInt(a._id, 16);
        const numB = parseInt(b._id, 16);

        return numA - numB;
      });
      setSortedClassicSteps(sortedClassicData);
    }
  }, [classicSteps]);

  useEffect(() => {
    if (blockchainData) {
      const sortedBlockchainData = blockchainData.sort((a, b) => {
        const numA = parseInt(a._id, 16);
        const numB = parseInt(b._id, 16);

        return numA - numB;
      });
      setSortedBlockchainSteps(sortedBlockchainData);
    }
  }, [blockchainData]);

  return (
    (sortedClassicSteps && sortedBlockchainSteps && (
      <Styled.AdminContentBlock>
        <Styled.AdminBlocksContent>
          <Styled.AdminHeader>CALCULATOR</Styled.AdminHeader>
          {(data && (
            <CalculatorPagerForm
              dataIsLoading={isLoading}
              refetch={refetch}
              data={data}
            />
          )) ||
            null}
          <CalculatorStepsForm
            classicIsLoading={classicStepsIsLoading}
            classicStepsData={sortedClassicSteps}
            classicRefetch={classicRefetch}
            blockchainIsLoading={blockchainIsLoading}
            blockchainStepsData={sortedBlockchainSteps}
            blockchainRefetch={blockchainRefetch}
            isBlockchain={isBlockchain}
            toogleBlockchain={toogleBlockchain}
          />
          <CalculatorResultsForm />
          <CalculatorPriceForm key={`${isBlockchain}`} />
        </Styled.AdminBlocksContent>
        <CustomToast />
      </Styled.AdminContentBlock>
    )) ||
    null
  );
};

export default AdminCalculatorContent;
