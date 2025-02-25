import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import TabMaster from "../../../../components/utils/TabMaster";
import Achievements from "./_components/Achievements/Achievements";
import LevelRewards from "./_components/LevelRewards/LevelRewards";
import Badges from "./_components/Badges/Badges";
import { Suspense } from "react";

const PAGES = [
  { name: "Achievements", child: <Achievements /> },
  { name: "Level Rewards", child: <LevelRewards /> },
  { name: "Badges", child: <Badges /> },
];

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.achievements.name,
};

const Page: React.FC = () => (
  <Suspense>
    <TabMaster pages={PAGES} />
  </Suspense>
);

export default Page;
