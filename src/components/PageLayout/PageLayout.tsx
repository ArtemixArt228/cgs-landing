import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Loader, LoaderStub } from "../Loader";
import FooterNew from "../FooterNew/FooterNew";
import HeaderNavNew from "../HeaderNavNew/HeaderNavNew";
import HighDemandComponent from "../HighDemandComponent/HighDemandComponent";

import * as Styled from "./PageLayout.styled";

import { useUTM } from "../../hooks/useUTM";

import { PAGES_TO_ADD_PROMO_SECTION } from "../../consts/promo";

import { navigationRoutesLinks } from "../../utils/variables";

interface IPageLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
  dataDefined?: boolean;
  setLink?: Dispatch<SetStateAction<string>>;
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
  hasFooter?: boolean;
  headerClassName?: string;
}

const PageLayout: React.FC<IPageLayoutProps> = ({
  isLoading,
  children,
  dataDefined = true,
  setLink,
  setOpenFailedModal,
  hasFooter = true,
  clickFromEstimationForm = false,
  headerClassName = "",
}) => {
  const { params } = useUTM();
  const router = useRouter();

  const [hasPromo, setHasPromo] = useState(false);

  useEffect(() => {
    if (
      params?.utm_source === "clutch.co" &&
      PAGES_TO_ADD_PROMO_SECTION.find((item) => {
        let foundItem: { path: string; rule: string } | null;

        if (item.rule == "full-match") {
          foundItem = router.pathname === item.path ? item : null;
        } else {
          foundItem = router.pathname.includes(item.path) ? item : null;
        }

        return foundItem;
      })
    ) {
      setHasPromo(true);
    }
  }, [params?.utm_source, router.pathname]);

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : dataDefined ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <HeaderNavNew
            setLink={setLink}
            clickFromEstimationForm={clickFromEstimationForm}
            setOpenFailedModal={setOpenFailedModal}
            withPromoSection={hasPromo}
            className={headerClassName}
          />

          {hasPromo && (
            <HighDemandComponent
              contact={router.pathname == navigationRoutesLinks.Contact}
            />
          )}
          <main style={{ flexGrow: 1 }}>{children}</main>
          {hasFooter && (
            <FooterNew
              clickFromEstimationForm={clickFromEstimationForm}
              setOpenFailedModal={setOpenFailedModal}
            />
          )}
        </div>
      ) : (
        <Styled.AdminUnauthorizedModal>
          Something went wrong 🤔
        </Styled.AdminUnauthorizedModal>
      )}
    </Loader>
  );
};

export default PageLayout;
