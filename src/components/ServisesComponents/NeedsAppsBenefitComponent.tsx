import React from "react";
import Image from "next/image";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styles from "../../styles/Services.styled";
import { Subtitle } from "../../styles/MobileService/Layout";

import { IDomain } from "../../types/Admin/Response.types";

import { SplitBrackets } from "../../utils/splitBrackets";

const NeedsAppsBenefitComponent = ({ data }: { data: any }) => {
  return (
    <Styles.WhoNeedContainer>
      <MobileInfiniteText withoutMargin title={data.whoNeedApps.subtitle} />
      <Styles.WhoNeedAppsBlocks>
        <Subtitle className="needDomain">{data.whoNeedApps.subtitle}</Subtitle>
        <Styles.WhoNeedSubText>
          <SplitBrackets text={data.whoNeedApps.text} />
        </Styles.WhoNeedSubText>
      </Styles.WhoNeedAppsBlocks>
      <Styles.WhoNeedAppsBlockImageContainer>
        {data.domains.map((domain: IDomain) => (
          <Styles.WhoNeedAppsBlockImageCard key={`${domain._id}`}>
            {domain.image?.url && (
              <Image
                src={domain.image?.url}
                height={28}
                width={28}
                alt="domain image"
              />
            )}
            <span>{domain.name}</span>
          </Styles.WhoNeedAppsBlockImageCard>
        ))}
      </Styles.WhoNeedAppsBlockImageContainer>
    </Styles.WhoNeedContainer>
  );
};

export default NeedsAppsBenefitComponent;
