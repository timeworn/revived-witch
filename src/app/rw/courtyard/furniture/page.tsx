import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Furniture from "./_components/Furniture";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.courtYard.routes.furniture.name,
};

const Page: React.FC = () => (
  <Suspense>
    <Furniture />
  </Suspense>
);

export default Page;
