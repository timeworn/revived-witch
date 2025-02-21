"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import { RWCharacter } from "../../../../../classes/character/RWCharacter";
import {
  SetShowSkinParams,
  SKIN_TYPES,
} from "../../../../../interfaces/CharacterInterfaces";
import CharacterTop from "./utils/CharacterTop";
import CharacterMarkdown from "./utils/CharacterMarkdown";
import CharacterToc from "./utils/CharacterToc";
import { getCubismUrl } from "../../../../../hooks/getImage";

const CharacterL2D = dynamic(() => import("./utils/CharacterL2D"), {
  ssr: false,
});

const getProfileInfo = (character: RWCharacter) => [
  { label: "Name", value: character.name },
  { label: "Title", value: character.title },
  { label: "Element", value: character.element?.name },
  { label: "Vocation", value: character.vocation?.name },
  { label: "Artist", value: character.skins.artist },
  {
    label: "Overseas Artist",
    value: character.skins.overseasArtist,
  },
  { label: "Chinese CV", value: character.skins.chsCV },
  {
    label: "Japanese CV",
    value: character.skins.jpnCV,
  },
];

const getBasicInfo = (character: RWCharacter) => [
  { label: "Sex", value: character.sex },
  { label: "Birthday", value: character.birthday },
  { label: "Height", value: character.height },
  { label: "Weight", value: character.weight },
  { label: "Hobby", value: character.hobby },
  { label: "Race", value: character.race },
  { label: "Age", value: character.age },
];

interface CharacterProps {
  id: number;
}

let cubismLoaded = false;

const Character: React.FC<CharacterProps> = ({ id }) => {
  const character = useMemo(() => new RWCharacter(id), []);

  const [cubism2, setCubism2] = useState(false);
  const [cubism4, setCubism4] = useState(false);
  const [showSkin, setShowSkin] = useState<SetShowSkinParams>({
    index: -1,
    type: null,
  });

  const profileInfo = useMemo(() => getProfileInfo(character), [character]);
  const basicInfo = useMemo(() => getBasicInfo(character), [character]);

  const handleSkin = useCallback((index: number, skinType: SKIN_TYPES) => {
    setShowSkin({ index, type: skinType });
  }, []);

  useEffect(() => {
    if (cubismLoaded) {
      setCubism2(true);
      setCubism4(true);
    }
  }, []);

  return (
    <div className="page-pt">
      <div className="text-default-alt mx-auto mt-5 max-w-[60rem] px-4 lg:max-w-[85rem]">
        <div className="sm:px-6 md:px-8">
          <CharacterTop character={character} />
          <div className="prose mt-6 max-w-full prose-h2:mb-4 prose-h2:mt-0 prose-h3:mb-0 prose-h3:mt-0 prose-tr:border-none">
            <CharacterMarkdown
              character={character}
              profileInfo={profileInfo}
              basicInfo={basicInfo}
              handleSkin={handleSkin}
            />
          </div>
          <CharacterToc />
        </div>
        <div
          className={`${showSkin.index > -1 ? "" : "hidden"} fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-black bg-opacity-90 p-2`}
        >
          <Script
            src={getCubismUrl("cubism/live2d.min.js")}
            onLoad={() => setCubism2(true)}
          />
          <Script
            src={getCubismUrl("cubism/live2dcubismcore.min.js")}
            onLoad={() => setCubism4(true)}
          />
          {cubism2 && cubism4 && (
            <>
              {(cubismLoaded = true)}
              <CharacterL2D
                character={character}
                showSkin={showSkin}
                setShowSkin={setShowSkin}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
