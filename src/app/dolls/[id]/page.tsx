import React, { lazy } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { RWCharacter } from "../../../classes/character/RWCharacter";
import { MetadataProps } from "../../../interfaces/MetadataInterfaces";

const Character = lazy(() => import("./_components/Character"));

export const generateStaticParams = async () => {
  const characterIds = RWCharacter.getCharacters();

  return characterIds.map((character: RWCharacter) => ({
    id: character.id.toString(),
  }));
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const parentMetadata = await parent;

  const character = new RWCharacter(parseInt(id));
  const dollName = character.name;

  return {
    metadataBase: parentMetadata.metadataBase,
    title: dollName,
    openGraph: {
      ...parentMetadata.openGraph,
      images: {
        url: character.card ?? "",
        alt: dollName,
      },
      url: "./",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Character id={parseInt(id)} />;
}
