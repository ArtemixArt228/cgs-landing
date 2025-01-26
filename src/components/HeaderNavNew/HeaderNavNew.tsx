import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

import Logo from "./Logo";
import HeaderDropdown from "./HeaderDropdown";
import HeaderBurgerDropdown from "./HeaderBurgerDropdown";
import BurgerButton from "../BurgerMenu/BurgerButton";
const BurgerMenu = dynamic(() => import("../BurgerMenu/BurgerMenu"));

import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";

import { navigationRoutesNamesNew, routersNew } from "../../utils/variables";
import * as StyledThisComp from "./HeaderNav.styled";

import useContactFormRedirect from "../../hooks/useContactFormRedirect";
import { useRouter } from "next/router";
import { ActionButton } from "../ActionButton/ActionButton";

interface IProps {
  setLink?: Dispatch<SetStateAction<string>>;
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
  withPromoSection?: boolean;
  className?: string;
}
const HeaderNavNew = ({
  setLink,
  setOpenFailedModal,
  clickFromEstimationForm,
  withPromoSection = false,
  className,
}: IProps): JSX.Element => {
  const router = useRouter();

  const burgerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const { handleButtonClick } = useContactFormRedirect();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBurgerHandler = () => {
    if (isMobile && window.scrollY) {
      setIsScrolled(isOpen);
    }
    setIsOpen((old) => !old);
  };

  const handlePortfolioClick = async () => {
    if (window.location.pathname === "/portfolio") {
      window.location.href = "/portfolio";
    } else {
      await router.push("/portfolio");
    }
  };

  const handleBlogClick = async () => {
    if (window.location.pathname === "/blog") {
      window.location.href = "/blog";
    } else {
      await router.push("/blog");
    }
  };

  const handleLinkItemClick = (ind: number) => async () => {
    if (routersNew[ind] === "/portfolio") {
      await handlePortfolioClick();
    } else if (routersNew[ind] === "/blog") {
      await handleBlogClick();
    } else {
      await router.push(routersNew[ind]);
    }
  };

  DisableScrollBarHandler(isOpen);
  return (
    <>
      <StyledThisComp.HeaderWrapper className="navbar">
        <StyledThisComp.HeaderNavContainer
          isScrolled={isScrolled}
          withPromoSection={withPromoSection}
        >
          <StyledThisComp.NavBarWrapper
            isScrolled={isScrolled}
            className={className}
          >
            <StyledThisComp.LogoLinkWrapper
              onClick={(e) => {
                if (clickFromEstimationForm) {
                  e.preventDefault();
                  setOpenFailedModal!(true);
                  setLink!("/");
                }
              }}
              href={"/"}
            >
              <Logo cssClass="header" />
            </StyledThisComp.LogoLinkWrapper>
            <BurgerButton isOpen={isOpen} onToggle={toggleBurgerHandler} />
          </StyledThisComp.NavBarWrapper>
          <StyledThisComp.HeaderSeparator />
          {isMobile ? (
            <BurgerMenu
              isOpen={isOpen}
              burgerRef={burgerRef}
              setIsScrolled={setIsScrolled}
            >
              {navigationRoutesNamesNew.map(
                ({ route, withDropdown, tags }, ind) =>
                  withDropdown ? (
                    <HeaderBurgerDropdown
                      tags={tags ? tags : []}
                      dropdownName={route}
                      key={route + ind}
                    />
                  ) : (
                    <Link key={route + ind} href={routersNew[ind]} passHref>
                      <StyledThisComp.BurgerLinkText
                        onClick={handleLinkItemClick(ind)}
                      >
                        {route}
                      </StyledThisComp.BurgerLinkText>
                    </Link>
                  )
              )}
              <StyledThisComp.BurgerButtonWrapper>
                <ActionButton
                  buttonText="Talk to an expert"
                  isHeaderButton
                  className="header"
                  handleAction={handleButtonClick}
                />
              </StyledThisComp.BurgerButtonWrapper>
            </BurgerMenu>
          ) : (
            <StyledThisComp.NavList className={className}>
              {navigationRoutesNamesNew.map(
                ({ route, withDropdown, tags }, ind) =>
                  !withDropdown ? (
                    <StyledThisComp.ListItem key={route + ind}>
                      <Link href={routersNew[ind]} passHref>
                        <StyledThisComp.ListItemNav
                          className={className}
                          onClick={handleLinkItemClick(ind)}
                        >
                          <StyledThisComp.LinkText>
                            {route}
                          </StyledThisComp.LinkText>
                        </StyledThisComp.ListItemNav>
                      </Link>
                    </StyledThisComp.ListItem>
                  ) : (
                    <HeaderDropdown
                      tags={tags ? tags : []}
                      dropdownName={route}
                      key={route + ind}
                      className={className}
                    />
                  )
              )}
            </StyledThisComp.NavList>
          )}
          <StyledThisComp.HeaderButtonWrapper>
            <ActionButton
              buttonText="Talk to an expert"
              isHeaderButton
              className="header"
              handleAction={handleButtonClick}
            />
          </StyledThisComp.HeaderButtonWrapper>
        </StyledThisComp.HeaderNavContainer>
      </StyledThisComp.HeaderWrapper>
    </>
  );
};

export default HeaderNavNew;
