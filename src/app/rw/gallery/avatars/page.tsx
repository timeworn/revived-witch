import React, { Suspense } from "react";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Avatars from "./_components/Avatars";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.gallery.routes.avatar.name,
};

const Page: React.FC = () => (
  <Suspense>
    <Avatars />
  </Suspense>
);

export default Page;
