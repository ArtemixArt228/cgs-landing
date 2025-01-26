import { IImage } from "./Admin.types";

export interface IPropsWithImage {
  deleteFunction: (localState?: IImage) => void;
  uploadFunction: (image: any, localState?: IImage) => void;
}
