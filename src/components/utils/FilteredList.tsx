import React from "react";

interface FilteredListProps<T> {
  objects: T[];
  filteredObjects: T[];
  renderObject: (object: T) => React.ReactNode;
}

function FilteredList<T>({
  objects,
  filteredObjects,
  renderObject,
}: FilteredListProps<T>) {
  return (
    <>
      {objects.map((object, index) => {
        const isVisible = filteredObjects.includes(object);
        return (
          <div key={index} hidden={!isVisible}>
            {renderObject(object)}
          </div>
        );
      })}
    </>
  );
}

export default FilteredList;
