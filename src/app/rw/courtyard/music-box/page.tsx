import React from "react";
import { Metadata } from "next";
import siteData from "../../../../data/siteData";
import MusicBox from "./_components/MusicBox";

export const metadata: Metadata = {
  title: siteData.siteUrls.rw.courtYard.url.musicBox.name,
};

const Page: React.FC = () => {
  return <MusicBox />;
};

export default Page;
