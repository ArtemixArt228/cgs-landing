export interface ITechnology {
  _id?: string;
  name: string;
  image: {
    url: string;
  };
  main: boolean;
}

export interface ITechnologies {
  technologies: ITechnology[];
}
