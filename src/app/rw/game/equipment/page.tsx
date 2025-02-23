import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Equipment from "./_components/Equipment";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.dailyMission.name,
};

const Page: React.FC = () => <Equipment />;

export default Page;
