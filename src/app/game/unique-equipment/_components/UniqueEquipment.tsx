"use client";

import React, { Suspense, useState } from "react";
import { ItemConfig } from "../../../../components/utils/Item";
import { RWUniqueEquipmentItem } from "../../../../classes/item/RWUniqueEquipmentItem";
import SearchBar from "../../../../components/Base/Searchbar";
import PageMaster from "../../../../components/utils/PageMaster";
import UniqueItem from "./UniqueItem";

const CONFIG: ItemConfig = { attrSize: "small", imageSize: "large" };

const equipment = RWUniqueEquipmentItem.getUniqueEquipments();

const UniqueEquipment: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<
    RWUniqueEquipmentItem[]
  >([]);

  return (
    <div className={`page-primary`}>
      <header className="page-header">
        <h1>Unique Equipment</h1>
      </header>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={equipment} filteredObjects={setFilteredObjects} />
      </div>
      <Suspense>
        <PageMaster
          className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-2 lg:grid-cols-3"
          objects={filteredObjects}
          renderObject={(object) => (
            <UniqueItem equipment={object} config={CONFIG} />
          )}
        />
      </Suspense>
    </div>
  );
};

export default UniqueEquipment;
