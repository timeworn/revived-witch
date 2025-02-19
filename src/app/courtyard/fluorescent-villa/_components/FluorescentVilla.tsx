"use client";

import React, { useState } from "react";
import { RWLightTraining } from "../../../../classes/yard/RWLightTraining";
import SearchBar from "../../../../components/Base/Searchbar";
import LightTraining from "./utils/LightTraining";
import FilteredList from "../../../../components/utils/FilteredList";

const lightTrainings = RWLightTraining.getLightTrainings();

const FluorescentVilla: React.FC = () => {
  const [filteredObjects, setFilteredObjects] = useState<RWLightTraining[]>([]);

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>Fluorescent Villa</h1>
      </header>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar
          objects={lightTrainings}
          filteredObjects={setFilteredObjects}
        />
      </div>
      <div className="grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 lg:grid-cols-4">
        <FilteredList
          objects={lightTrainings}
          filteredObjects={filteredObjects}
          renderObject={(training) => <LightTraining training={training} />}
        />
        ;
      </div>
    </div>
  );
};

export default FluorescentVilla;
