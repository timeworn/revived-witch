import React from "react";
import DescriptionElement from "./DescriptionElement";
import { ICharacterYardSkill } from "../../../../../interfaces/CharacterInterfaces";

const CharacterYardSkill: React.FC<{ yardSkill: ICharacterYardSkill }> = ({
  yardSkill,
}) => (
  <div className="round-gray flex flex-row items-center gap-1 p-2 md:p-4">
    <img
      className="not-prose h-16 w-16 md:h-[70] md:w-[70]"
      src={yardSkill.icon}
      alt="Skill Icon"
      loading="lazy"
    />
    <div className="flex flex-col">
      <h3>{DescriptionElement(yardSkill.name)}</h3>
      <p>{DescriptionElement(yardSkill.description)}</p>
    </div>
  </div>
);

export default CharacterYardSkill;
