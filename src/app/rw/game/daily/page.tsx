import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import { lazy } from "react";

const Daily = lazy(() => import("./_components/Daily"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.dailyMission.name,
};

const Page: React.FC = () => <Daily />;

export default Page;
