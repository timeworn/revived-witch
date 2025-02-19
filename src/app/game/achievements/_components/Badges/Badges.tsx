import React, { useState } from "react";
import Badge from "./Badge";
import SearchBar from "../../../../../components/Base/Searchbar";
import { RWBadge } from "../../../../../classes/task/RWBadge";
import FilteredList from "../../../../../components/utils/FilteredList";
import { AttributesConfig } from "../../../../../components/utils/Attributes";

const CONFIG: AttributesConfig = {
  attrSize: "xs",
};

const badges = RWBadge.getBadges();

const Badges: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWBadge[]>([]);

  return (
    <>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={badges} filteredObjects={setFilteredObjects} />
      </div>
      <div className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-2 lg:grid-cols-3">
        <FilteredList
          objects={badges}
          filteredObjects={filteredObjects}
          renderObject={(object) => <Badge badge={object} config={CONFIG} />}
        />
      </div>
    </>
  );
};

export default Badges;
