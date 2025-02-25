"use client";

import React, { memo, useState } from "react";
import { RWAudio } from "../../../../../classes/yard/music/RWAudio";
import SearchBar from "../../../../../components/Base/Searchbar";
import PageMaster from "../../../../../components/utils/PageMaster";
import AudioObject from "../../../../../components/utils/AudioObject";

const RESET_PAGE_ON_PARAM = "tab";

interface MusicPageProps {
  music: RWAudio[];
}

const MusicPage: React.FC<MusicPageProps> = memo((props) => {
  const [filteredObjects, setFilteredObjects] = useState<RWAudio[]>([]);

  return (
    <>
      <div className="mb-4 flex h-12 justify-center gap-3">
        <SearchBar objects={props.music} filteredObjects={setFilteredObjects} />
      </div>
      <PageMaster<RWAudio>
        objects={filteredObjects}
        renderObject={(object) => <AudioObject audio={object} />}
        resetPageOnParam={RESET_PAGE_ON_PARAM}
      />
    </>
  );
});

export default MusicPage;
