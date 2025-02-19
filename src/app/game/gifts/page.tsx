import { Metadata } from "next";
import siteData from "../../../data/siteData";
import { lazy } from "react";

const Gifts = lazy(() => import("./_components/Gifts"));

export const metadata: Metadata = {
  title: siteData.siteUrls.game.url.dailyMission.name,
};

const Page: React.FC = () => <Gifts />;

export default Page;
