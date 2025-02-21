import React, { useState } from "react";
import Achievement from "./Achievement";
import { RWAchievement } from "../../../../../../classes/task/RWAchievement";
import SearchBar from "../../../../../../components/Base/Searchbar";
import FilteredList from "../../../../../../components/utils/FilteredList";
import { AttributesConfig } from "../../../../../../components/utils/Attributes";

const CONFIG: AttributesConfig = {
  attrSize: "small",
};

const achievements = RWAchievement.getAchievements();

const AchievementMain: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWAchievement[]>([]);

  return (
    <>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar
          objects={achievements}
          filteredObjects={setFilteredObjects}
        />
      </div>
      <div className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 lg:grid-cols-4">
        <FilteredList
          objects={achievements}
          filteredObjects={filteredObjects}
          renderObject={(object) => (
            <Achievement achievement={object} config={CONFIG} />
          )}
        />
      </div>
    </>
  );
};

export default AchievementMain;
