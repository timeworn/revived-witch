import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { MetadataProps } from "../../interfaces/MetadataInterfaces";
import siteData from "../../data/siteData";

export async function generateMetadata(
  {}: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const homeSite = siteData.siteUrls.rw.home;

  return {
    title: {
      default: homeSite.name,
      template: `%s | ${homeSite.name} | ${parentMetadata.title?.absolute}`,
    },
  };
}

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
