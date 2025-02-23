import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import React, { lazy } from "react";

const Furniture = lazy(() => import("./_components/Furniture"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.courtYard.routes.furniture.name,
};

const Page: React.FC = () => <Furniture />;

export default Page;
