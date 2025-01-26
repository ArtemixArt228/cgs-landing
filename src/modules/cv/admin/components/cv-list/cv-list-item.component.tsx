import { useQueryClient } from "@tanstack/react-query";
import React, { Dispatch, SetStateAction, useRef } from "react";
import Image from "next/image";

import ButtonArrow from "../../../../../utils/ButtonArrow";
import Loading from "../../../../../../public/CareerDecorations/loading.svg";

import * as Styles from "./cv-list-item.styled";
import edit from "../../../../../../public/editIcon.svg";
import close from "../../../../../../public/bigClose.svg";

import { queryKeys } from "../../../../../consts/queryKeys";
import { CvData } from "../../../types";
import { useDownloadCv } from "../../../hooks";

import useUploadModal from "../../../../../hooks/useUploadModal";

interface IItemProps {
  cv: CvData;
  deleteFunc?: (e?: React.ChangeEvent<any>) => void;
  editTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag?: boolean;
  isDuplicatedCv: boolean;
  setIsDuplicatedCv: Dispatch<SetStateAction<boolean>>;
  current: number;
  setCurrent?: (value: number) => void;
  idx?: number;
  onScroll: () => void;
}

export const CvListItem = ({
  cv,
  deleteFunc,
  editTrigger,
  editFlag,
  current,
  setCurrent,
  setIsDuplicatedCv,
  idx,
  onScroll,
}: IItemProps) => {
  const queryClient = useQueryClient();
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const data = queryClient.getQueryData<CvData[]>([queryKeys.getCvs]);

  const link = `/cv/${cv.personal.name.toLowerCase().replace(/\s+/g, "-")}-${
    cv._id
  }`;

  const { downloadFile: downloadPdf, isLoading: pdfLoading } = useDownloadCv(
    cv.personal.name
  );

  const exportAsPdf = async () => {
    if (linkRef.current) {
      await downloadPdf(linkRef.current.href);
    }
  };

  const { downloadFile: downloadDocx, isLoading: docxLoading } = useDownloadCv(
    cv.personal.name,
    "docx"
  );

  const exportAsDocx = async () => {
    if (linkRef.current) {
      const fullURL = linkRef.current.href;
      const cvId = fullURL.split("-").pop();

      await downloadDocx(cvId);
    }
  };

  const editTriggerFunc = () => {
    if (setCurrent && typeof idx === "number" && editTrigger && data) {
      setCurrent(data.findIndex((val) => val._id === cv._id));
      editTrigger((prev) => !prev);
    }
    if (editFlag) onScroll();
  };

  const duplicateFunc = () => {
    if (setCurrent && data) {
      setCurrent(data.findIndex((val) => val._id === cv._id));
      setIsDuplicatedCv(true);
    }
    if (editFlag) onScroll();
  };

  return (
    <>
      <Styles.AdminCvItemFrame
        className={
          editFlag
            ? undefined
            : !editFlag && current !== idx
            ? "fade"
            : undefined
        }
      >
        <Styles.AdminCvItemFlexContent>
          <Styles.AdminCvItemLeftFlex>
            {cv.image?.url && (
              <Image
                src={cv.image.url}
                width={155}
                height={155}
                alt="admin cv image"
              />
            )}
            <Styles.AdminCvItemTitle>
              <Styles.AdminCvItemName>
                {cv.personal.name}
              </Styles.AdminCvItemName>
              <Styles.AdminCvItemRole>
                {cv.personal.role}
              </Styles.AdminCvItemRole>
            </Styles.AdminCvItemTitle>
          </Styles.AdminCvItemLeftFlex>
          <Styles.AdminCvItemRightFlex>
            <Styles.AdminCvItemLink>
              <a ref={linkRef} href={link} target="_blank" rel="noreferrer">
                link
              </a>
              <Styles.ArrowContainer>
                <ButtonArrow />
              </Styles.ArrowContainer>
            </Styles.AdminCvItemLink>
            <Styles.AdminCvItemExport onClick={exportAsPdf}>
              {!pdfLoading ? (
                <p>export as PDF</p>
              ) : (
                <Styles.Loader src={Loading.src} alt="pdf loader" />
              )}
            </Styles.AdminCvItemExport>
            <Styles.AdminCvItemExport onClick={exportAsDocx}>
              {!docxLoading ? (
                <p>export as DOC</p>
              ) : (
                <Styles.Loader src={Loading.src} alt="pdf loader" />
              )}
            </Styles.AdminCvItemExport>
          </Styles.AdminCvItemRightFlex>
        </Styles.AdminCvItemFlexContent>
        <Styles.AdminCvItemEditDelete>
          <div style={{ display: "flex", gap: "30px", alignItems: "baseline" }}>
            <Styles.AdminCvItemEdit onClick={editTriggerFunc}>
              <Image
                src={editFlag || current !== idx ? edit : close}
                alt="admin cv edit icon"
              />
            </Styles.AdminCvItemEdit>
            <Styles.AdminCvItemDuplicate onClick={duplicateFunc}>
              <p style={{ fontSize: "1.5em", margin: "0" }}>Duplicate</p>
            </Styles.AdminCvItemDuplicate>
          </div>
          <Styles.AdminCvItemDelete onClick={deleteFunc}>
            delete
          </Styles.AdminCvItemDelete>
        </Styles.AdminCvItemEditDelete>
      </Styles.AdminCvItemFrame>
    </>
  );
};
