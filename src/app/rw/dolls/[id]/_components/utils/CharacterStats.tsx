import React from "react";
import CharacterBaseStat from "./CharacterBaseStat";
import CharacterEvolution from "./CharacterEvolution";
import { RWCharacter } from "../../../../../../classes/character/RWCharacter";

const CharacterStats: React.FC<{ character: RWCharacter }> = ({
  character,
}) => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Base Stats</h3>
      <table className="w-full table-auto lg:w-1/2">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Base Value + (Per Level Bonus)</th>
          </tr>
        </thead>
        <tbody>
          {character.stats.list.map((stat, key) => (
            <CharacterBaseStat key={key} stat={stat} />
          ))}
        </tbody>
      </table>
    </div>
    <div>
      <h3>Evolutions</h3>
      <table className="w-full table-auto lg:w-1/2">
        <thead>
          <tr>
            <th>Level</th>
            <th>Stat</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {character.stats.evolutions.map((evolution, key) => (
            <CharacterEvolution key={key} evolution={evolution} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CharacterStats;
