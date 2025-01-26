import React from "react";

import { UseContactFormModalReturn } from "../../../../hooks/useContactPage";
import { CancelModal, MobileContent } from "..";

interface IProps {
  controller: UseContactFormModalReturn;
}

export const MobileModalCancel = ({ controller }: IProps) => {
  const { currentIndex } = controller;
  return (
    <MobileContent
      currentIndex={currentIndex}
      controller={controller}
      showStep={false}
    >
      <CancelModal controller={controller} />
    </MobileContent>
  );
};
