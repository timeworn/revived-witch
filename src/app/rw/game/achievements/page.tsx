import React, { lazy } from "react";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";

const Achievements = lazy(() => import("./_components/Achievements"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.game.url.achievements.name,
};

const Page: React.FC = () => <Achievements />;

export default Page;
