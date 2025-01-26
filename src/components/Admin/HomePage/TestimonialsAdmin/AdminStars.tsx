import React from "react";
import ReactStars from "react-stars";
import themes from "../../../../utils/themes";

interface IStarsProps {
  value: number;
  handleChange?: (number: number) => void;
  size?: number;
  edit?: boolean;
  color2?: string;
}

const AdminStars = ({
  value,
  handleChange,
  color2 = themes.primary.colors.primary,
  size = 24,
  edit = false,
}: IStarsProps) => {
  const starsChange = (newRating: number) => handleChange!(newRating);

  return (
    <ReactStars
      half={true}
      edit={edit}
      onChange={starsChange}
      value={value}
      count={5}
      size={size}
      color2={color2}
      color1={themes.primary.colors.comment}
    />
  );
};

export default AdminStars;
