import React from "react";

import { UseContactFormModalReturn } from "../../../../hooks/useContactPage";

import * as Styled from "../contact-us-content/components/contact-us-content-desktop/contact-us-content-desktop.styled";
import { CancelModal } from "..";

interface IProps {
  controller: UseContactFormModalReturn;
}

export const DesktopModalCancel = ({ controller }: IProps) => {
  return (
    <Styled.DesktopModalLayout className={controller.mainClassName}>
      <Styled.CancelWrapper className={controller.mainClassName}>
        <CancelModal controller={controller} />
      </Styled.CancelWrapper>
    </Styled.DesktopModalLayout>
  );
};
