export interface IOptionsMenu {
  optionType: string;
  optionText: string;
}
export interface IMenuProps {
  size?: string;
  menu?: string[];
  optionsMenu?: IOptionsMenu[];
  value?: string;
  setValue?: (value: string) => void;
  setIsDropped?: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  isDropped?: boolean;
  className?: string;
  bannerContentColor?: string;
  bannerClassName?: string;
}
