import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { MetadataProps } from "../../interfaces/MetadataInterfaces";
import siteData from "../../data/siteData";
import Sidebar from "../../components/Sidebar/Sidebar";

export async function generateMetadata(
  {}: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const homeSite = siteData.siteUrls.rw;

  return {
    title: {
      default: homeSite.name,
      template: `%s | ${homeSite.name} | ${parentMetadata.title?.absolute}`,
    },
  };
}

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Sidebar siteRoute={siteData.siteUrls.rw} />
      <div className="sidebar-margin">{children}</div>
    </>
  );
};

export default layout;
