import React from "react";
import { ICharacterStat } from "../../../../../interfaces/CharacterInterfaces";

const CharacterBaseStat: React.FC<{ stat: ICharacterStat }> = ({ stat }) => (
  <tr>
    <td className="not-prose">
      <img className="h-8 w-8" src={stat.icon} alt={stat.name} loading="lazy" />
    </td>
    <td>
      {stat.baseValue} + ({stat.addValue})
    </td>
  </tr>
);

export default CharacterBaseStat;
