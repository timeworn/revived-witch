"use client";

import React, { useState } from "react";
import { RWUtils } from "../../../../classes/utils/RWUtils";
import { RWGiftItem } from "../../../../classes/item/RWGiftItem";
import SearchBar from "../../../../components/Base/Searchbar";
import Item from "../../../../components/utils/Item";
import FilteredList from "../../../../components/utils/FilteredList";

const gifts: RWGiftItem[] = [];

Object.values(RWUtils.getFavourPresentTypeData()).forEach((present) => {
  const giftItem = new RWGiftItem(present);
  gifts.push(giftItem);
});

const Gifts: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWGiftItem[]>([]);

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Gifts</h1>
      </header>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={gifts} filteredObjects={setFilteredObjects} />
      </div>
      <div className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 lg:grid-cols-4">
        <FilteredList
          objects={gifts}
          filteredObjects={filteredObjects}
          renderObject={(object) => <Item item={object} />}
        />
      </div>
    </div>
  );
};

export default Gifts;
