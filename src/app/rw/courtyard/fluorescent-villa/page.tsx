import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import React, { lazy } from "react";

const FluorescentVilla = lazy(() => import("./_components/FluorescentVilla"));

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.courtYard.routes.fluorescentVilla.name,
};

const Page: React.FC = () => <FluorescentVilla />;

export default Page;
