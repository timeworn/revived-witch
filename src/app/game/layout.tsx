import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { MetadataProps } from "../../interfaces/MetadataInterfaces";
import siteData from "../../data/siteData";

export async function generateMetadata(
  {}: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const gameSite = siteData.siteUrls.game;

  return {
    title: {
      default: gameSite.name,
      template: `%s | ${gameSite.name} | ${parentMetadata.title?.absolute}`,
    },
  };
}

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
