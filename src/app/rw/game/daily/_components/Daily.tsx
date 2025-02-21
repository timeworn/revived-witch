"use client";

import React, { useState } from "react";
import MissionReward from "./utils/MissionReward";
import SearchBar from "../../../../../components/Base/Searchbar";
import Mission from "./utils/Mission";
import { RWDailyMission } from "../../../../../classes/task/RWDailyMission";
import { RWDailyMissionAward } from "../../../../../classes/task/RWDailyMissionAward";
import { AttributesConfig } from "../../../../../components/utils/Attributes";
import FilteredList from "../../../../../components/utils/FilteredList";

const CONFIG: AttributesConfig = {
  attrSize: "small",
};

const dailyMissions = RWDailyMission.getDailyMissions();
const dailyRewards = RWDailyMissionAward.getDailyMissionAwards();

const Daily: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWDailyMission[]>([]);

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Daily Missions</h1>
      </header>
      <div className="mb-10 flex w-full flex-row justify-center gap-4">
        {dailyRewards.map((reward, index) => (
          <MissionReward key={index} missionReward={reward} />
        ))}
      </div>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar
          objects={dailyMissions}
          filteredObjects={setFilteredObjects}
        />
      </div>
      <div className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 lg:grid-cols-4">
        <FilteredList
          objects={dailyMissions}
          filteredObjects={filteredObjects}
          renderObject={(object) => (
            <Mission mission={object} config={CONFIG} />
          )}
        />
      </div>
    </div>
  );
};

export default Daily;
