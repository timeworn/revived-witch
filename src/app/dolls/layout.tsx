import { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { MetadataProps } from "../../interfaces/MetadataInterfaces";
import siteData from "../../data/siteData";

export async function generateMetadata(
  {}: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMetadata = await parent;
  const characterSite = siteData.siteUrls.characters;

  return {
    title: {
      default: characterSite.name,
      template: `%s | ${characterSite.name} | ${parentMetadata.title?.absolute}`,
    },
  };
}

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
