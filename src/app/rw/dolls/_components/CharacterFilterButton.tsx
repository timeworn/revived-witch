import { Tooltip } from "@material-tailwind/react";
import React from "react";

interface FilterButtonProps {
  description?: string;
  isActive: boolean;
  onClick: () => void;
  imgSrc?: string;
  altText?: string;
}

const FilterButton: React.FC<FilterButtonProps> = (props) => (
  <Tooltip content={props.description}>
    <button
      className={`${props.isActive ? "btn-filter-active" : ""} btn-filter-gray text-default h-9 w-9`}
      onClick={props.onClick}
    >
      <img className="p-[2px]" src={props.imgSrc} alt={props.altText} />
    </button>
  </Tooltip>
);

export default FilterButton;
