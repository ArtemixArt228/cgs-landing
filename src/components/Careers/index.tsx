import React, { FC } from "react";

import CareersTicket from "../../components/CareersTicket";
import CareersForm from "../CareersForm";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useIsClient } from "../../hooks/useIsClient";
import * as Styles from "./Careers.styled";
import Arrow from "../../../public/arrowRight.svg";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import ArrowMobile from "../../../public/CareerDecorations/ArrowMobile.svg";
import MagnifiedGlass from "../../../public/magnifiedGlass.svg";
import ScrambleText from "../TextScramble/ScrambleText";

interface ICareersProps {
  data?: IDataCareersResponse;
}
const Careers: FC<ICareersProps> = ({ data }) => {
  const { width } = useWindowDimension();
  const isClient = useIsClient();
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();
  const positions = data?.tickets?.length
    ? data.tickets.map(({ vacancy, position }) => `${position} ${vacancy}`)
    : [];

  positions.length && positions.push("None of the above");

  const mapTickets = () => {
    return data?.tickets.map((ticket, idx) => (
      <CareersTicket scrollTo={scrollTo} ticket={ticket} key={idx} />
    ));
  };

  return (
    <Styles.Layout>
      <Styles.CareersContainer>
        <Styles.Title>
          <Styles.TitleTextRow>
            <Styles.TitleText>NEXT-GENERATION</Styles.TitleText>
            <Styles.ArrowContainer>
              {width && isClient && (
                <Styles.TitleArrow
                  src={width > 768 ? Arrow.src : ArrowMobile.src}
                  alt="Arrow"
                />
              )}
            </Styles.ArrowContainer>
            <Styles.TitleText>PROJECTS&nbsp;</Styles.TitleText>
          </Styles.TitleTextRow>
          <Styles.TitleTextRow>
            <Styles.TitleText>REQUIRE AN&nbsp;</Styles.TitleText>
            <Styles.TitleText className={"blue"}>
              <ScrambleText text={"OUTSTANDING TEAM."} />
            </Styles.TitleText>
          </Styles.TitleTextRow>
        </Styles.Title>
        <Styles.TicketsWrapper>
          <Styles.TicketsContainer>{mapTickets()}</Styles.TicketsContainer>
        </Styles.TicketsWrapper>
        <Styles.Separator />
        <Styles.FormTitle>
          &lt;Found your dream-job?
          <br />
          Let us discover you!&gt;
        </Styles.FormTitle>
        <Styles.FormAndImageContainer>
          <Styles.FormContainer>
            <Styles.FormContainer3D>
              <Styles.TopCorner />
              <Styles.BottomCorner />
            </Styles.FormContainer3D>
            <Styles.Form>
              <CareersForm positions={positions} data={data} ourRef={ref} />
            </Styles.Form>
          </Styles.FormContainer>
          <Styles.FormImage src={MagnifiedGlass.src} alt="Magnified Glass" />
        </Styles.FormAndImageContainer>
      </Styles.CareersContainer>
    </Styles.Layout>
  );
};

export default Careers;
