import { Dispatch, SetStateAction } from "react";

export interface IRateCard {
  title: string;
  services: IService[];
}

export interface IService {
  _id?: string;
  __v?: number;
  levels: ILevel[];
  name: string;
  image: {
    url: string;
  };
  newService?: boolean;
}

export interface ILevel {
  name: string;
  joints: IJoints;
  values: IValue[];
}

export interface IJoints {
  joint_name: boolean;
  joint_tech: boolean;
  joint_cost: boolean;
}

export interface IValue {
  technology: string;
  cost: string;
}

export interface IRateCardResponse {
  data?: IRateCard;
  isLoading?: boolean;
  refetch?: () => Promise<IRateCardResponse>;
}

export interface IRateCardServiceProps {
  services: IService[];
  setServices: Dispatch<SetStateAction<IService[] | null>>;
}

export interface IAddServiceProps {
  servicesAvailable: number;
  service: IService;
}
