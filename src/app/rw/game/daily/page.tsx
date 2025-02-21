import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import { lazy } from "react";

const Daily = lazy(() => import("./_components/Daily"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.game.url.dailyMission.name,
};

const Page: React.FC = () => <Daily />;

export default Page;
