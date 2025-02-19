"use client";

import { Suspense } from "react";
import { RWBgm } from "../../../../classes/yard/music/RWBgm";
import { RWMusicBox } from "../../../../classes/yard/music/RWMusicBox";
import { RWSoundEffects } from "../../../../classes/yard/music/RWSoundEffects";
import { RWVoice } from "../../../../classes/yard/music/RWVoice";
import TabMaster from "../../../../components/utils/TabMaster";
import MusicPage from "./utils/MusicPage";

const bgMusic = new RWBgm().bgm;
const musicBox = RWMusicBox.getMusic();
const soundEffects = new RWSoundEffects().se;
const voicelines = new RWVoice().voice;

const TABS = [
  { name: "Music Box", music: bgMusic },
  { name: "Background Music", music: musicBox },
  { name: "Sound Effects", music: soundEffects },
  { name: "Voicelines", music: voicelines },
];

const MusicBox: React.FC = () => {
  return (
    <Suspense>
      <TabMaster
        pages={TABS.map((tab) => ({
          name: tab.name,
          child: <MusicPage music={tab.music} />,
        }))}
      />
    </Suspense>
  );
};

export default MusicBox;
