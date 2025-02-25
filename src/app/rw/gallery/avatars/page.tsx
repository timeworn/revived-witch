import React from "react";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import Avatars from "./_components/Avatars";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.routes.gallery.routes.avatar.name,
};

const Page: React.FC = () => (
  <div className="page-primary">
    <header className="page-header">
      <h1>Avatars</h1>
    </header>
    <Avatars />
  </div>
);

export default Page;
