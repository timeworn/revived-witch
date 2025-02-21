import React from "react";
import { RWCharacter } from "../../../../../../classes/character/RWCharacter";

const CharacterAffiliation: React.FC<{ character: RWCharacter }> = ({
  character,
}) => (
  <div className="round-gray flex items-center gap-2 p-4">
    <div className="h-16">
      <img
        className="m-auto h-full"
        src={character.affiliation?.icon}
        alt={character.affiliation?.name}
        loading="lazy"
      />
    </div>
    <h3>{character.affiliation?.name}</h3>
  </div>
);

export default CharacterAffiliation;
