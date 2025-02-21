import React, { memo } from "react";
import { RWCharacter } from "../../../../../../classes/character/RWCharacter";

interface CharacterTopProps {
  character: RWCharacter;
}

const CharacterTop: React.FC<CharacterTopProps> = memo(
  ({ character }: { character: RWCharacter }) => {
    return (
      <>
        <div className="float-right clear-right mb-2 ml-2 hidden aspect-square w-2/5 md:flex">
          <img
            className="ml-auto aspect-auto h-full"
            src={character.skins.list[0]?.card}
            loading="lazy"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2 md:justify-start">
          <div>
            <div className="relative h-20 w-20 self-center overflow-hidden p-[3%] transition-transform duration-300 ease-out hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
              <img
                className="absolute inset-0 h-full w-full"
                src={character.frame}
                loading="lazy"
              />
              <img
                className="relative h-full w-full"
                src={character.skins.list[0]?.square}
                alt="Doll"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1">
              <h2 className="text-title font-bold lg:text-4xl">
                {character.name}
              </h2>
              <img className="h-9 w-9" src={character.element?.image} />
            </div>
            <p className="font-semibold">{character.title}</p>
            <div className="flex h-7 flex-row gap-2">
              <img src={character.rarity?.icon} loading="lazy" />
              <div className="h-4/6 self-center border-l border-[var(--color-primary)]" />
              <div className="flex h-full flex-row items-center gap-2">
                <img
                  className="h-full"
                  src={character.vocation?.imgDescribe}
                  loading="lazy"
                />
                <p className="text-nowrap">{character.vocation?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);

export default CharacterTop;
