"use client";

import React, { Suspense, useState } from "react";
import { RWFurnitureItem } from "../../../../../classes/item/RWFurnitureItem";
import SearchBar from "../../../../../components/Base/Searchbar";
import Item from "../../../../../components/utils/Item";
import PageMaster from "../../../../../components/utils/PageMaster";

const furniture = RWFurnitureItem.getFurniture();

const Furniture: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWFurnitureItem[]>([]);

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Furniture</h1>
      </header>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={furniture} filteredObjects={setFilteredObjects} />
      </div>
      <Suspense>
        <PageMaster<RWFurnitureItem>
          objects={filteredObjects}
          renderObject={(object) => <Item item={object} />}
          resetPageOnParam="tab"
        />
      </Suspense>
    </div>
  );
};

export default Furniture;
