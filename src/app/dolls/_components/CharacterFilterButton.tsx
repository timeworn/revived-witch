import React from "react";

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  imgSrc?: string;
  altText?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  isActive,
  onClick,
  imgSrc,
  altText,
}: FilterButtonProps) => (
  <button
    className={`${isActive ? "btn-filter-active" : ""} btn-filter-gray text-default h-9 w-9`}
    onClick={onClick}
  >
    <img className="p-[2px]" src={imgSrc} alt={altText} />
  </button>
);

export default FilterButton;
