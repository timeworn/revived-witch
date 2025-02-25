import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Daily from "./_components/Daily";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.dailyMission.name,
};

const Page: React.FC = () => <Daily />;

export default Page;
