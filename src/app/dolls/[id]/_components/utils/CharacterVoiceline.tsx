import React from "react";
import { ICharacterVoiceline } from "../../../../../interfaces/CharacterInterfaces";
import { RWAudio } from "../../../../../classes/yard/music/RWAudio";
import AudioObject from "../../../../../components/utils/AudioObject";

const CharacterVoiceline: React.FC<{
  voiceline: ICharacterVoiceline;
}> = ({ voiceline }) => {
  const audio = new RWAudio(voiceline);

  return (
    <AudioObject
      audio={audio}
      name={voiceline.name}
      artist={voiceline.description}
    />
  );
};

export default CharacterVoiceline;
