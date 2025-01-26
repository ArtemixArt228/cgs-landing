import { IImage } from "./Admin/Admin.types";

export interface IServiceHistory {
  serviceName?: string;
  queryKey?: string;
}

export interface IOtherService {
  imageColor: IImage;
  imageGrayscale: IImage;
  link: string;
}

export interface IOtherServicesComponent {
  title: string;
  text: string;
  services: IOtherService[];
}

export interface IFreeService {
  subtitle: string;
  text: string;
}

export interface IFreeServicesComponent {
  title: string;
  services: IFreeService[];
  lastModified?: string;
}

export interface IBonus {
  subtitle: string;
  text: string;
}

export interface IBonusesComponent {
  title: string;
  bonuses: IBonus[];
}
export interface ITeamMembers {
  title: string;
  description: string;
  members: IDataTeamMember[];
  selectedMembers: IDataTeamMember[];
  lastModified?: string;
}

export interface IDataTeamMember {
  id?: string;
  member: string;
}
export interface IAdvantagesServicesComponent {
  title: string;
  content: [{ subtitle: string; text: string }];
}
