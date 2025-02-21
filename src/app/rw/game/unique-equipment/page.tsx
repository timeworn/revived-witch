import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import { lazy } from "react";

const UniqueEquipment = lazy(() => import("./_components/UniqueEquipment"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.game.url.dailyMission.name,
};

const Page: React.FC = () => <UniqueEquipment />;

export default Page;
