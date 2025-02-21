import React, { lazy } from "react";
import { Metadata } from "next";
import siteData from "../../../data/siteData";

const Characters = lazy(() => import("./_components/Characters"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.characters.name,
};

const Page: React.FC = () => <Characters />;

export default Page;
