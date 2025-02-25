import { Metadata, ResolvingMetadata } from "next";
import { RWCharacter } from "../../../../classes/character/RWCharacter";
import { MetadataProps } from "../../../../interfaces/MetadataInterfaces";
import dynamic from "next/dynamic";

const Character = dynamic(() => import("./_components/Character"));

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const characters = RWCharacter.getCharacters();

  return characters.map((character: RWCharacter) => ({
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
