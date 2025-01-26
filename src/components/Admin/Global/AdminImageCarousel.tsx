import React from "react";
import * as Styled from "../../../styles/AdminPage";
import arrowAdminFeedbackL from "../../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";

interface ICarouselProps {
  page: number;
  setPage: (value: number) => void;
  length: number;
}

const AdminCarousel = ({ page, setPage, length }: ICarouselProps) => {
  const pageUp = () => setPage(page + 1 < length ? page + 1 : 0);
  const pageDown = () => setPage(page > 0 ? page - 1 : length - 1);

  return (
    <div>
      <Styled.AdminFeedbackArrows>
        <Styled.AdminPointer onClick={pageUp}>
          <Image src={arrowAdminFeedbackL} alt="" />
        </Styled.AdminPointer>
        <Styled.AdminPointer onClick={pageDown}>
          <Image src={arrowAdminFeedbackR} alt="" />
        </Styled.AdminPointer>
      </Styled.AdminFeedbackArrows>
    </div>
  );
};

export default AdminCarousel;
