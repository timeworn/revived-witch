import React, { memo } from "react";
import Link from "next/link";
import siteData from "../../../data/siteData";
import { RWCharacter } from "../../../classes/character/RWCharacter";

interface CharacterMiniProps {
  className?: string;
  character: RWCharacter;
}

const CharacterMini: React.FC<CharacterMiniProps> = memo(
  ({ character, className }) => {
    const icons = [
      character.vocation?.imgDescribe,
      character.element?.image,
      character.affiliation?.icon,
    ].filter(Boolean);

    const characterUrl = `${siteData.siteUrls.characters.url}/${character.id}`;
    console.log(characterUrl);
    return (
      <Link
        id="character"
        className={`${className} btn-round-gray btn-anim-alt btn-anim flex flex-col p-2`}
        href={characterUrl}
      >
        <div className="relative h-20 w-20 self-center overflow-hidden p-[3%] transition-transform duration-300 ease-out hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
          <img
            className="absolute inset-0 h-full w-full"
            src={character.frame}
            loading="lazy"
            alt="Character Frame"
          />
          <img
            className="relative h-full w-full"
            src={character.image}
            alt={`${character.name} Portrait`}
            loading="lazy"
          />
          <div className="absolute inset-0 m-1 flex flex-col gap-1">
            <div className="absolute inset-0 m-1 flex flex-col gap-1">
              {icons.map(
                (src, index) =>
                  src && (
                    <img
                      key={index}
                      className="circle-gray relative h-5 w-5 p-1 md:h-6 md:w-6"
                      src={src}
                      alt={`Character Icon ${index + 1}`}
                      loading="lazy"
                    />
                  ),
              )}
            </div>
          </div>
        </div>
        <p
          className="text-title self-center overflow-hidden text-ellipsis text-nowrap"
          title={character.name}
        >
          {character.name}
        </p>
      </Link>
    );
  },
);

export default CharacterMini;
