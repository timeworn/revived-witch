import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Gifts from "./_components/Gifts";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.dailyMission.name,
};

const Page: React.FC = () => <Gifts />;

export default Page;
