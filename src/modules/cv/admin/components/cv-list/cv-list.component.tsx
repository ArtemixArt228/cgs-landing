import { useQueryClient } from "@tanstack/react-query";
import { useFormikContext } from "formik";
import React, { Dispatch, SetStateAction, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";

import AdminDropDown from "../../../../../components/Admin/Global/AdminDropDown";
import { CvListItem } from "./cv-list-item.component";

import * as Styled from "./cv-list.styled";

import { CvData, ICvPageData } from "../../../types";
import { ISitemapData } from "../../../../../types/Admin/Response.types";

import { queryKeys } from "../../../../../consts/queryKeys";
import { useCvMutations } from "../../hooks";

interface ICvs {
  isNewCv: boolean;
  setIsNewCv: Dispatch<SetStateAction<boolean>>;
  isDuplicatedCv: boolean;
  setIsDuplicatedCv: Dispatch<SetStateAction<boolean>>;
  setCurrent: (val: number) => void;
  current: number;
  data?: void | CvData[] | undefined;
  sitemap?: ISitemapData | void;
  scrollFunc: () => void;
}

export const CvList = ({
  current,
  setCurrent,
  isNewCv,
  setIsNewCv,
  isDuplicatedCv,
  setIsDuplicatedCv,
  data,
  scrollFunc,
}: ICvs) => {
  const { values } = useFormikContext<ICvPageData>();
  const queryClient = useQueryClient();

  const { swapCvs, deleteCvById } = useCvMutations({});

  const [catValue, setCatValue] = useState(values.categories[0]);

  const deleteFunc = async (id: string) => {
    await deleteCvById(id);
    await queryClient.invalidateQueries([queryKeys.getCvs]);
  };

  const filteredData =
    catValue === "All"
      ? data
      : data?.filter((data) => data.category.includes(catValue));

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    if (filteredData && data) {
      const srcItem = filteredData[oldIndex]._id;
      const desItem = filteredData[newIndex]._id;
      const srcInd = data.findIndex((el) => el._id === srcItem);
      const desInd = data.findIndex((el) => el._id === desItem);

      await swapCvs({ srcInd, desInd });
    }
  };

  return (
    <>
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          size="primary"
          bannerClassName="admin-cv-dropdown"
          menu={[...values.categories.map((elem) => elem)]}
          value={catValue}
          setValue={setCatValue}
          className="admin-cv-dropdown"
        />
      </Styled.AdminCategoryBlock>
      <SortableList onSortEnd={handleDragEnd}>
        {(filteredData &&
          filteredData.length !== 0 &&
          filteredData.map((cv, idx) => (
            <SortableItem key={idx}>
              <Styled.DraggableWrapper>
                <CvListItem
                  cv={cv}
                  idx={idx}
                  current={current}
                  setCurrent={setCurrent}
                  editFlag={isNewCv}
                  editTrigger={setIsNewCv}
                  isDuplicatedCv={isDuplicatedCv}
                  setIsDuplicatedCv={setIsDuplicatedCv}
                  onScroll={scrollFunc}
                  deleteFunc={() => cv._id && deleteFunc(cv._id)}
                />
              </Styled.DraggableWrapper>
            </SortableItem>
          ))) || <Styled.AdminSubTitle>no CVs</Styled.AdminSubTitle>}
      </SortableList>
    </>
  );
};
