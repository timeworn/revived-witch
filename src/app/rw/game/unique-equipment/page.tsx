import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import UniqueEquipment from "./_components/UniqueEquipment";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.game.routes.dailyMission.name,
};

const Page: React.FC = () => <UniqueEquipment />;

export default Page;
