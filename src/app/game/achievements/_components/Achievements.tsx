"use client";

import React, { Suspense } from "react";
import TabMaster from "../../../../components/utils/TabMaster";
import AchievementMain from "./Achievement/AchievementMain";
import LevelRewards from "./LevelRewards/LevelRewards";
import Badges from "./Badges/Badges";

const PAGES = [
  { name: "Achievements", child: <AchievementMain /> },
  { name: "Level Rewards", child: <LevelRewards /> },
  { name: "Badges", child: <Badges /> },
];

const Achievements: React.FC = () => (
  <Suspense>
    <TabMaster pages={PAGES} />
  </Suspense>
);

export default Achievements;
