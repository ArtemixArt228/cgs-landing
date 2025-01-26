export interface IClientMail {
  name: string;
  email: string;
  message: string;
}

export interface IVacancyMail {
  name: string;
  contact: string;
  position: string;
  cvlink?: string;
  cvpath?: string;
}

export interface IFormData {
  name: string;
  describeYourself: string;
  telegram: string;
  mediaLink: string;
  projectsLink: string;
  email: string;
}

export interface IBookModalData {
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  details?: string;
}

export interface IBookHeroModalData {
  name: string;
  email: string;
  phone?: string;
  description?: string;
}
