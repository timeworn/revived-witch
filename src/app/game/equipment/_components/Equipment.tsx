"use client";

import React, { Suspense, useState } from "react";
import { RWEquipmentItem } from "../../../../classes/item/RWEquipmentItem";
import SearchBar from "../../../../components/Base/Searchbar";
import PageMaster from "../../../../components/utils/PageMaster";
import Item, { ItemConfig } from "../../../../components/utils/Item";

const CONFIG: ItemConfig = { attrSize: "small", imageSize: "large" };

const equipment = RWEquipmentItem.getEquipments();

const Equipment: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWEquipmentItem[]>([]);

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Equipment</h1>
      </header>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={equipment} filteredObjects={setFilteredObjects} />
      </div>
      <Suspense>
        <PageMaster
          objects={filteredObjects}
          renderObject={(object) => <Item item={object} config={CONFIG} />}
        />
      </Suspense>
    </div>
  );
};

export default Equipment;
