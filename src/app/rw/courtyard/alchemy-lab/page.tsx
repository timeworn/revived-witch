import React, { lazy } from "react";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";

const AlchemyLab = lazy(() => import("./_components/AlchemyLab"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.courtYard.routes.alchemyLab.name,
};

const Page: React.FC = () => {
  return <AlchemyLab />;
};

export default Page;
