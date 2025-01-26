import React from "react";

import { ServiceCard } from "./ServiceCard";
import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";

import * as Styles from "./FreeServices.styled";
import { IFreeServicesComponent } from "../../../../types/ServicesComponent.types";

interface IServicesProps {
  freeServices?: IFreeServicesComponent;
  className?: string;
}

export const FreeServices = ({ freeServices, className }: IServicesProps) => {
  const { title, services } = freeServices ?? {
    title: "",
    services: [{ subtitle: "", text: "" }],
  };

  return (
    <Styles.Container className={className}>
      <div>
        <MobileInfiniteText title={title} />
      </div>
      <div>
        <Styles.Title className={className}>{title}</Styles.Title>
        <Styles.ServiceList>
          {services.map((item, idx) => (
            <ServiceCard
              key={idx}
              idx={idx}
              subtitle={item.subtitle}
              text={item.text}
              className={className}
            />
          ))}
        </Styles.ServiceList>
      </div>
    </Styles.Container>
  );
};

export default FreeServices;
