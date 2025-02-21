import React from "react";
import { ICharacterSkill } from "../../../../../../interfaces/CharacterInterfaces";
import DescriptionElement from "./DescriptionElement";

const CharacterSkill: React.FC<{ skill: ICharacterSkill }> = ({ skill }) => (
  <div className="flex flex-row">
    <div className="w-[75%]">
      <h3>{skill.name}</h3>
      <p>{DescriptionElement(skill.description)}</p>
    </div>

    <img
      className="not-prose my-auto ml-auto aspect-square w-20 self-end lg:w-28"
      src={skill.icon}
      loading="lazy"
    />
  </div>
);

export default CharacterSkill;
