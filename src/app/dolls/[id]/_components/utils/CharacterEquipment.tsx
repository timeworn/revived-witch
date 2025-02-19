import React from "react";
import DescriptionElement from "./DescriptionElement";
import { RWCharacter } from "../../../../../classes/character/RWCharacter";

const CharacterEquipment: React.FC<{ character: RWCharacter; id?: string }> = ({
  character,
  id,
}) => (
  <>
    <div id={id} className="flex flex-row items-center">
      <div className="w-3/4">
        <h2 className="text-title">Equipment</h2>
        <h3>{character.equipment.name}</h3>
        <blockquote>
          <p>{character.equipment.description}</p>
        </blockquote>
        <p>{DescriptionElement(character.equipment.effect)}</p>
        <p>{DescriptionElement(character.equipment.evolution)}</p>
      </div>
      {character.equipment.icon && (
        <img
          className="not-prose my-auto ml-auto aspect-auto w-20 self-end lg:w-28"
          src={character.equipment.icon}
          alt="Equipment Icon"
          loading="lazy"
        />
      )}
    </div>
    <hr />
  </>
);

export default CharacterEquipment;
